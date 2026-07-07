/*
 * Kipper Cards — deck data.
 * Pure data only. No DOM, no reading logic — edit meanings here freely
 * without touching reading.js or app.js.
 *
 * Matched to Barbara's Fin de Siècle deck: standard Kipper name first,
 * with Marchetti's own title in brackets where his differs.
 * 39 cards total — the traditional 36 plus Marchetti's three additions
 * (Poverty, Toil and Labour, Community). The Grand Tableau spread uses
 * only cards 1-36, since its 4x9 grid is the traditional layout.
 *
 * Each card: id (1-39), name, meaning (one line), short (1-2 sentence
 * interpretation), long (fuller paragraph).
 * Kipper is read upright only — there are no reversed meanings.
 */

const KIPPER_CARDS = [
  {
    id: 1,
    name: "Main Male",
    significator: true,
    meaning: "The male querent, or the main male figure in the reading",
    short: "Represents a man at the centre of the reading, often chosen as the significator for a male querent.",
    long: "Main Male stands for the principal male figure in a reading, or is chosen deliberately as a significator to represent the person having the reading. Cards drawn around him describe his situation, feelings, and circumstances rather than being read as standalone omens."
  },
  {
    id: 2,
    name: "Main Female",
    significator: true,
    meaning: "The female querent, or the main female figure in the reading",
    short: "Represents a woman at the centre of the reading, often chosen as the significator for a female querent.",
    long: "Main Female stands for the principal female figure in a reading, or is chosen deliberately as a significator to represent the person having the reading. Cards drawn around her describe her situation, feelings, and circumstances rather than being read as standalone omens."
  },
  {
    id: 3,
    name: "Marriage",
    meaning: "Union, commitment, a formal partnership",
    short: "A binding union — marriage, or any formal commitment made concrete.",
    long: "Marriage is commitment given a name and a shape: a wedding, a formal partnership, a bond that's been made official rather than left implied. It doesn't have to mean a literal ceremony — a business partnership or a settled agreement can wear this card too. Its neighbours usually reveal what kind of union, and how solid it is."
  },
  {
    id: 4,
    name: "Meeting",
    meaning: "Social contact, an encounter, coming together",
    short: "An encounter — two people or paths coming together, often the start of something.",
    long: "Meeting is contact itself: an encounter, an introduction, two threads crossing that weren't crossing before. It's more casual and open-ended than Marriage — a meeting doesn't promise commitment, only that a connection has been made. Its neighbours describe who's involved and where it might lead."
  },
  {
    id: 5,
    name: "Good Gentleman (Mature Man)",
    meaning: "Older male figure, mentor, father figure, authority",
    short: "An older man of experience — a mentor, father figure, or someone whose authority is earned rather than given.",
    long: "The Good Gentleman is an older male presence: a father figure, mentor, or someone whose steadiness comes from years lived rather than position held. He tends to be a stabilising, protective figure in a reading. His neighbours show what guidance or support he's offering, and to whom."
  },
  {
    id: 6,
    name: "Good Lady (Mature Woman)",
    meaning: "Older female figure, mentor, maternal figure",
    short: "An older woman of experience — a mentor, maternal figure, or someone whose wisdom comes from years lived.",
    long: "The Good Lady is an older female presence: a mother figure, mentor, or someone whose steadiness comes from years lived rather than position held. Like her counterpart, she tends to be a stabilising, nurturing figure in a reading. Her neighbours show what guidance or support she's offering, and to whom."
  },
  {
    id: 7,
    name: "Letter",
    meaning: "News, correspondence, a message arriving",
    short: "News is on its way — a letter, message, or piece of correspondence approaching.",
    long: "Letter is communication in motion: a message, a piece of correspondence, news arriving from outside your immediate circle. It rarely tells you the content itself — it signals that word is coming. Combined with cards of feeling or event, it shows what kind of news to expect and how it lands."
  },
  {
    id: 8,
    name: "False Person",
    meaning: "Deception, dishonesty, someone not to be trusted",
    short: "Someone who isn't being straight with you — deception, or a person acting in bad faith.",
    long: "False Person is the deck's clearest warning card: dishonesty, a hidden agenda, someone presenting one face while another is true. It doesn't always name a stranger — it can just as easily point to someone already trusted, which is exactly why it matters. Its neighbours usually name who, and where the dishonesty lies."
  },
  {
    id: 9,
    name: "Change",
    meaning: "A shift in circumstances, often sudden",
    short: "Circumstances shifting — a change, often quick and not entirely of your choosing.",
    long: "Change marks a turning point: a shift in circumstances that arrives with some speed rather than growing slowly. It's neutral in itself — the shift can be welcome or unwelcome — but it always means things won't stay as they were. Its neighbours describe what's changing and which direction it's moving in."
  },
  {
    id: 10,
    name: "Journey",
    meaning: "Travel, movement, leaving something behind",
    short: "Movement — a trip, a departure, or something set in motion and now underway.",
    long: "Journey is distance covered: physical travel, a departure, or simply something moving from one state to another and leaving the old one behind. It's forward motion, usually welcome. Read alongside its neighbours to see what's moving, where it's headed, and what's being left."
  },
  {
    id: 11,
    name: "Sudden Wealth",
    meaning: "Unexpected money, a windfall, quick gain",
    short: "An unexpected financial gain — money arriving quickly and from an unforeseen source.",
    long: "Sudden Wealth is a windfall: money arriving faster and more unexpectedly than through ordinary income. It's a welcome card, though 'sudden' cuts both ways — gains that come quickly can also need managing carefully rather than spent at the same pace. Its neighbours usually show the source, and whether it lasts."
  },
  {
    id: 12,
    name: "Rich Girl (Privileged Lady)",
    meaning: "A younger woman of means, ease, or advantage",
    short: "A younger woman with means or advantage — ease, comfort, or a position of privilege.",
    long: "The Rich Girl represents a younger woman who moves through the world with some advantage already in hand — financial ease, status, or simply favourable circumstance. She isn't necessarily idle; the card is about advantage, not laziness. Her neighbours show whether that advantage is being used well or taken for granted."
  },
  {
    id: 13,
    name: "Young Good Lord (Wealthy Man)",
    meaning: "A younger man of means, ambition, status",
    short: "A younger man of means or ambition — someone building or already holding status.",
    long: "The Young Good Lord represents a younger man with resources, ambition, or rising status — someone on the way up, or already arrived. He carries more drive than the Good Gentleman's settled authority. His neighbours show what he's building toward, or who he's connected with."
  },
  {
    id: 14,
    name: "Sad News",
    meaning: "Disappointing information, a setback in communication",
    short: "Disappointing news landing — information that sets things back rather than moves them forward.",
    long: "Sad News is a letdown delivered in words: information that disappoints, a setback communicated rather than simply felt. It's rarely catastrophic on its own, but it does mean bracing for something less than hoped for. Its neighbours usually show the subject of the news and how heavily it lands."
  },
  {
    id: 15,
    name: "Lovers (Success in Love)",
    meaning: "Romantic fulfilment, a good match, mutual affection",
    short: "Romantic fulfilment — a good match, mutual affection, love going well.",
    long: "Lovers is one of the deck's warmest cards: a good match, mutual affection, romantic success rather than romantic struggle. It tends to soften whatever sits beside it and mark the emotional high point of a spread. Where it lands often shows exactly where love is working."
  },
  {
    id: 16,
    name: "His Thoughts",
    meaning: "What is on someone's mind, a change of heart or perspective",
    short: "What's on someone's mind — private thought, or a shift in how they see things.",
    long: "His Thoughts points inward: what someone is privately turning over, a change of heart, a perspective quietly shifting before it's spoken aloud. It's one of the few cards that describes an internal state rather than an external event. Neighbours usually reveal whose thoughts, and what they're circling."
  },
  {
    id: 17,
    name: "Gift",
    meaning: "Something given freely, appreciation, a kindness received",
    short: "A gift or gesture of appreciation — something given freely, without a hidden cost.",
    long: "Gift is warmth given outward and inward: a present, a kind gesture, appreciation offered or received. It's one of the deck's gentler cards, softening whatever sits beside it. It can also mark a talent or something someone was simply born with, not earned."
  },
  {
    id: 18,
    name: "Child",
    meaning: "A new beginning, innocence, something small or young",
    short: "Something new, small, and just beginning — innocent, unformed, full of potential.",
    long: "Child is newness in its earliest form: a literal child, a new idea, a fresh start that hasn't grown into anything yet. It carries innocence and a lack of guile. Combined with other cards it often marks the very beginning of whatever they describe, before it's had time to develop."
  },
  {
    id: 19,
    name: "Fatality",
    meaning: "An event beyond control, fate, something unavoidable",
    short: "Something beyond your control — fate, an unavoidable turn of events.",
    long: "Fatality names what can't be argued with: an event beyond personal control, a turn dictated by circumstance rather than choice. It's rarely comfortable to draw, but it's honest — and Kipper tradition holds that what this card names is best met directly rather than resisted. Its neighbours show what the fated matter actually concerns."
  },
  {
    id: 20,
    name: "House",
    meaning: "Home, family, domestic life",
    short: "Home and family — the domestic centre of the matter, or literal security and shelter.",
    long: "House is the household itself: family, home life, and the sense of a settled base. It can point to a literal property, or to the emotional centre a person returns to. Its neighbours usually tell you whose home, and what's happening inside it."
  },
  {
    id: 21,
    name: "Living Room (Family Room)",
    meaning: "Close family matters, private gatherings",
    short: "Close family matters — private gatherings, the inner circle rather than the wider world.",
    long: "The Living Room is the House drawn in closer: private family matters, small gatherings among people who already know each other well, conversations that happen behind closed doors rather than in public. Its neighbours show what's being discussed, or who's gathered."
  },
  {
    id: 22,
    name: "Official Person (Military Person)",
    meaning: "Authority, institution, someone in uniform or formal role",
    short: "Someone in a formal or official role — authority, institution, a uniformed or ranked position.",
    long: "The Official Person represents formal authority made personal: someone acting through an institutional role — official, uniformed, ranked, or otherwise operating by the rules of a larger structure rather than as a private individual. Neighbours show whether that authority is helpful or an obstacle."
  },
  {
    id: 23,
    name: "Court of Law",
    meaning: "Legal matters, disputes, formal judgment",
    short: "A legal matter — a dispute, a formal judgment, something to be settled by the rules rather than privately.",
    long: "Court of Law brings formal process to a dispute: legal proceedings, a judgment being sought, a disagreement that's escalated beyond what can be settled quietly between the people involved. Its neighbours usually name what's being contested and how it's likely to resolve."
  },
  {
    id: 24,
    name: "Theft",
    meaning: "Loss, something taken, vulnerability",
    short: "Something taken or lost — loss, vulnerability, a sense of being exposed.",
    long: "Theft is loss made literal: something taken, whether property, money, trust, or a sense of safety. It doesn't always describe a crime — it can be loss of any kind that leaves someone feeling exposed. Its neighbours usually name what's been taken and from where."
  },
  {
    id: 25,
    name: "High Honours",
    meaning: "Recognition, achievement, status",
    short: "Recognition or achievement — status earned and acknowledged.",
    long: "High Honours is recognition made public: an achievement acknowledged, status conferred, standing that others can see and confirm. It's an unambiguously positive card, marking a genuine high point rather than a private hope. Its neighbours show what the recognition is for."
  },
  {
    id: 26,
    name: "Great Fortune",
    meaning: "Deep fulfilment, dreams realised, happiness",
    short: "Deep fulfilment — dreams realised, happiness that runs all the way through.",
    long: "Great Fortune is the deck's clearest card of true happiness: dreams realised, deep fulfilment, a joy that isn't fleeting or partial. Wherever it lands, it lifts the reading, much as the Sun does in tarot. It's about as close as Kipper gets to an unambiguous 'yes, and it's good.'"
  },
  {
    id: 27,
    name: "Unhoped-for Money",
    meaning: "A small, welcome windfall, quick financial turnaround",
    short: "A small, welcome windfall — money arriving when it wasn't expected at all.",
    long: "Unhoped-for Money is a smaller, quicker cousin to Sudden Wealth: a modest financial turnaround that arrives without being asked for or planned around. It's not life-changing, but it's real relief exactly when it's needed. Its neighbours usually show the source."
  },
  {
    id: 28,
    name: "Expectations",
    meaning: "Hope, longing, patience for something not yet arrived",
    short: "Hope held while waiting — longing for something that hasn't arrived yet, but might.",
    long: "Expectations is hope stretched across time: a longing for something not yet here, patience being asked of you while the outcome is still unwritten. It doesn't promise the thing hoped for will arrive, only that the hoping itself is the current state. Its neighbours often show how likely that hope is to land."
  },
  {
    id: 29,
    name: "Prison",
    meaning: "Restriction, feeling trapped, limitation",
    short: "A feeling of being trapped — restriction, limitation, circumstances that confine.",
    long: "Prison is restriction made concrete: feeling trapped, boxed in, limited by circumstance, obligation, or someone else's control. It's rarely literal incarceration — far more often it's a job, a relationship, or a situation that has stopped feeling like a choice. Its neighbours usually show what's doing the confining."
  },
  {
    id: 30,
    name: "Court Official",
    meaning: "A lawyer, judge, or formal decision-maker",
    short: "A lawyer, judge, or decision-maker — someone whose formal ruling will matter.",
    long: "The Court Official is the person behind the process named by Court of Law: a lawyer, a judge, an official whose decision carries formal weight. Where Court of Law names the dispute, this card names the person deciding it. Neighbours show which way that decision is likely to lean."
  },
  {
    id: 31,
    name: "Short Illness",
    meaning: "Temporary ill health, need for rest",
    short: "A passing bout of ill health — temporary, and asking for rest rather than alarm.",
    long: "Short Illness is health trouble that passes: a temporary setback, a need for rest and recovery rather than a lasting condition. It's a card to take seriously without over-reacting to. Its neighbours usually show whose health, and how quickly things turn around."
  },
  {
    id: 32,
    name: "Sorrow and Unpleasantness",
    meaning: "Despair, distress, a difficult period",
    short: "A genuinely difficult period — despair, distress, a run of unpleasantness to get through.",
    long: "Sorrow and Unpleasantness is one of the deck's heaviest cards: real distress, a difficult stretch that shouldn't be minimised. It doesn't offer a silver lining on its own — that has to come from its neighbours, which usually show what's causing the difficulty and whether relief is nearby."
  },
  {
    id: 33,
    name: "Gloomy Thoughts",
    meaning: "Low mood, mental strain, dark thinking",
    short: "Low mood and mental strain — thinking that's turned dark, worry that won't settle.",
    long: "Gloomy Thoughts is distress carried internally rather than caused externally: low mood, rumination, a mental fog that colours everything else in the reading while it sits there. It's rarely permanent, but while it lingers it obscures a clean read of whatever's beside it."
  },
  {
    id: 34,
    name: "Work and Occupation",
    meaning: "Employment, daily labour, one's job",
    short: "Employment and daily work — the job itself, and how it's going.",
    long: "Work and Occupation is the working life plainly named: employment, daily labour, the job someone does and how it's currently going. It's a fairly neutral card in itself — its neighbours decide whether the work is going well, badly, or simply continuing."
  },
  {
    id: 35,
    name: "Long Road",
    meaning: "A lengthy path, patience needed, distance",
    short: "A lengthy path ahead — distance to cover, and patience needed to cover it.",
    long: "Long Road stretches Journey out over time: not a quick trip but a drawn-out path, a process that takes longer than hoped, distance that has to be covered gradually. It asks for patience rather than urgency. Its neighbours show what's at the end of the road."
  },
  {
    id: 36,
    name: "Great Water / Hope",
    meaning: "Deep emotion, spiritual longing, dreams and aspiration",
    short: "Deep feeling and aspiration — emotion running underneath the surface, hope reaching upward.",
    long: "Great Water carries the deck's deepest emotional current: spiritual longing, dreams and aspiration, feeling that runs far beneath the practical surface of a question. It often marks what someone truly wants, beneath what they've been asking about directly. Its neighbours show whether that deeper hope is being met."
  },
  {
    id: 37,
    name: "Poverty",
    meaning: "Financial hardship, lack, struggle",
    short: "Financial hardship — lack, struggle, resources stretched thin.",
    long: "Poverty is scarcity named directly: financial hardship, a stretch where resources don't cover what's needed. One of Marchetti's three additions to the traditional 36, it's a card to take seriously rather than soften. Its neighbours usually show the cause, and whether relief is within reach."
  },
  {
    id: 38,
    name: "Toil and Labour",
    meaning: "Hard, grinding work, effort without much reward",
    short: "Grinding effort — hard work that isn't yet paying off the way it should.",
    long: "Toil and Labour is work at its most exhausting: effort that's real and sustained but not yet matched by reward. It's harder-edged than Work and Occupation's neutral employment — this card is about the grind specifically. Its neighbours often show whether the effort is close to paying off."
  },
  {
    id: 39,
    name: "Community",
    meaning: "Collective support, belonging, shared effort",
    short: "Collective support — belonging, shared effort, strength found in numbers.",
    long: "Community is the deck's card of shared strength: belonging, collective support, something achieved or endured together rather than alone. The last of Marchetti's three additions, it softens hardship cards nearby and amplifies good ones. Its neighbours show who that support is coming from."
  }
];

