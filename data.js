/*
 * Kipper Cards — deck data.
 * Pure data only. No DOM, no reading logic — edit meanings here freely
 * without touching reading.js or app.js.
 *
 * Each card: id (1-36, traditional order), name, meaning (one line),
 * short (1-2 sentence interpretation), long (fuller paragraph).
 * Kipper is read upright only — there are no reversed meanings.
 */

const KIPPER_CARDS = [
  {
    id: 1,
    name: "Rider",
    meaning: "News, a visitor, something arriving from outside",
    short: "News is on its way — often good, sometimes simply word arriving from someone outside your day-to-day.",
    long: "The Rider is movement toward you: a message, a visitor, or news approaching from outside your immediate circle. It rarely brings the news itself — it signals that something is en route. Combined with cards of feeling or event, it tells you what kind of news to expect and where it's coming from."
  },
  {
    id: 2,
    name: "Clover",
    meaning: "Luck, a small joy, a brief lucky break",
    short: "A small stroke of luck — pleasant, real, but usually short-lived rather than life-changing.",
    long: "Clover is good fortune in miniature: a lucky coincidence, an easy win, a moment of relief. It doesn't promise lasting change, but it does promise that things go your way for a little while. Its meaning sharpens a lot depending on its neighbours — pair it with something serious and it softens the blow; pair it with something joyful and it doubles it."
  },
  {
    id: 3,
    name: "Ship",
    meaning: "Travel, business, movement, a journey or venture",
    short: "Movement — a trip, a business dealing, or something set in motion that's now underway.",
    long: "The Ship represents distance covered: physical travel, a business venture, import or export, or simply something moving from one state to another. It's forward motion, and usually welcome motion. Read alongside its neighbours to see what's moving, where it's going, and what it's carrying with it."
  },
  {
    id: 4,
    name: "House",
    meaning: "Home, family, domestic life, security",
    short: "Home and family — the domestic centre of the matter, or literal security and shelter.",
    long: "The House is the household itself: family, home life, and the sense of a settled base. It can point to a literal property, or to the emotional centre a person returns to. Its neighbours usually tell you whose home, and what's happening inside it."
  },
  {
    id: 5,
    name: "Tree",
    meaning: "Health, roots, slow and steady growth",
    short: "Health and roots — something growing slowly, steadily, and deeply rather than quickly.",
    long: "The Tree speaks to health, family lineage, and anything that grows over a long time rather than overnight. It asks for patience — nothing here is instant. In health readings it's a central card; elsewhere it points to something with deep roots, good or troubled."
  },
  {
    id: 6,
    name: "Clouds",
    meaning: "Doubt, confusion, temporary trouble",
    short: "Confusion or a mixed patch — not disaster, but things aren't clear right now.",
    long: "Clouds bring doubt, mixed feelings, or a passing patch of difficulty. It's rarely permanent — clouds move — but while it sits over a card it obscures the clean read of it. Look at what's either side: is the cloud lifting, or gathering?"
  },
  {
    id: 7,
    name: "Snake",
    meaning: "Betrayal, complication, a rival or indirect path",
    short: "A complication, a rival, or someone acting indirectly rather than straightforwardly.",
    long: "The Snake is the traditional warning card: deceit, a third party complicating things, or a situation that isn't as straightforward as it looks. It doesn't always mean malice — sometimes it's just an indirect, roundabout path to where you're going. Pay close attention to its neighbours; they usually name what's being complicated."
  },
  {
    id: 8,
    name: "Coffin",
    meaning: "An ending, transformation, illness, a hard stop",
    short: "An ending or a hard stop — a chapter closing so something else can begin.",
    long: "The Coffin is the deck's clearest ending card. It rarely means literal death; far more often it means a definite close — a job, a phase, a way of doing things, sometimes health. It's uncomfortable, but it's honest: whatever it touches is finished, and its neighbours describe what has to end and what comes after."
  },
  {
    id: 9,
    name: "Bouquet",
    meaning: "Invitation, a gift, a kind gesture, pleasure",
    short: "A gift, invitation, or gesture of appreciation — something pleasant offered to you.",
    long: "The Bouquet is warmth extended outward: an invitation, a present, a compliment, a kind gesture. It's one of the deck's gentler cards, softening whatever it sits beside. It can also point to beauty, celebration, or being appreciated for who you are."
  },
  {
    id: 10,
    name: "Scythe",
    meaning: "A sudden cut, danger, a quick decisive action",
    short: "Something sudden and sharp — a quick decision, a cut, or a warning to act with care.",
    long: "The Scythe is abrupt: a sudden decision, a sharp cut to a situation, or a risk of injury or accident. It's a card of speed rather than patience — whatever it touches happens fast, for better or worse. Take it as a nudge to move decisively, or a caution to slow down and watch your step, depending on its company."
  },
  {
    id: 11,
    name: "Whip",
    meaning: "Conflict, argument, repeated friction",
    short: "Friction or an argument — a dispute that's recurring rather than a one-off.",
    long: "The Whip is conflict with a rhythm to it: repeated arguments, ongoing friction, a disagreement that keeps resurfacing rather than resolving. It can also point, more literally, to exercise or discipline. Its neighbours usually show who the friction is with and what keeps triggering it."
  },
  {
    id: 12,
    name: "Birds",
    meaning: "Nervous energy, chatter, anxiety, a pair or couple",
    short: "Talk, nerves, or a pair of people — conversation and a little restlessness.",
    long: "Birds bring conversation, gossip, and nervous energy — small talk that carries real information if you listen for it. They can also represent a couple or pair, two people linked together. Anxiety often rides alongside this card; it's the deck's way of saying 'a lot of chatter, not much stillness.'"
  },
  {
    id: 13,
    name: "Child",
    meaning: "Something new and small, innocence, a fresh start",
    short: "Something new, small, and just beginning — innocent, unformed, full of potential.",
    long: "The Child is newness in its earliest form: a literal child, a new idea, a fresh start that hasn't grown into anything yet. It carries innocence and a lack of guile. Combined with other cards it often points to the very beginning of whatever they describe, before it's had time to develop."
  },
  {
    id: 14,
    name: "Fox",
    meaning: "Deception, tricky work matters, self-employment",
    short: "Something not quite straightforward — often at work, or someone being cunning rather than honest.",
    long: "The Fox is cleverness that isn't fully trustworthy: a tricky work situation, a colleague or deal that isn't what it seems, or self-employment and independent hustle. It rewards caution rather than blind trust. Its neighbours usually reveal exactly where the trickery lies."
  },
  {
    id: 15,
    name: "Bear",
    meaning: "Power, authority, protectiveness, financial strength",
    short: "A powerful figure or force — a boss, protector, or financial muscle behind the situation.",
    long: "The Bear represents authority and strength: a boss, a protective figure, or raw financial power. It can be a fierce ally or, when it turns, a source of jealousy or heavy-handed control. Read its neighbours to see whether that strength is working for you or against you."
  },
  {
    id: 16,
    name: "Stars",
    meaning: "Hope, clarity, guidance, success",
    short: "Clarity and hope — a clear path opening up, often after confusion.",
    long: "The Stars bring clear guidance after a murky patch: hope, insight, and a sense of direction returning. It's one of the deck's most reassuring cards, especially when it follows Clouds or Mountain. It can also point toward spiritual insight or simply seeing a situation clearly for the first time."
  },
  {
    id: 17,
    name: "Stork",
    meaning: "Change, a move, transformation, relocation",
    short: "Change is underway — a move, a shift, a transformation in circumstances.",
    long: "The Stork signals change in motion: a relocation, a shift in life stage, or a transformation that's already begun rather than merely hoped for. Unlike the Coffin's hard ending, the Stork is change as continuation — one form of life becoming another."
  },
  {
    id: 18,
    name: "Dog",
    meaning: "Loyalty, friendship, a trusted companion",
    short: "A loyal friend or trusted companion — reliable, genuine, on your side.",
    long: "The Dog is uncomplicated loyalty: a true friend, a faithful partner, or fidelity itself as a quality at play in the reading. It's one of the most straightforwardly reassuring cards in the deck. Its neighbours usually name who that loyal presence is, or where fidelity is being tested."
  },
  {
    id: 19,
    name: "Tower",
    meaning: "Institutions, authority, isolation, ambition",
    short: "Officialdom or isolation — a bank, government body, hospital, or simply standing apart.",
    long: "The Tower represents large institutions and formal authority — banks, government, hospitals, employers — as well as a personal sense of isolation or standing alone. It can point to ambition and achievement too, the tower you've built for yourself. Context from its neighbours decides which reading fits."
  },
  {
    id: 20,
    name: "Park",
    meaning: "Public life, social gathering, community",
    short: "Public life and social gathering — being seen, socialising, community connection.",
    long: "The Park is life lived in company: social gatherings, community, networking, being visible among others rather than in private. It's a fairly neutral, pleasant card — the world of people and events beyond your own four walls."
  },
  {
    id: 21,
    name: "Mountain",
    meaning: "An obstacle, delay, a blockage",
    short: "A blockage or delay — something large and slow to shift standing in the way.",
    long: "The Mountain is resistance: an obstacle, a hold-up, something that isn't moving no matter how much you push. It can also, more literally, point to distance or something foreign and far away. It's rarely permanent, but it demands patience and often a different route rather than a head-on push."
  },
  {
    id: 22,
    name: "Crossroad",
    meaning: "A choice, a decision point, alternative paths",
    short: "A decision point — more than one path available, and a choice still to be made.",
    long: "The Crossroad marks a genuine fork: options on the table, a decision not yet settled. It doesn't tell you which way to go, only that a choice exists and it's yours to make. Its neighbours often describe what each path leads toward."
  },
  {
    id: 23,
    name: "Mice",
    meaning: "Loss, worry, gradual erosion",
    short: "Small, gradual loss — something being worn away rather than taken all at once.",
    long: "Mice represent slow erosion: worry that nibbles away at peace of mind, small losses that add up, theft, or stress wearing down something that was once solid. It's rarely dramatic, which is exactly what makes it dangerous — it works quietly. Its neighbours usually show what's being worn away."
  },
  {
    id: 24,
    name: "Heart",
    meaning: "Love, affection, genuine feeling",
    short: "Genuine love or affection — the matters of the heart at the centre of the reading.",
    long: "The Heart is real feeling: love, affection, warmth between people. It's one of the deck's most welcome cards and tends to soften whatever sits beside it. Where it lands often marks the emotional core of the whole spread."
  },
  {
    id: 25,
    name: "Ring",
    meaning: "Commitment, contracts, a cycle, an agreement",
    short: "Commitment or agreement — a contract, partnership, or a cycle coming full circle.",
    long: "The Ring is anything bound and ongoing: a marriage, a contract, a partnership, or a repeating cycle. It represents commitment made concrete. Its neighbours reveal what kind of commitment, and whether it's solid or under strain."
  },
  {
    id: 26,
    name: "Book",
    meaning: "Secrets, hidden knowledge, study",
    short: "Something not yet known — a secret, hidden information, or a matter still being studied.",
    long: "The Book holds what hasn't been revealed: a secret, undisclosed information, or knowledge still being gathered through study or research. It can be neutral (a course of study, a mystery yet to unfold) or pointed (something being deliberately kept from you). Neighbours usually tell you which."
  },
  {
    id: 27,
    name: "Letter",
    meaning: "Written communication, documents, news in writing",
    short: "Written word — a letter, message, email, or document carrying information.",
    long: "The Letter is communication in written form: a message, an email, a document, official correspondence. Unlike the Rider's news in motion, the Letter is the content itself, fixed in writing. Its neighbours describe what the message concerns and how it lands."
  },
  {
    id: 28,
    name: "Man",
    significator: true,
    significatorLabel: "Gentleman",
    meaning: "The male querent or the main male figure — used as a significator",
    short: "Represents a man at the centre of the reading, often chosen as the significator for a male querent.",
    long: "The Man (Gentleman) stands for the principal male figure in a reading, or is chosen deliberately as a significator to represent the person having the reading. Cards drawn around him describe his situation, feelings, and circumstances rather than being read as standalone omens."
  },
  {
    id: 29,
    name: "Woman",
    significator: true,
    significatorLabel: "Lady",
    meaning: "The female querent or the main female figure — used as a significator",
    short: "Represents a woman at the centre of the reading, often chosen as the significator for a female querent.",
    long: "The Woman (Lady) stands for the principal female figure in a reading, or is chosen deliberately as a significator to represent the person having the reading. Cards drawn around her describe her situation, feelings, and circumstances rather than being read as standalone omens."
  },
  {
    id: 30,
    name: "Lily",
    meaning: "Peace, maturity, family harmony",
    short: "Calm and maturity — peace within a family, or an older, settled kind of harmony.",
    long: "The Lily brings peace that comes with age and experience: family harmony, a mature relationship, a calm resolution reached after time rather than in haste. It can also carry a quiet undertone of sensuality within long-term partnership. It's a gently reassuring card, rarely negative."
  },
  {
    id: 31,
    name: "Sun",
    meaning: "Success, vitality, clarity, joy",
    short: "Success and vitality — one of the deck's clearest positive cards.",
    long: "The Sun is warmth, success, and plain good energy. Wherever it lands, it lifts the reading — clarity replaces confusion, vitality replaces fatigue, joy is at hand. It's about as close as Kipper gets to an unambiguous 'yes, and it's good.'"
  },
  {
    id: 32,
    name: "Moon",
    meaning: "Recognition, reputation, emotion beneath the surface",
    short: "Recognition or reputation — feelings and standing that matter to others' perception of you.",
    long: "The Moon deals in reputation, recognition, and the emotional undercurrent beneath a situation — how something is perceived, honoured, or felt privately even if not said aloud. It can point to public standing or to a private emotional truth, depending on its company."
  },
  {
    id: 33,
    name: "Key",
    meaning: "Certainty, a solution, an important 'yes'",
    short: "A definite answer — something important, certain, and unlocked.",
    long: "The Key is certainty: a solution found, an important 'yes,' something unlocked after searching. It emphasises and strengthens whatever card sits beside it, marking that matter as significant and largely settled rather than in doubt."
  },
  {
    id: 34,
    name: "Fish",
    meaning: "Money, business, abundance",
    short: "Money and business — cash flow, financial dealings, material abundance.",
    long: "The Fish is the deck's clearest money card: income, business dealings, financial abundance or its flow. It moves easily, for better or worse — money coming in fast can also mean money moving out fast. Neighbours describe the source and the direction of flow."
  },
  {
    id: 35,
    name: "Anchor",
    meaning: "Stability, steadfastness, long-term security",
    short: "Stability — something long-term, secure, and steady rather than fleeting.",
    long: "The Anchor represents lasting stability: steady work, a secure foundation, commitment to staying the course. In good company it's deeply reassuring; beside more restrictive cards it can tip into feeling stuck rather than settled. Context decides which."
  },
  {
    id: 36,
    name: "Cross",
    meaning: "A burden, a difficulty to carry, fate",
    short: "A burden or a test — something difficult but unavoidable, to be carried rather than escaped.",
    long: "The Cross is the deck's card of unavoidable burden: a difficulty, a test of endurance, something that must be carried rather than sidestepped. It's rarely comfortable to draw, but it's honest — and Kipper tradition holds that what the Cross names, facing directly is the only real way through."
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
  "1_27": "Rider + Letter: news arriving in writing — a message on its way.",
  "1_3": "Rider + Ship: news about travel, or news arriving from a distance.",
  "1_4": "Rider + House: news concerning home or family.",
  "1_6": "Rider + Clouds: unsettling or unclear news — wait for more detail.",
  "1_8": "Rider + Coffin: news of an ending, or news that closes a matter.",
  "1_28": "Rider + Man: news concerning, or brought by, a man.",
  "1_29": "Rider + Woman: news concerning, or brought by, a woman.",
  "3_27": "Ship + Letter: news arriving from a distance.",
  "3_4": "Ship + House: a move, or business affecting the home.",
  "3_34": "Ship + Fish: a business venture with money attached.",
  "3_35": "Ship + Anchor: a journey that leads to something settled and secure.",
  "3_21": "Ship + Mountain: a journey delayed, or travel to somewhere distant.",
  "3_36": "Ship + Cross: a difficult journey, or travel undertaken out of necessity.",
  "4_24": "House + Heart: love within the home — a happy household.",
  "4_23": "House + Mice: money worries or small losses affecting the home.",
  "4_7": "House + Snake: complication or tension within the family.",
  "4_17": "House + Stork: a house move, or change within the household.",
  "4_28": "House + Man: a man's home life, or a man at the centre of domestic matters.",
  "4_29": "House + Woman: a woman's home life, or a woman at the centre of domestic matters.",
  "7_28": "Snake + Man: a man acting indirectly, or a complication involving a man.",
  "7_29": "Snake + Woman: a woman acting indirectly, or a complication involving a woman.",
  "7_24": "Snake + Heart: a complicated or deceptive matter of the heart.",
  "7_14": "Snake + Fox: two forms of deception overlapping — proceed carefully.",
  "8_24": "Coffin + Heart: the end of a relationship or a painful emotional close.",
  "8_4": "Coffin + House: an ending connected to home — moving on from a place.",
  "8_5": "Coffin + Tree: a health matter reaching a serious or final point.",
  "8_25": "Coffin + Ring: the end of a commitment or agreement.",
  "8_28": "Coffin + Man: an ending concerning a man, or a man facing a hard close.",
  "8_29": "Coffin + Woman: an ending concerning a woman, or a woman facing a hard close.",
  "9_24": "Bouquet + Heart: a heartfelt gift or a loving gesture.",
  "9_28": "Bouquet + Man: a gift or invitation from a man.",
  "9_29": "Bouquet + Woman: a gift or invitation from a woman.",
  "9_27": "Bouquet + Letter: an invitation arriving in writing.",
  "10_24": "Scythe + Heart: a sudden, sharp change in a relationship.",
  "10_25": "Scythe + Ring: a commitment ending abruptly, or a quick decision to commit.",
  "10_4": "Scythe + House: a sudden change affecting the home.",
  "10_5": "Scythe + Tree: a sudden health scare — worth taking seriously.",
  "11_24": "Whip + Heart: recurring arguments within a relationship.",
  "11_4": "Whip + House: ongoing friction within the household.",
  "11_28": "Whip + Man: conflict with, or caused by, a man.",
  "11_29": "Whip + Woman: conflict with, or caused by, a woman.",
  "12_24": "Birds + Heart: nervous energy around a relationship — talk more than certainty.",
  "12_27": "Birds + Letter: news or messages exchanged back and forth.",
  "12_28": "Birds + Man: conversation or anxious energy involving a man.",
  "12_29": "Birds + Woman: conversation or anxious energy involving a woman.",
  "13_4": "Child + House: a new addition to the household, literal or otherwise.",
  "13_29": "Child + Woman: a woman connected to a child, or new beginnings for her.",
  "13_28": "Child + Man: a man connected to a child, or new beginnings for him.",
  "13_25": "Child + Ring: a new commitment still in its early, unformed stage.",
  "14_28": "Fox + Man: a man not being entirely straightforward, especially at work.",
  "14_29": "Fox + Woman: a woman not being entirely straightforward, especially at work.",
  "14_26": "Fox + Book: hidden trickery — something being concealed at work.",
  "15_28": "Bear + Man: a powerful or protective man, possibly a boss.",
  "15_29": "Bear + Woman: a powerful or protective woman, possibly a boss.",
  "15_34": "Bear + Fish: financial strength or power over money.",
  "16_26": "Stars + Book: insight gained through study — clarity after research.",
  "16_29": "Stars + Woman: hope and clear guidance for a woman.",
  "16_28": "Stars + Man: hope and clear guidance for a man.",
  "16_31": "Stars + Sun: a very positive combination — hope followed by real success.",
  "17_4": "Stork + House: a house move, or a change in the household.",
  "17_29": "Stork + Woman: a significant change or transition for a woman.",
  "17_28": "Stork + Man: a significant change or transition for a man.",
  "18_28": "Dog + Man: a loyal male friend or trustworthy male companion.",
  "18_29": "Dog + Woman: a loyal female friend or trustworthy female companion.",
  "19_27": "Tower + Letter: official or formal correspondence.",
  "19_28": "Tower + Man: a man connected to institutions, authority, or isolation.",
  "19_29": "Tower + Woman: a woman connected to institutions, authority, or isolation.",
  "20_24": "Park + Heart: a happy social gathering, or love found in public life.",
  "20_28": "Park + Man: a man active in social or public life.",
  "20_29": "Park + Woman: a woman active in social or public life.",
  "21_28": "Mountain + Man: an obstacle involving a man, or a man standing in the way.",
  "21_29": "Mountain + Woman: an obstacle involving a woman, or a woman standing in the way.",
  "21_27": "Mountain + Letter: delayed news or correspondence.",
  "22_28": "Crossroad + Man: a decision facing a man.",
  "22_29": "Crossroad + Woman: a decision facing a woman.",
  "23_34": "Mice + Fish: money slowly draining away.",
  "23_4": "Mice + House: small worries or losses affecting the home.",
  "23_24": "Mice + Heart: worry quietly wearing down a relationship.",
  "24_25": "Heart + Ring: a loving relationship moving toward commitment.",
  "24_28": "Heart + Man: genuine feeling for, or from, a man.",
  "24_29": "Heart + Woman: genuine feeling for, or from, a woman.",
  "24_27": "Heart + Letter: a loving message, or feelings expressed in writing.",
  "24_31": "Heart + Sun: a joyful, thriving relationship.",
  "25_28": "Ring + Man: a commitment or agreement involving a man.",
  "25_29": "Ring + Woman: a commitment or agreement involving a woman.",
  "25_36": "Ring + Cross: a difficult commitment, or a bond that carries a burden.",
  "26_28": "Book + Man: a secret kept by, or concerning, a man.",
  "26_29": "Book + Woman: a secret kept by, or concerning, a woman.",
  "26_27": "Book + Letter: hidden information revealed in writing.",
  "27_3": "Letter + Ship: written news arriving from far away.",
  "27_4": "Letter + House: correspondence concerning the home.",
  "27_34": "Letter + Fish: written news about money or business.",
  "27_28": "Letter + Man: a written message from, or concerning, a man.",
  "27_29": "Letter + Woman: a written message from, or concerning, a woman.",
  "27_24": "Letter + Heart: a heartfelt letter or loving message.",
  "28_29": "Man + Woman: a relationship between the two — read their other neighbours to see how it's going.",
  "24_7": "Heart + Snake: love complicated by a rival or a third party.",
  "28_7": "Man + Snake: a man behaving in an indirect or untrustworthy way.",
  "29_7": "Woman + Snake: a woman behaving in an indirect or untrustworthy way.",
  "28_8": "Man + Coffin: an ending affecting a man, or a man facing a hard close.",
  "29_8": "Woman + Coffin: an ending affecting a woman, or a woman facing a hard close.",
  "30_28": "Lily + Man: a mature, settled man, or peace within his family.",
  "30_29": "Lily + Woman: a mature, settled woman, or peace within her family.",
  "30_24": "Lily + Heart: a calm, long-standing love, settled rather than new.",
  "31_28": "Sun + Man: success and vitality for a man.",
  "31_29": "Sun + Woman: success and vitality for a woman.",
  "31_34": "Sun + Fish: financial success — money flowing in easily.",
  "32_28": "Moon + Man: recognition or reputation concerning a man.",
  "32_29": "Moon + Woman: recognition or reputation concerning a woman.",
  "32_16": "Moon + Stars: emotional clarity and honoured feeling.",
  "33_4": "Key + House: a settled, certain outcome concerning the home.",
  "33_28": "Key + Man: a definite, important answer concerning a man.",
  "33_29": "Key + Woman: a definite, important answer concerning a woman.",
  "33_34": "Key + Fish: a certain, unlocked financial gain.",
  "34_28": "Fish + Man: money or business connected to a man.",
  "34_29": "Fish + Woman: money or business connected to a woman.",
  "34_35": "Fish + Anchor: steady, reliable income.",
  "35_28": "Anchor + Man: long-term stability for a man, particularly at work.",
  "35_29": "Anchor + Woman: long-term stability for a woman, particularly at work.",
  "35_19": "Anchor + Tower: stable, secure employment within an institution.",
  "36_28": "Cross + Man: a burden or hard test for a man to carry.",
  "36_29": "Cross + Woman: a burden or hard test for a woman to carry.",
  "36_4": "Cross + House: a difficulty weighing on the home.",
  "36_5": "Cross + Tree: a heavy health matter to carry with patience."
};
