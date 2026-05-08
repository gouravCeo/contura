// ─── AFFILIATE LINKS CONFIGURATION ────────────────────────
// Add your affiliate products here to easily manage them across the site.
// Match the key to the exact name of the product (e.g., "Balconette Bra", "Underwire Bikini").
// You can add up to 4 products per style.
const AFFILIATE_PRODUCTS = {
  "Balconette Bra": [
    { name: "Bralux Demi Cup Women's Non-Padded Non-Wired", url: "https://amzn.to/4uAqLNf", image: "https://m.media-amazon.com/images/I/61CJ1EeOMHL._SX679_.jpg" },
    { name: "BEWILD Women Balconette Bra", url: "https://amzn.to/3RqbQqp", image: "https://m.media-amazon.com/images/I/61adCicFs+L._SY879_.jpg" },
    { name: "Tweens - Heavily Padded Super Push-Up Bra - Balconette - Polyamide Fabric", url: "https://amzn.to/3OLimra", image: "https://m.media-amazon.com/images/I/51rlU49uW-L._SX679_.jpg" },
    { name: "Clovia Powernet Solid Padded Full Cup Underwired Balconette Bra", url: "https://amzn.to/4f1MoS0", image: "https://m.media-amazon.com/images/I/61r6cr7RmYL._SY879_.jpg" }
  ],
  "T-Shirt Bra": [
    { name: "Triumph T-Shirt Bra for Women Padded Non Wired Everyday Bra", url: "https://amzn.to/4nhDLVy", image: "https://m.media-amazon.com/images/I/61LPrNEj2nL._SY879_.jpg" }
  ],
  "Plunge Bra": [],
  "Cotton Bralette": [],
  "Seamless Wireless Bra": [],
  "Wireless Bandeau": [],
  "Full Cup Bra": [],
  "Side-Support Balconette": [],
  "Wire-Free Support Bra": [],
  "Longline Strapless": [],
  "Push-Up Bra": [
    { name: "Brachy Women's Poly Cotton Padded Wired Push-Up Bra", url: "https://amzn.to/4tXa9zq", image: "https://m.media-amazon.com/images/I/61vrRT5pkCL._SX679_.jpg" },
    { name: "Komli Cotton Maximiser Push-Up Bonded Bra", url: "https://amzn.to/4uvTORQ", image: "https://m.media-amazon.com/images/I/41APtnU1a3L.jpg" },
    { name: "Brachy Women's Front Closure Multi-Way Padded Push-Up Bra", url: "https://amzn.to/42Oxw22", image: "https://m.media-amazon.com/images/I/41X5mnz6XtL.jpg" },
    { name: "Tweens - Heavily Padded Super Push-Up Bra", url: "https://amzn.to/4f4IAzk", image: "https://m.media-amazon.com/images/I/51Cfpl2I7YL._SX679_.jpg" },
  ],
  "Demi Cup": [],
  "Wireless Push-Up": [],
  "Strapless Push-Up": [],
  "Underwire Strapless Bra": [],
  "Multi-Way Bra": [],
  "Adhesive Bra / Pasties": [],
  "Encapsulation Sports Bra": [],
  "Compression Sports Bra": [],
  "Sports Bandeau": [],
  "Sleep Bra": [],
  "Contour Bra": [],
  "Seamless Wireless": [],
  "Low-Back Converter": [],

  // Swimwear
  "Triangle Bikini": [],
  "Bandeau Top": [],
  "Halter Triangle": [],
  "Underwire Bikini": [],
  "Athletic One-Piece": [],
  "Sports Bikini Top": [],
  "Micro Bikini": [],
  "Cut-Out Swimsuit": [],
  "Balconette Bikini": [],
  "Halter Bikini": [],
  "Bandeau + Padding": [],
  "Racerback One-Piece": [],
  "Sports Bikini": [],
  "Wrap Bikini Top": [],
  "Plunge One-Piece": [],
  "Underwire D+ Bikini": [],
  "Structured One-Piece": [],
  "Halter Tankini": [],
  "Tie-Front Bikini": [],
  "High-Impact Swimsuit": [],
  "Racerback Tankini": [],
  "Bustier Bikini": [],
  "Wrap One-Piece": [],
  "Underwire Swimdress": [],
  "Structured Tankini": [],
  "Halter Swimdress": [],
  "High-Neck Bikini": [],
  "Sports Tankini": [],
  "Ruched One-Piece": [],
  "Wrap Swimdress": []
};

