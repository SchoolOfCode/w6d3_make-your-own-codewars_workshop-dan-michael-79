//👉 Write your tests below here:
import oddOrEven from "./main.js"

//TEST EQUAL
describe("Tests", function() {
    it ("Should return 'Equal'.", function() {
      const actual = oddOrEven([1,2,3,4,5,6,7,8]);
      const expected = "Equal";
      expect(actual).toStrictEqual(expected);
    });
  });

  describe("Tests", function() {
    it ("Should return 'Equal'.", function() {
      const actual = oddOrEven([2,2,3,3]);
      const expected = "Equal";
      expect(actual).toStrictEqual(expected);
    });
  });

//TEST ODD

  describe("Tests", function() {
    it ("Should return 4.", function() {
      const actual = oddOrEven([9,5,3,7,2]);
      const expected = 4;
      expect(actual).toStrictEqual(expected);
    });
  });

  describe("Tests", function() {
    it ("Should return 8.", function() {
      const actual = oddOrEven([3,5,7,3,5,1,8,9,4,2,5]);
      const expected = 8;
      expect(actual).toStrictEqual(expected);
    });
  });


//TEST EVEN

  describe("Tests", function() {
    it ("Should return 3.", function() {
      const actual = oddOrEven([2,6,8,1]);
      const expected = 3;
      expect(actual).toStrictEqual(expected);
    });
  });

  describe("Tests", function() {
    it ("Should return 7.", function() {
      const actual = oddOrEven([1,4,2,6,8,3,10,20,12]);
      const expected = 7;
      expect(actual).toStrictEqual(expected);
    });
  });
