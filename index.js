const { uturema, inteko } = require("./uturemajambo");

const intekoEbyiri = word => {
  Object.keys(inteko).forEach(int => {
    if (word.includes(int)) {
      word.replace(int, inteko[int]);
    }
  });
};

const ubwinshi = word => {
  Object.keys(uturema).forEach(prefix => {
    if (word.startsWith(prefix)) {
      let w = word.replace(prefix, uturema[prefix]);
      Object.keys(inteko).forEach(int => {
        if (w.includes(String(int))) {
          console.log(w.replace(int, inteko[int]));
        }
      });
      console.log(w);
    }
    return word;
  });
};
ubwinshi("urumuri");

// "kurembywa".split("mbyw")[0].slice(0, 2);
// Birabujijwe kwandika ibihekane kw, hw, gw bikurikiwe n’inyajwi o cyangwa u.
