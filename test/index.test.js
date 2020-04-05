const chai = require("chai");
const { isKinyarwanda } = require("../index.js");
describe("is-kinya", () => {
  describe("Detect if a word is a kinyarwanda", () => {
    it("should behave as expected if array of words is passed in", (done) => {
      let words = ["amazi", "meza"];
      chai.expect(isKinyarwanda(words)).to.be.equal(true);
      done();
    });
    it("should behave as expected if a sentence is passed in", (done) => {
      let sentence = "Mbifurije umunsi mwiza";
      chai.expect(isKinyarwanda(sentence)).to.be.equal(true);
      done();
    });
    it("should behave as expected if a foreign word is passed in", (done) => {
      let greeting = "hello";
      chai.expect(isKinyarwanda(greeting)).to.be.equal(false);
      done();
    });

    it("should behave as expected if a foreign sentence is passed in", (done) => {
      let sentence = "should behave as expected";
      chai.expect(isKinyarwanda(sentence)).to.be.equal(false);
      done();
    });
    it("should behave as expected if a sentence contains apostrophes", (done) => {
      let sentence = "Ikinyarwanda kigizwe n'inyuguti";
      chai.expect(isKinyarwanda(sentence)).to.be.equal(true);
      done();
    });
    it("should behave as expected if a number is passed in", (done) => {
      let number = "500";
      chai.expect(isKinyarwanda(number)).to.be.equal(true);
      done();
    });
    it("should behave as expected if a array of mixed text is passed in", (done) => {
      let words = ["500", "hello", "array", "holy", "murakoze"];
      chai.expect(isKinyarwanda(words[0])).to.be.equal(true);
      chai.expect(isKinyarwanda(words[1])).to.be.equal(false);
      chai.expect(isKinyarwanda(words[2])).to.be.equal(false);
      chai.expect(isKinyarwanda(words[3])).to.be.equal(false);
      chai.expect(isKinyarwanda(words[4])).to.be.equal(true);
      done();
    });
  });
  it("should behave as expected if a word is combined with a punctuation", (done) => {
    let word = "Ubutinde:Ni uburyo ijambo ritinda";
    chai.expect(isKinyarwanda(word)).to.be.equal(true);
    done();
  });
  it("should behave as expected if a word is combined with a punctuation", (done) => {
    let word = "1) ryama kare ";
    chai.expect(isKinyarwanda(word)).to.be.equal(true);
    done();
  });
  it("should behave as expected if a word has tonations", (done) => {
    let words = [
      "gihaânga",
      "Kanâama",
      "Kaanamâ",
      "Gateêra",
      "Mu myandikire ya gihaânga",
    ];
    chai.expect(isKinyarwanda(words[0])).to.be.equal(true);
    chai.expect(isKinyarwanda(words[1])).to.be.equal(true);
    chai.expect(isKinyarwanda(words[2])).to.be.equal(true);
    chai.expect(isKinyarwanda(words[3])).to.be.equal(true);
    chai.expect(isKinyarwanda(words[4])).to.be.equal(true);
    done();
  });
});