// ─── SVG STRINGS ───────────────────────────────────────
const svgSwim = {
  triangle: `<svg viewBox="0 0 100 80" fill="none"><path d="M50 18 L30 28 Q16 36 18 52 L34 52 Q36 38 50 38 Q64 38 66 52 L82 52 Q84 36 70 28 Z" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M50 18 L42 28 Q40 34 50 38 Q60 34 58 28 Z" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M50 18 Q44 10 36 8" stroke="#C7604A" stroke-width="1.5" stroke-linecap="round"/><path d="M50 18 Q56 10 64 8" stroke="#C7604A" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  bandeau: `<svg viewBox="0 0 100 80" fill="none"><path d="M18 38 Q50 48 82 38 L84 52 Q50 62 16 52 Z" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linejoin="round"/><line x1="50" y1="42" x2="50" y2="57" stroke="#1C1410" stroke-width="1.5"/></svg>`,
  halter: `<svg viewBox="0 0 100 80" fill="none"><path d="M40 8 Q50 18 30 28 Q16 36 18 52 L34 52 Q36 38 50 38 Q64 38 66 52 L82 52 Q84 36 70 28 Q50 18 60 8" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M50 38 L50 24" stroke="#1C1410" stroke-width="1.5"/></svg>`,
  underwire_swim: `<svg viewBox="0 0 100 80" fill="none"><path d="M18 42 Q24 22 38 26 Q46 28 50 36 Q54 28 62 26 Q76 22 82 42" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M18 42 Q18 48 22 50 Q28 52 38 48 Q44 45 50 42 Q56 45 62 48 Q72 52 78 50 Q82 48 82 42" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M22 36 Q16 28 14 20" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M78 36 Q84 28 86 20" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M18 42 Q22 52 38 48" stroke="#C7604A" stroke-width="2" fill="none"/><path d="M82 42 Q78 52 62 48" stroke="#C7604A" stroke-width="2" fill="none"/></svg>`,
  onepiece: `<svg viewBox="0 0 100 80" fill="none"><path d="M30 18 Q20 30 24 50 Q28 70 34 76 Q50 82 66 76 Q72 70 76 50 Q80 30 70 18" stroke="#1C1410" stroke-width="1.5" fill="none"/><path d="M30 18 Q50 38 70 18" stroke="#1C1410" stroke-width="1.5" fill="none"/><path d="M26 40 Q50 36 74 40" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/></svg>`,
  wrap: `<svg viewBox="0 0 100 80" fill="none"><path d="M20 28 L50 56 L80 28 Q84 40 76 52 L50 64 L24 52 Q16 40 20 28 Z" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M20 28 L50 56" stroke="#1C1410" stroke-width="1.5"/><path d="M80 28 L50 56" stroke="#1C1410" stroke-width="1.5"/><path d="M20 28 Q30 16 40 8" stroke="#C7604A" stroke-width="1.5"/><path d="M80 28 Q70 16 60 8" stroke="#C7604A" stroke-width="1.5"/></svg>`,
  tankini: `<svg viewBox="0 0 100 80" fill="none"><path d="M26 28 L24 64 L76 64 L74 28" stroke="#1C1410" stroke-width="1.5" fill="none"/><path d="M18 36 Q34 26 50 32 Q66 26 82 36" stroke="#1C1410" stroke-width="1.5" fill="none"/><path d="M26 28 Q20 18 16 12" stroke="#1C1410" stroke-width="1.5"/><path d="M74 28 Q80 18 84 12" stroke="#1C1410" stroke-width="1.5"/></svg>`,
  swimdress: `<svg viewBox="0 0 100 80" fill="none"><path d="M30 24 L16 76 L84 76 L70 24" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M22 36 Q50 44 78 36" stroke="#1C1410" stroke-width="1.5" fill="none"/><path d="M30 24 Q30 14 36 8" stroke="#1C1410" stroke-width="1.5"/><path d="M70 24 Q70 14 64 8" stroke="#1C1410" stroke-width="1.5"/><path d="M18 64 Q50 70 82 64" stroke="#1C1410" stroke-width="1.5" stroke-dasharray="2 4"/></svg>`
};

