/*
 * Kipper Cards — reading logic.
 * Pure logic only: shuffling, spreads, combination text, Grand Tableau
 * interpretation. No DOM access here — app.js does all rendering.
 *
 * This separation is deliberate: if access control (unlock code, login,
 * paywall) is added later, it wraps calls into KipperReading from app.js
 * without needing to touch any of the logic in this file.
 */

const KipperReading = (function () {
  // ---- seeded randomness -------------------------------------------------

  function hashStringToSeed(str) {
    let h1 = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) {
      h1 = Math.imul(h1 ^ str.charCodeAt(i), 3432918353);
      h1 = (h1 << 13) | (h1 >>> 19);
    }
    return function () {
      h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
      h1 = Math.imul(h1 ^ (h1 >>> 13), 3266489909);
      h1 ^= h1 >>> 16;
      return h1 >>> 0;
    };
  }

  function mulberry32(seedInt) {
    let a = seedInt;
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function rngFromSeed(seedString) {
    const seedFn = hashStringToSeed(String(seedString));
    return mulberry32(seedFn());
  }

  function seededShuffle(array, seedString) {
    const rng = rngFromSeed(seedString);
    const result = array.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function newSeed() {
    return `${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
  }

  function dailySeedForToday() {
    const now = new Date();
    return `daily-${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  }

  // ---- deck access --------------------------------------------------------

  function getCard(id) {
    return KIPPER_CARDS.find((card) => card.id === id) || null;
  }

  function allCardIds() {
    return KIPPER_CARDS.map((card) => card.id);
  }

  // Grand Tableau is a fixed 4x9 (36-cell) layout — traditional structure,
  // so it draws only from the traditional 36 and excludes Marchetti's
  // three additions (Poverty, Toil and Labour, Community).
  function tableauCardIds() {
    return KIPPER_CARDS.filter((card) => card.id <= 36).map((card) => card.id);
  }

  // ---- combinations ---------------------------------------------------

  function combinationKey(idA, idB) {
    const lo = Math.min(idA, idB);
    const hi = Math.max(idA, idB);
    return `${lo}_${hi}`;
  }

  function fallbackCombination(cardA, cardB) {
    return `${cardA.name} + ${cardB.name}: read “${cardA.meaning.toLowerCase()}” together with “${cardB.meaning.toLowerCase()}”.`;
  }

  function getCombination(idA, idB) {
    const cardA = getCard(idA);
    const cardB = getCard(idB);
    if (!cardA || !cardB) {
      return "";
    }
    const key = combinationKey(idA, idB);
    return KIPPER_COMBINATIONS[key] || fallbackCombination(cardA, cardB);
  }

  // ---- spread: daily single card ---------------------------------------

  function drawDaily(seed) {
    const useSeed = seed || dailySeedForToday();
    const shuffled = seededShuffle(allCardIds(), useSeed);
    const cardId = shuffled[0];
    return {
      type: "daily",
      seed: useSeed,
      card: getCard(cardId)
    };
  }

  // ---- spread: situation / action / outcome -----------------------------

  function drawThreeCard(seed) {
    const useSeed = seed || newSeed();
    const shuffled = seededShuffle(allCardIds(), useSeed);
    const ids = shuffled.slice(0, 3);
    const labels = ["Situation", "Action", "Outcome"];
    const cards = ids.map((id, i) => ({ label: labels[i], card: getCard(id) }));
    const combinations = [
      { between: [labels[0], labels[1]], text: getCombination(ids[0], ids[1]) },
      { between: [labels[1], labels[2]], text: getCombination(ids[1], ids[2]) }
    ];
    return { type: "three-card", seed: useSeed, cards, combinations };
  }

  // ---- spread: significator + 4 surrounding cards -----------------------

  function drawSignificatorSpread(seed, significatorId) {
    const useSeed = seed || newSeed();
    const pool = allCardIds().filter((id) => id !== significatorId);
    const shuffled = seededShuffle(pool, useSeed);
    const ids = shuffled.slice(0, 4);
    const positions = ["Above", "Below", "Left", "Right"];
    const significator = getCard(significatorId);
    const surrounding = ids.map((id, i) => ({
      position: positions[i],
      card: getCard(id),
      combination: getCombination(significatorId, id)
    }));
    return { type: "significator", seed: useSeed, significator, surrounding };
  }

  // ---- spread: grand tableau (4 rows x 9 columns) -----------------------

  const TABLEAU_ROWS = 4;
  const TABLEAU_COLS = 9;

  function positionToRowCol(index) {
    return { row: Math.floor(index / TABLEAU_COLS), col: index % TABLEAU_COLS };
  }

  function gridDistance(a, b) {
    return Math.max(Math.abs(a.row - b.row), Math.abs(a.col - b.col));
  }

  function quadrantOf(rowCol) {
    const topHalf = rowCol.row < TABLEAU_ROWS / 2;
    if (rowCol.col === 4) {
      return {
        key: "central",
        label: "central column",
        meaning: "This sits in the tableau's central column — the very heart of the matter, directly relevant regardless of which side of the layout it falls on."
      };
    }
    const leftHalf = rowCol.col < 4;
    if (topHalf && leftHalf) {
      return {
        key: "top-left",
        label: "upper-left quadrant",
        meaning: "The upper-left of the tableau leans toward private and emotional matters, and things still forming."
      };
    }
    if (topHalf && !leftHalf) {
      return {
        key: "top-right",
        label: "upper-right quadrant",
        meaning: "The upper-right of the tableau leans toward hopes, growth, and where things are heading."
      };
    }
    if (!topHalf && leftHalf) {
      return {
        key: "bottom-left",
        label: "lower-left quadrant",
        meaning: "The lower-left of the tableau leans toward home, foundation, and the roots of the matter."
      };
    }
    return {
      key: "bottom-right",
      label: "lower-right quadrant",
      meaning: "The lower-right of the tableau leans toward outcomes and the material, practical world."
    };
  }

  const CORNER_INDEXES = {
    0: { label: "top-left corner", meaning: "A hidden or unexpected influence framing the whole reading." },
    [TABLEAU_COLS - 1]: { label: "top-right corner", meaning: "What's hoped for, or the direction things are being pulled toward." },
    [TABLEAU_COLS * (TABLEAU_ROWS - 1)]: { label: "bottom-left corner", meaning: "The root or origin the whole situation grew from." },
    [TABLEAU_COLS * TABLEAU_ROWS - 1]: { label: "bottom-right corner", meaning: "The long-term outcome, where everything is eventually heading." }
  };

  function drawGrandTableau(seed, significatorId) {
    const useSeed = seed || newSeed();
    const shuffled = seededShuffle(tableauCardIds(), useSeed);
    const grid = shuffled.map((id, index) => {
      const rowCol = positionToRowCol(index);
      return { index, row: rowCol.row, col: rowCol.col, card: getCard(id) };
    });

    const significatorTile = grid.find((tile) => tile.card.id === significatorId);
    const significatorPos = { row: significatorTile.row, col: significatorTile.col };

    const withDistance = grid.map((tile) => {
      const distance = gridDistance({ row: tile.row, col: tile.col }, significatorPos);
      const corner = CORNER_INDEXES[tile.index] || null;
      return {
        ...tile,
        distanceFromSignificator: distance,
        proximity: distance === 0 ? "significator" : distance === 1 ? "near" : distance === 2 ? "close" : "far",
        sameRowAsSignificator: tile.row === significatorPos.row,
        sameColAsSignificator: tile.col === significatorPos.col,
        corner
      };
    });

    const nearCards = withDistance.filter((t) => t.proximity === "near");
    const farCards = withDistance.filter((t) => t.proximity === "far");
    const corners = withDistance.filter((t) => t.corner);
    const quadrant = quadrantOf(significatorPos);

    return {
      type: "grand-tableau",
      seed: useSeed,
      rows: TABLEAU_ROWS,
      cols: TABLEAU_COLS,
      grid: withDistance,
      significator: significatorTile.card,
      significatorPosition: significatorPos,
      nearCards,
      farCards,
      corners,
      quadrant
    };
  }

  return {
    seededShuffle,
    newSeed,
    dailySeedForToday,
    getCard,
    allCardIds,
    getCombination,
    drawDaily,
    drawThreeCard,
    drawSignificatorSpread,
    drawGrandTableau,
    TABLEAU_ROWS,
    TABLEAU_COLS
  };
})();