/*
 * Combination rules table.
 * Key: two card ids joined as "min_max" (order-independent).
 * Value: a short plain-English combination line.
 * Add new pairs by following the same "a_b" key pattern — ids only,
 * smaller id first. Not every pair needs an entry; reading.js falls
 * back to a generated line built from each card's own meaning when
 * a pair isn't listed here.
 */
const KIPPER_COMBINATIONS = {
  "1_2": "Main Male + Main Female: a relationship between the two — read their other neighbours to see how it's going.",
  "1_7": "Main Male + Letter: news concerning, or brought by, a man.",
  "1_8": "Main Male + False Person: a man not being entirely straightforward, caution advised.",
  "1_9": "Main Male + Change: a significant shift affecting a man.",
  "1_14": "Main Male + Sad News: disappointing news concerning a man.",
  "1_15": "Main Male + Lovers: romantic fulfilment for a man.",
  "1_17": "Main Male + Gift: a gift or kindness from, or offered to, a man.",
  "1_19": "Main Male + Fatality: an unavoidable turn of events for a man.",
  "1_20": "Main Male + House: a man's home life, or a man at the centre of domestic matters.",
  "1_24": "Main Male + Theft: loss or vulnerability affecting a man.",
  "1_26": "Main Male + Great Fortune: real happiness and fulfilment for a man.",
  "1_29": "Main Male + Prison: a man feeling trapped or restricted.",
  "1_32": "Main Male + Sorrow and Unpleasantness: a difficult period for a man.",
  "1_34": "Main Male + Work and Occupation: a man's job or working life.",
  "1_35": "Main Male + Long Road: a lengthy process or path for a man.",
  "1_36": "Main Male + Great Water/Hope: deep feeling or longing on a man's part.",
  "2_7": "Main Female + Letter: news concerning, or brought by, a woman.",
  "2_8": "Main Female + False Person: a woman not being entirely straightforward, caution advised.",
  "2_9": "Main Female + Change: a significant shift affecting a woman.",
  "2_14": "Main Female + Sad News: disappointing news concerning a woman.",
  "2_15": "Main Female + Lovers: romantic fulfilment for a woman.",
  "2_17": "Main Female + Gift: a gift or kindness from, or offered to, a woman.",
  "2_19": "Main Female + Fatality: an unavoidable turn of events for a woman.",
  "2_20": "Main Female + House: a woman's home life, or a woman at the centre of domestic matters.",
  "2_24": "Main Female + Theft: loss or vulnerability affecting a woman.",
  "2_26": "Main Female + Great Fortune: real happiness and fulfilment for a woman.",
  "2_29": "Main Female + Prison: a woman feeling trapped or restricted.",
  "2_32": "Main Female + Sorrow and Unpleasantness: a difficult period for a woman.",
  "2_34": "Main Female + Work and Occupation: a woman's job or working life.",
  "2_35": "Main Female + Long Road: a lengthy process or path for a woman.",
  "2_36": "Main Female + Great Water/Hope: deep feeling or longing on a woman's part.",
  "3_4": "Marriage + Meeting: a significant encounter leading toward commitment.",
  "3_26": "Marriage + Great Fortune: a deeply happy, fulfilling partnership.",
  "3_20": "Marriage + House: a marriage and a home coming together, or a domestic union.",
  "3_36": "Marriage + Great Water/Hope: a partnership rooted in deep feeling, or a hoped-for union.",
  "5_8": "Good Gentleman + False Person: a trusted older man with something to hide — caution advised.",
  "5_17": "Good Gentleman + Gift: a meaningful gift from a significant older man.",
  "6_8": "Good Lady + False Person: a trusted older woman with something to hide — caution advised.",
  "6_17": "Good Lady + Gift: a meaningful gift from a significant older woman.",
  "7_10": "Letter + Journey: news about travel, or a message arriving from a distance.",
  "7_14": "Letter + Sad News: disappointing news arriving in writing.",
  "7_20": "Letter + House: correspondence concerning the home.",
  "9_20": "Change + House: a house move or domestic upheaval.",
  "10_24": "Journey + Theft: risk of loss while travelling.",
  "10_35": "Journey + Long Road: a lengthy journey or drawn-out process ahead.",
  "11_34": "Sudden Wealth + Work and Occupation: financial gain through work or a career move.",
  "11_27": "Sudden Wealth + Unhoped-for Money: a strong run of unexpected financial gain.",
  "15_36": "Lovers + Great Water/Hope: a hoped-for romantic outcome coming to pass.",
  "17_5": "Gift + Good Gentleman: a meaningful gift from someone significant.",
  "17_6": "Gift + Good Lady: a meaningful gift from someone significant.",
  "18_20": "Child + House: a new addition to the household, literal or otherwise.",
  "18_31": "Short Illness + Child: a child's minor illness, or a vulnerable, delicate feeling.",
  "20_29": "House + Prison: feeling trapped within the home or family situation.",
  "23_24": "Court of Law + Theft: a legal matter involving loss or dispute.",
  "23_30": "Court of Law + Court Official: a legal matter reaching a formal decision-maker.",
  "24_30": "Court Official + Theft: a legal matter involving loss or dispute.",
  "25_34": "High Honours + Work and Occupation: recognition or promotion at work.",
  "26_3": "Great Fortune + Marriage: a deeply happy, fulfilling partnership.",
  "27_34": "Unhoped-for Money + Work and Occupation: an unexpected financial turnaround through work.",
  "29_34": "Prison + Work and Occupation: feeling trapped or stuck in a job.",
  "31_18": "Short Illness + Child: a child's minor illness, or a vulnerable, delicate feeling.",
  "32_34": "Sorrow and Unpleasantness + Work and Occupation: a genuinely difficult stretch at work.",
  "33_36": "Gloomy Thoughts + Great Water/Hope: low mood sitting over deep emotional matters.",
  "34_38": "Work and Occupation + Toil and Labour: a job that's demanding hard, grinding effort.",
  "35_10": "Long Road + Journey: a lengthy journey or drawn-out process ahead.",
  "36_15": "Great Water/Hope + Lovers: a hoped-for romantic outcome coming to pass.",
  "37_34": "Poverty + Work and Occupation: financial hardship despite steady work.",
  "37_29": "Poverty + Prison: hardship that feels inescapable.",
  "39_20": "Community + House: family and wider support coming together around the home.",
  "39_32": "Community + Sorrow and Unpleasantness: a difficult period made easier by shared support.",
  "8_5": "False Person + Good Gentleman: a trusted older man with something to hide — caution advised.",
  "8_6": "False Person + Good Lady: a trusted older woman with something to hide — caution advised.",
  "14_7": "Sad News + Letter: disappointing news arriving in writing.",
  "20_9": "House + Change: a house move or domestic upheaval.",
  "24_10": "Theft + Journey: risk of loss while travelling.",
  "26_39": "Great Fortune + Community: happiness found and shared with others."
};
