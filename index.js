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
/**
 *
 * @param {String} word
 * @return {Array} tokens
 */
const tokenize = (word) => {
  // tokens holder
  let tokens = [];
  //  split word or sentence by vowels(inyajwi)
  tokens = word.split(/a|u|i|e|u|o/g);
  for (let i of inyajwi) {
    if (word.includes(i)) {
      tokens.push(i); // keep inyajwi
    }
  }
  // return array of unique tokens
  return Array.from(new Set(tokens)).filter((e) => e.trim().length != 0);
};
/**
 *
 * @param {Array} syllable
 * @return {Boolean} bool
 */
const detector = (syllable) => {
  ikinyarwanda.includes(syllable) ? true : false;
};
/**
 *
 * @param {String} word
 * @return {Boolean} bool
 */
const isKinyarwanda = (word) => {
  if (typeof word == "object") {
    word = word.join(" ");
  }

  const consonants = tokenize(String(word).toLowerCase());
  count = 0.0;
  total = 0.0;
  for (let c of consonants) {
    if (
      c.trim().length > 1 &&
      !ibyungo.includes(c.trim()) &&
      !ibihekane.includes(c.trim()) &&
      isNaN(parseInt(c))
    ) {
      return false;
    }
    if (c.length == 1) {
      total += 1;
      if (detector(c)) {
        count += 1;
      }
    }
  }
  return true;
};
module.exports = {
  isKinyarwanda,
};
