const chai = require("chai");
const { isKinya } = require("./index.js");
describe("is-kinya", () => {
  describe("Detect if a word is a kinyarwanda", () => {
    it("should behave as expected if array of words is passed in", (done) => {
      let words = ["amazi", "meza"];
      chai.expect(isKinya(words)).to.be.equal(true);
      done();
    });
    it("should behave as expected if a sentence is passed in", (done) => {
      let sentence = "Mbifurije umunsi mwiza";
      chai.expect(isKinya(sentence)).to.be.equal(true);
      done();
    });
    it("should behave as expected if a foreign word is passed in", (done) => {
      let greeting = "hello";
      chai.expect(isKinya(greeting)).to.be.equal(false);
      done();
    });

    it("should behave as expected if a foreign sentence is passed in", (done) => {
      let sentence = "should behave as expected";
      chai.expect(isKinya(sentence)).to.be.equal(false);
      done();
    });
    it("should behave as expected if a sentence contains apostrophes", (done) => {
      let sentence = "Ikinyarwanda kigizwe n'inyuguti";
      chai.expect(isKinya(sentence)).to.be.equal(true);
      done();
    });
    it("should behave as expected if a number is passed in", (done) => {
      let number = "500";
      chai.expect(isKinya(number)).to.be.equal(true);
      done();
    });
    it("should behave as expected if a array of mixed text is passed in", (done) => {
      let words = ["500", "hello", "array", "holy", "murakoze"];
      chai.expect(isKinya(words[0])).to.be.equal(true);
      chai.expect(isKinya(words[1])).to.be.equal(false);
      chai.expect(isKinya(words[2])).to.be.equal(false);
      chai.expect(isKinya(words[3])).to.be.equal(false);
      chai.expect(isKinya(words[4])).to.be.equal(true);
      done();
    });
  });
});