const svgBra = {
  balconette: `<svg viewBox="0 0 100 80" fill="none"><path d="M14 44 Q24 28 38 32 Q46 34 50 40 Q54 34 62 32 Q76 28 86 44" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M14 44 Q14 54 22 56 Q30 58 38 52 Q44 48 50 44 Q56 48 62 52 Q70 58 78 56 Q86 54 86 44" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M14 44 Q22 54 38 52" stroke="#C7604A" stroke-width="2" fill="none"/><path d="M86 44 Q78 54 62 52" stroke="#C7604A" stroke-width="2" fill="none"/><path d="M20 38 Q16 26 14 16" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M80 38 Q84 26 86 16" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  plunge: `<svg viewBox="0 0 100 80" fill="none"><path d="M12 36 Q26 26 38 34 Q46 40 50 56 Q54 40 62 34 Q74 26 88 36" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M12 36 Q14 48 24 52 Q34 56 42 50 Q46 46 50 56 Q54 46 58 50 Q66 56 76 52 Q86 48 88 36" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M22 30 L16 14" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M78 30 L84 14" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M20 44 Q30 48 38 42" stroke="#1C1410" stroke-width="1" stroke-dasharray="2 3" fill="none"/><path d="M80 44 Q70 48 62 42" stroke="#1C1410" stroke-width="1" stroke-dasharray="2 3" fill="none"/></svg>`,
  fullcup: `<svg viewBox="0 0 100 80" fill="none"><path d="M16 44 Q16 20 38 24 Q46 26 50 36 Q54 26 62 24 Q84 20 84 44" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M16 44 Q16 52 24 56 Q34 60 42 52 Q46 48 50 44 Q54 48 58 52 Q66 60 76 56 Q84 52 84 44" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M16 44 Q24 56 42 52" stroke="#C7604A" stroke-width="2" fill="none"/><path d="M84 44 Q76 56 58 52" stroke="#C7604A" stroke-width="2" fill="none"/><path d="M30 23 L26 12" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M70 23 L74 12" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  demi: `<svg viewBox="0 0 100 80" fill="none"><path d="M18 42 Q24 28 38 32 Q46 34 50 40 Q54 34 62 32 Q76 28 82 42" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M18 42 Q18 48 24 52 Q34 56 42 50 Q46 46 50 40 Q54 46 58 50 Q66 56 76 52 Q82 48 82 42" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M18 42 Q24 52 42 50" stroke="#C7604A" stroke-width="2" fill="none"/><path d="M82 42 Q76 52 58 50" stroke="#C7604A" stroke-width="2" fill="none"/><path d="M26 31 L20 16" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M74 31 L80 16" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M18 42 Q30 38 40 44" stroke="#1C1410" stroke-width="1" fill="none" stroke-dasharray="2 3"/><path d="M82 42 Q70 38 60 44" stroke="#1C1410" stroke-width="1" fill="none" stroke-dasharray="2 3"/></svg>`,
  pushup: `<svg viewBox="0 0 100 80" fill="none"><path d="M14 38 Q26 24 38 32 Q46 38 50 50 Q54 38 62 32 Q74 24 86 38" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M14 38 Q16 50 24 54 Q34 58 42 50 Q46 46 50 50 Q54 46 58 50 Q66 58 76 54 Q84 50 86 38" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M24 30 L18 16" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M76 30 L82 16" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M14 38 Q22 48 34 46" stroke="#C7604A" stroke-width="3" fill="none"/><path d="M86 38 Q78 48 66 46" stroke="#C7604A" stroke-width="3" fill="none"/></svg>`,
  bralette: `<svg viewBox="0 0 100 80" fill="none"><path d="M20 38 L36 18 Q46 28 50 38 Q54 28 64 18 L80 38" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M20 38 Q20 54 50 54 Q80 54 80 38" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M36 18 L30 8" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M64 18 L70 8" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  sports: `<svg viewBox="0 0 100 80" fill="none"><path d="M16 28 L30 16 Q50 24 70 16 L84 28" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M16 28 L16 48 Q50 56 84 48 L84 28" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M30 16 L26 8" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M70 16 L74 8" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><line x1="16" y1="42" x2="84" y2="42" stroke="#1C1410" stroke-width="1.5"/></svg>`,
  strapless: `<svg viewBox="0 0 100 80" fill="none"><path d="M14 36 Q50 28 86 36 L86 48 Q50 56 14 48 Z" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>`,
  sleep: `<svg viewBox="0 0 100 80" fill="none"><path d="M18 34 Q34 22 50 38 Q66 22 82 34 L80 50 Q50 58 20 50 Z" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M30 26 L26 14" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M70 26 L74 14" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  tshirt: `<svg viewBox="0 0 100 80" fill="none"><path d="M18 40 Q24 24 38 28 Q46 30 50 38 Q54 30 62 28 Q76 24 82 40" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M18 40 Q18 48 24 52 Q34 56 42 50 Q46 46 50 40 Q54 46 58 50 Q66 56 76 52 Q82 48 82 40" stroke="#1C1410" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M24 32 L20 16" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/><path d="M76 32 L80 16" stroke="#1C1410" stroke-width="1.5" stroke-linecap="round"/></svg>`
};

// (Removed SPA go() function - handled by standard HTML links now)

// ─── PICKERS ─────────────────────────────────────────
let selectedShape = 'round';
let braSize = 'medium';
let braNeed = 'everyday';
let braWire = 'underwire';
let swimCup = 'medium';
let swimActivity = 'pool';

function pickShape(el) {
  document.querySelectorAll('#shapeGrid .vis-opt').forEach(n => n.classList.remove('selected'));
  el.classList.add('selected');
  selectedShape = el.dataset.shape;
}

function pickSys(el) {
  document.querySelectorAll('#sysGrid .vis-opt').forEach(n => n.classList.remove('selected'));
  el.classList.add('selected');
}

