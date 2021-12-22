//👉 Write your tests below here:
import oddOrEven from "./main.js"


describe("Tests", function() {
    it ("Should return 'Equal'.", function() {
      const actual = oddOrEven([1,2,3,4,5,6,7,8]);
      const expected = "Equal";
      expect(actual).toStrictEqual(expected);
    });
  });

  describe("Tests", function() {
    it ("Should return 4.", function() {
      const actual = oddOrEven([9,5,3,7,2]);
      const expected = 4;
      expect(actual).toStrictEqual(expected);
    });
  });

  describe("Tests", function() {
    it ("Should return 3.", function() {
      const actual = oddOrEven([2,6,8,1]);
      const expected = 3;
      expect(actual).toStrictEqual(expected);
    });
  });
