const {
  ibihekane,
  ibyungo,
  indomo,
  ingombajwi,
  inyajwi,
  utwatuzo,
} = require("./lib");

let score = {
  igihekane: 0,
  icyungo: 0,
  indomo: 0,
  ingombajwi: 0,
  inyajwi: 0,
  utwatuzo: 0,
};
const detectIbihekane = async (word) => {
  // tokens holder
  let tokens = [];
  // iterate over ibihekane
  for (let i of ibihekane) {
    //  if a word has igihekane in it
    if (word.includes(i)) {
      // split the word by igihekane and add to tokens array
      tokens = [...word.split(i), i];
      score.igihekane = 1;
      return tokens;
    } else {
      return (tokens = [word]);
    }
  }
};

const detectIbyungo = (word) => {};
const detectIndomo = (word) => {};
const detectIngombajwi = (word) => {};
const detectInyajwi = (word) => {};

const detectWord = async (word) => {
  const tokens = await detectIbihekane(word);
  console.log(tokens);
};

console.log(detectWord("aa"));
