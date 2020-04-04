const {
  ibihekane,
  ibyungo,
  indomo,
  ingombajwi,
  inyajwi,
  utwatuzo,
} = require("./lib");

const ikinyarwanda = [
  ...ibihekane,
  ...ibyungo,
  ...indomo,
  ...ingombajwi,
  ...inyajwi,
  ...utwatuzo,
];

const tokenize = (word) => {
  // tokens holder
  let tokens = [];
  //  if a word has inyajwi in it
  tokens = word.split(/a|u|i|e|u|o/g);
  for (let i of inyajwi) {
    if (word.includes(i)) {
      tokens.push(i);
    }
  }
  return Array.from(new Set(tokens)).filter((e) => e.trim().length != 0);
};

const detectIbihekane = (word) => {
  ibihekane.includes(word) ? true : false;
};
const detectInyajwi = (word) => {
  inyajwi.includes(word) ? true : false;
};

const isKinya = (c) => {
  if (ikinyarwanda.includes(c)) {
    return true;
  }
  return false;
};

const isKinyarwanda = (word) => {
  if (typeof word == "object") {
    word = word.join(" ");
  }
  const consonant = tokenize(word.toLowerCase());
  count = 0.0;
  total = 0.0;
  for (let c of consonant) {
    if (c.trim().length > 1 && !ibihekane.includes(c.trim())) {
      return false;
    }
    if (c.length == 1) {
      total += 1;
      if (isKinya(c)) {
        count += 1;
      }
    }
  }
  return true;
};
module.exports = {
  isKinya: isKinyarwanda,
};
