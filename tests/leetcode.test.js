const lib = require("./../src");

test("1-两数之和", () => {
  let ret = lib.twoSum([2, 7, 11, 15], 9);
  expect(ret).toEqual([0, 1]);
  ret = lib.twoSum([3, 2, 4], 6);
  expect(ret).toEqual([1, 2]);
});