function pickOpt(el, type) {
  el.parentElement.querySelectorAll('.vis-opt').forEach(n => n.classList.remove('selected'));
  el.classList.add('selected');
  if (type === 'braSize') braSize = el.dataset.val;
  if (type === 'braWire') braWire = el.dataset.val;
  if (type === 'swimCup') swimCup = el.dataset.val;
  if (type === 'swimActivity') swimActivity = el.dataset.val;
}

function switchConvTab(tab, el) {
  document.querySelectorAll('.conv-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.conv-panel').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('cvPanel-' + tab).classList.add('active');
  if (tab === 'country') liveConvert();
}

// ─── WEIGHT ESTIMATOR ─────────────────────────────────
const cupWeights = { AA: 120, A: 160, B: 240, C: 320, D: 430, 'DD/E': 550, 'DDD/F': 700, G: 880, H: 1050, I: 1250, J: 1450, K: 1650 };
const shapeMult = { round: 1.05, teardrop: 1.0, conical: 0.95, 'east-west': 1.0, 'side-set': 1.0, 'close-set': 1.0, slender: 0.9, tubular: 0.85 };

function calcWeight() {
  const band = parseInt(document.getElementById('wBand').value);
  const cup = document.getElementById('wCup').value;
  let baseV = cupWeights[cup] || 240;
  baseV = baseV * (band / 34);
  const gPerBreast = Math.round(baseV * (shapeMult[selectedShape] || 1));
  const totalG = gPerBreast * 2;
  const lbs = (totalG / 453.592).toFixed(2);
  let strain = "Low";
  if (lbs > 2.5) strain = "Moderate";
  if (lbs > 4.0) strain = "High";
  if (lbs > 5.5) strain = "Very High";

  document.getElementById('wPerBreast').innerHTML = gPerBreast;
  document.getElementById('wTotal').innerHTML = totalG + ' g';
  document.getElementById('wLbs').innerHTML = lbs + ' lbs';
  document.getElementById('wStrain').innerHTML = strain;

  let tip = '';
  if (strain === 'High' || strain === 'Very High') tip = 'Your bust weight puts significant strain on your back and shoulders. Opt for bras with wide, padded straps and a firm band.';
  else tip = 'Your bust weight is manageable. A well-fitting band will still help distribute the load off your shoulders.';
  document.getElementById('wTip').innerHTML = `<strong>Tip:</strong> ${tip}`;

  document.getElementById('wEmpty').style.display = 'none';
  document.getElementById('wResult').classList.add('show');
}

// ─── SIZE CONVERTER ───────────────────────────────────
const sizeData = {
  US: { cup: ['AA', 'A', 'B', 'C', 'D', 'DD', 'DDD/E', 'G', 'H', 'I', 'J', 'K', 'L'], step: 2, start: 30 },
  UK: { cup: ['AA', 'A', 'B', 'C', 'D', 'DD', 'E', 'F', 'FF', 'G', 'GG', 'H', 'HH'], step: 2, start: 30 },
  EU: { cup: ['AA', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], step: 5, start: 65 },
  AU: { cup: ['AA', 'A', 'B', 'C', 'D', 'DD', 'E', 'F', 'G', 'H', 'I', 'J', 'K'], step: 2, start: 8 },
  FR: { cup: ['AA', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], step: 5, start: 80 },
  JP: { cup: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'], step: 5, start: 65 },
  IT: { cup: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'], step: 5, start: 1, type: 'IT' },
  IN: { cup: ['AA', 'A', 'B', 'C', 'D', 'DD', 'E', 'F', 'G', 'H', 'I', 'J', 'K'], step: 2, start: 30 },
  CN: { cup: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'], step: 5, start: 70 },
  KR: { cup: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'], step: 5, start: 70 },
  BR: { cup: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'], step: 2, start: 38 },
  MX: { cup: ['AA', 'A', 'B', 'C', 'D', 'DD', 'E', 'F', 'G', 'H', 'I', 'J', 'K'], step: 2, start: 30 },
  RU: { cup: ['AA', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], step: 5, start: 65 }
};

function getCupIndex(sys, cupStr) {
  const arr = sizeData[sys].cup;
  let idx = arr.indexOf(cupStr);
  if (idx === -1) {
    if (cupStr === 'DDD/E' || cupStr === 'DDD') idx = arr.indexOf('E') !== -1 ? arr.indexOf('E') : 5;
    else idx = 2; // fallback B
  }
  return idx;
}

function calcConverter() {
  const fromSys = document.querySelector('#sysGrid .selected').dataset.sys;
  const bandVal = parseInt(document.getElementById('cBand').value);
  const cupVal = document.getElementById('cCup').value;

  if (!bandVal || isNaN(bandVal)) return;

  const bandOffset = (bandVal - sizeData[fromSys].start) / sizeData[fromSys].step;
  const cupIdx = getCupIndex(fromSys, cupVal);

  let tbody = '';
  ['US', 'UK', 'EU', 'AU', 'FR', 'JP'].forEach(sys => {
    let toBand;
    if (sizeData[sys].type === 'IT') {
      toBand = sizeData[sys].start + Math.round(bandOffset);
      const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
      toBand = roman[toBand - 1] || toBand;
    } else {
      toBand = sizeData[sys].start + Math.round(bandOffset * sizeData[sys].step);
    }
    const toCup = sizeData[sys].cup[cupIdx] || sizeData[sys].cup[sizeData[sys].cup.length - 1];

    tbody += `<tr>
      <td><strong>${sys}</strong></td>
      <td>${toBand}</td>
      <td>${toCup}</td>
      <td style="color:var(--accent);font-weight:500">${toBand}${toCup}</td>
    </tr>`;
  });

  document.getElementById('cTableBody').innerHTML = tbody;
  document.getElementById('cEmpty').style.display = 'none';
  document.getElementById('cResult').classList.add('show');
}

function liveConvert() {
  const fromSys = document.getElementById('ccFrom').value;
  const toSys = document.getElementById('ccTo').value;
  const bandVal = parseInt(document.getElementById('ccBand').value);
  const cupVal = document.getElementById('ccCup').value;

  if (!bandVal || isNaN(bandVal)) return;

  const bandOffset = (bandVal - sizeData[fromSys].start) / sizeData[fromSys].step;
  const cupIdx = getCupIndex(fromSys, cupVal);

  let toBand;
  if (sizeData[toSys].type === 'IT') {
    let num = sizeData[toSys].start + Math.round(bandOffset);
    const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    toBand = roman[num - 1] || num;
  } else {
    toBand = sizeData[toSys].start + Math.round(bandOffset * sizeData[toSys].step);
  }
  const toCup = sizeData[toSys].cup[cupIdx] || sizeData[toSys].cup[sizeData[toSys].cup.length - 1];

  const fullSz = toBand + toCup;
  document.getElementById('ccResultSize').innerHTML = fullSz;
  document.getElementById('ccResultLabel').innerHTML = `Your size in ${document.querySelector('#ccTo option:checked').text}`;
  document.getElementById('ccLiveResult').style.display = 'flex';

  let tbody = '';
  Object.keys(sizeData).forEach(sys => {
    let tB;
    if (sizeData[sys].type === 'IT') {
      let num = sizeData[sys].start + Math.round(bandOffset);
      const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
      tB = roman[num - 1] || num;
    } else {
      tB = sizeData[sys].start + Math.round(bandOffset * sizeData[sys].step);
    }
    const tC = sizeData[sys].cup[cupIdx] || sizeData[sys].cup[sizeData[sys].cup.length - 1];

    let isHighlight = sys === toSys ? 'background: #FAF5F0;' : '';
    let bold = sys === toSys ? 'font-weight:600;color:var(--accent)' : 'color:var(--accent)';

    const countryMap = { US: '🇺🇸 US', UK: '🇬🇧 UK', EU: '🇪🇺 EU', AU: '🇦🇺 AU', FR: '🇫🇷 FR', JP: '🇯🇵 JP', IT: '🇮🇹 IT', IN: '🇮🇳 IN', CN: '🇨🇳 CN', KR: '🇰🇷 KR', BR: '🇧🇷 BR', MX: '🇲🇽 MX', RU: '🇷🇺 RU' };

    tbody += `<tr style="${isHighlight}">
      <td><strong>${countryMap[sys]}</strong></td>
      <td>${tB}</td>
      <td>${tC}</td>
      <td style="${bold}">${tB}${tC}</td>
    </tr>`;
  });

  document.getElementById('ccTableBody').innerHTML = tbody;
  document.getElementById('ccEmpty').style.display = 'none';
  document.getElementById('ccFullResult').classList.add('show');
}

// ─── BRA DATA ─────────────────────────────────────────
const braData = {
  everyday: {
    underwire: [
      { svg: 'balconette', name: 'Balconette Bra', desc: 'Lifts from the bottom for a natural, rounded shape. Wide straps prevent digging.', query: 'balconette bra lingerie elegant underwire product photo' },
      { svg: 'tshirt', name: 'T-Shirt Bra', desc: 'Seamless moulded cups. Completely invisible under tight or light-colored clothing.', query: 'seamless t-shirt bra invisible moulded cup underwire product photo' },
      { svg: 'plunge', name: 'Plunge Bra', desc: 'Deep center gore. Perfect for low-cut tops while maintaining strong support.', query: 'plunge bra deep v low cut underwire product photo' },
    ],
    wirefree: [
      { svg: 'bralette', name: 'Cotton Bralette', desc: 'Breathable cotton, wire-free. Comfortable for sleeping or all-day lounging.', query: 'cotton bralette wireless breathable lounge sleep product photo' },
      { svg: 'tshirt', name: 'Seamless Wireless Bra', desc: 'No visible lines, wire-free with smooth rounded silhouette under T-shirts.', query: 'seamless wireless bra smooth no lines under shirt product photo' },
    ],
    no_straps: [
      { svg: 'strapless', name: 'Wireless Bandeau', desc: 'Stretchy tube-style for sleeping or lounging at home.', query: 'wireless bandeau bra stretchy sleep lounge soft product photo' },
    ]
  },
  support: {
    underwire: [
      { svg: 'fullcup', name: 'Full Cup Bra', desc: 'Maximum coverage and support. Wide band and side panels smooth and lift.', query: 'full cup bra full coverage support heavy bust product photo' },
      { svg: 'balconette', name: 'Side-Support Balconette', desc: 'Pushes breast tissue forward, creating a narrower silhouette.', query: 'side support balconette bra lift product photo' },
    ],
    wirefree: [
      { svg: 'fullcup', name: 'Wire-Free Support Bra', desc: 'Wide straps and firm underband provide structural support without wires.', query: 'wire free support bra full coverage firm band product photo' },
    ],
    no_straps: [
      { svg: 'strapless', name: 'Longline Strapless', desc: 'Extended band down the torso for serious stay-up power.', query: 'longline strapless bra bustier wedding product photo' },
    ]
  },
  push: {
    underwire: [
      { svg: 'pushup', name: 'Push-Up Bra', desc: 'Angled padding lifts up and inward for dramatic cleavage.', query: 'push up bra cleavage padded lift underwire product photo' },
      { svg: 'demi', name: 'Demi Cup', desc: 'Half-coverage cup naturally pushes tissue upward. Great for square necklines.', query: 'demi cup bra half coverage lift product photo' },
    ],
    wirefree: [
      { svg: 'pushup', name: 'Wireless Push-Up', desc: 'Moulded foam provides lift without the discomfort of a wire.', query: 'wireless push up bra padded comfort lift product photo' },
    ],
    no_straps: [
      { svg: 'strapless', name: 'Strapless Push-Up', desc: 'Silicone lining and bottom-heavy padding hold you up securely.', query: 'strapless push up bra silicone grip padded product photo' },
    ]
  },
  strapless: {
    underwire: [
      { svg: 'strapless', name: 'Underwire Strapless Bra', desc: 'Silicone grippers and firm underwire ensure it stays exactly in place.', query: 'strapless bra underwire silicone grip smooth product photo' },
      { svg: 'strapless', name: 'Multi-Way Bra', desc: 'Comes with straps that can be worn halter, crossed, or removed entirely.', query: 'multi way convertible bra strapless product photo' },
    ],
    wirefree: [
      { svg: 'strapless', name: 'Wireless Bandeau', desc: 'Stretchy tube-style. Best for smaller cups under casual strapless tops.', query: 'bandeau bra wireless strapless tube top product photo' },
    ],
    no_straps: [
      { svg: 'strapless', name: 'Adhesive Bra / Pasties', desc: 'Stick-on cups for completely backless or extremely plunging outfits.', query: 'adhesive bra sticky backless silicone invisible product photo' },
    ]
  },
  sports: {
    underwire: [
      { svg: 'sports', name: 'Encapsulation Sports Bra', desc: 'Individual underwire cups support each breast separately. Zero uniboob.', query: 'underwire sports bra high impact encapsulation product photo' },
    ],
    wirefree: [
      { svg: 'sports', name: 'Compression Sports Bra', desc: 'Pulls breasts tight against the chest to eliminate bounce.', query: 'compression sports bra wireless workout product photo' },
    ],
    no_straps: [
      { svg: 'strapless', name: 'Sports Bandeau', desc: 'Tube-style sports band. Best for low-impact activities and smaller cups.', query: 'sports bandeau bra tube workout strapless active product photo' },
    ]
  },
  sleep: {
    underwire: [],
    wirefree: [
      { svg: 'sleep', name: 'Sleep Bra', desc: 'Ultra-soft fabric, no hardware. Gentle support for sleeping and recovery.', query: 'sleep bra soft wireless comfort maternity night product photo' },
      { svg: 'bralette', name: 'Cotton Bralette', desc: 'Breathable cotton, wire-free. Comfortable for sleeping or all-day lounging.', query: 'cotton bralette wireless breathable lounge sleep product photo' },
    ],
    no_straps: [
      { svg: 'strapless', name: 'Wireless Bandeau', desc: 'Stretchy tube-style for sleeping or lounging at home.', query: 'wireless bandeau bra stretchy sleep lounge soft product photo' },
    ]
  },
  tshirt: {
    underwire: [
      { svg: 'tshirt', name: 'T-Shirt Bra', desc: 'Seamless moulded cups. Completely invisible under tight or light-colored clothing.', query: 'seamless t-shirt bra invisible moulded cup underwire product photo' },
      { svg: 'tshirt', name: 'Contour Bra', desc: 'Lightly padded moulded cup. No show-through under fitted tops.', query: 'contour bra lightly padded smooth moulded cup no show product photo' },
    ],
    wirefree: [
      { svg: 'bralette', name: 'Seamless Wireless', desc: 'No visible lines, wire-free with smooth rounded silhouette under T-shirts.', query: 'seamless wireless bra smooth no lines under shirt product photo' },
    ],
    no_straps: [
      { svg: 'strapless', name: 'Low-Back Converter', desc: 'Works with low-back tops using a special strap attachment.', query: 'low back bra converter clear strap backless product photo' },
    ]
  }
};

// ─── AFFILIATE IMAGE PLACEHOLDERS ───────────────────────
function renderAffiliatePlaceholders(containerId, itemName) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;

  const products = AFFILIATE_PRODUCTS[itemName] || [];

  let html = '';
  // Only render if products exist. No ugly placeholders.
  if (products.length === 0) {
    wrap.style.display = 'none';
    return;
  }
  
  // Render up to 4 products, but only actual products
  const displayProducts = products.slice(0, 4);
  displayProducts.forEach(p => {
    html += `
    <div class="affiliate-card">
      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="affiliate-img-link">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="affiliate-popup">
          <span class="affiliate-name">${p.name}</span>
          <span class="affiliate-btn">Shop Now</span>
        </div>
      </a>
    </div>`;
  });
  wrap.innerHTML = html;
  wrap.style.display = 'grid';
}

async function calcBra() {
  const need = document.getElementById('bNeed').value;
  const opts = (braData[need] && braData[need][braWire]) || (braData[need] && braData[need]['underwire']) || [];

  let html = '';
  opts.forEach((s, idx) => {
    html += `
      <div class="reco-card">
        <div class="reco-card-top">
          ${svgBra[s.svg] || svgBra.tshirt}
          <div>
            <h4>${s.name}</h4>
            <p>${s.desc}</p>
          </div>
        </div>
        <p class="img-section-label">Suggested Styles</p>
        <div class="bra-images" id="braimg-${idx}">
          <!-- Affiliate products will be rendered here -->
        </div>
      </div>`;
  });

  if (!html) html = '<div class="reco-card"><div style="color:var(--muted);font-size:0.82rem;padding:10px">Try a different wire preference for more results.</div></div>';

  document.getElementById('bCards').innerHTML = html;
  document.getElementById('bEmpty').style.display = 'none';
  document.getElementById('bResult').classList.add('show');

  // Render affiliate placeholders
  opts.forEach((s, idx) => {
    renderAffiliatePlaceholders(`braimg-${idx}`, s.name);
  });
}

// ─── SWIM DATA ────────────────────────────────────────
const swimDataArr = {
  small: {
    pool: [{ svg: 'triangle', name: 'Triangle Bikini', match: 95, desc: 'Minimal fabric, string ties — perfect for smaller busts by the pool.' },
    { svg: 'bandeau', name: 'Bandeau Top', match: 88, desc: 'Flattering and stylish. Great with high-waisted bottoms.' }],
    beach: [{ svg: 'halter', name: 'Halter Triangle', match: 90, desc: 'Ties at neck for security in waves. Lightweight and secure.' },
    { svg: 'underwire_swim', name: 'Underwire Bikini', match: 75, desc: 'Extra lift and shape. Great for looking put-together on the beach.' }],
    active: [{ svg: 'onepiece', name: 'Athletic One-Piece', match: 93, desc: 'Streamlined for movement. Excellent support for active use.' },
    { svg: 'triangle', name: 'Sports Bikini Top', match: 88, desc: 'Racerback design and wide band keep you secure in water sports.' }],
    fashion: [{ svg: 'triangle', name: 'Micro Bikini', match: 90, desc: 'Bold, fashion-forward statement. Smaller cups carry off micro styles effortlessly.' },
    { svg: 'onepiece', name: 'Cut-Out Swimsuit', match: 85, desc: 'Sculptural one-piece with strategic cut-outs.' }],
  },
  medium: {
    pool: [{ svg: 'underwire_swim', name: 'Underwire Bikini', match: 94, desc: 'Structured cups for beautiful shape and comfortable pool lounging.' },
    { svg: 'bandeau', name: 'Balconette Bikini', match: 90, desc: 'Wide-set straps, lower cut — lifts and creates great cleavage.' }],
    beach: [{ svg: 'halter', name: 'Halter Bikini', match: 93, desc: 'Tie-at-neck halter provides secure hold in waves with lovely lift.' },
    { svg: 'bandeau', name: 'Bandeau + Padding', match: 85, desc: 'Strapless with padding — shape and lift without straps.' }],
    active: [{ svg: 'onepiece', name: 'Racerback One-Piece', match: 91, desc: 'Secure, streamlined and supportive. Excellent for active water use.' },
    { svg: 'triangle', name: 'Sports Bikini', match: 87, desc: 'Wide band and adjustable straps for all water sports.' }],
    fashion: [{ svg: 'wrap', name: 'Wrap Bikini Top', match: 92, desc: 'Wrap style creates a gorgeous defined shape with a custom fit.' },
    { svg: 'onepiece', name: 'Plunge One-Piece', match: 88, desc: 'Deep V with medium cup creates beautiful cleavage.' }],
  },
  large: {
    pool: [{ svg: 'underwire_swim', name: 'Underwire D+ Bikini', match: 95, desc: 'Designed for larger cups — structure, lift and full coverage.' },
    { svg: 'onepiece', name: 'Structured One-Piece', match: 90, desc: 'Built-in bra with full coverage cups. Excellent support poolside.' }],
    beach: [{ svg: 'tankini', name: 'Halter Tankini', match: 93, desc: 'Extra neck and back support. Covers midriff with excellent bust support.' },
    { svg: 'wrap', name: 'Tie-Front Bikini', match: 88, desc: 'Adjustable tie-front for customizable support. Secure in waves.' }],
    active: [{ svg: 'onepiece', name: 'High-Impact Swimsuit', match: 96, desc: 'Built-in high-impact bra technology for active water sports.' },
    { svg: 'tankini', name: 'Racerback Tankini', match: 90, desc: 'Racerback with built-in shelf bra. Excellent for swimming.' }],
    fashion: [{ svg: 'underwire_swim', name: 'Bustier Bikini', match: 91, desc: 'Structured bustier-style — incredibly flattering for larger cups.' },
    { svg: 'wrap', name: 'Wrap One-Piece', match: 87, desc: 'Draped wrap creates a stunning silhouette.' }],
  },
  xlarge: {
    pool: [{ svg: 'swimdress', name: 'Underwire Swimdress', match: 94, desc: 'Full support with dress overlay — stylish, comfortable, maximum coverage.' },
    { svg: 'tankini', name: 'Structured Tankini', match: 92, desc: 'Built-in underwire bra in a tankini. Great coverage and bust support.' }],
    beach: [{ svg: 'swimdress', name: 'Halter Swimdress', match: 93, desc: 'Halter ties distribute weight across neck and back comfortably.' },
    { svg: 'halter', name: 'High-Neck Bikini', match: 88, desc: 'High neck provides extra support while looking stylish and modern.' }],
    active: [{ svg: 'onepiece', name: 'Racerback One-Piece', match: 95, desc: 'Maximum support — the gold standard for active swim with larger busts.' },
    { svg: 'tankini', name: 'Sports Tankini', match: 91, desc: 'High-impact split style for easy use while maintaining serious support.' }],
    fashion: [{ svg: 'onepiece', name: 'Ruched One-Piece', match: 90, desc: 'Ruched fabric creates a sculpted silhouette with internal support.' },
    { svg: 'swimdress', name: 'Wrap Swimdress', match: 87, desc: 'Fashion-forward wrap style with built-in lining. Effortlessly chic.' }],
  }
};

function calcSwim() {
  const results = (swimDataArr[swimCup] && swimDataArr[swimCup][swimActivity]) || [];
  let html = '';
  results.forEach((s, i) => {
    html += `<div class="reco-card">
      <div class="reco-card-top">
        ${svgSwim[s.svg] || svgSwim.onepiece}
        <div>
          <div class="match-pct">${s.match}% match</div>
          <h4>${s.name}</h4>
          <p>${s.desc}</p>
          <div class="match-bar"><div class="match-fill" id="sf-${i}"></div></div>
        </div>
      </div>
      <p class="img-section-label">Suggested Styles</p>
      <div class="bra-images" id="swimimg-${i}"></div>
    </div>`;
  });
  document.getElementById('sCards').innerHTML = html;
  document.getElementById('sEmpty').style.display = 'none';
  document.getElementById('sResult').classList.add('show');
  setTimeout(() => {
    results.forEach((s, i) => {
      const el = document.getElementById('sf-' + i);
      if (el) el.style.width = s.match + '%';
    });
  }, 60);

  // Render affiliate placeholders
  results.forEach((s, i) => {
    renderAffiliatePlaceholders(`swimimg-${i}`, s.name);
  });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById('ccFrom')) {
    liveConvert();
  }

  // Hamburger Menu Logic
  const hamburger = document.querySelector('.hamburger');
  const navScroll = document.querySelector('.nav-scroll');
  if (hamburger && navScroll) {
    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    document.querySelector('nav').insertBefore(backdrop, document.querySelector('nav').firstChild);

    function toggleDrawer() {
      const isOpen = hamburger.classList.toggle('open');
      navScroll.classList.toggle('open');
      backdrop.classList.toggle('open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleDrawer);
    backdrop.addEventListener('click', toggleDrawer);
  }
});
