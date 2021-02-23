module.exports = {
  twoSum: function (nums, target) {
    const ret = [];
    for (let i = 0; i < nums.length - 1; i++) {
      ret.push(i);
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          ret.push(j);
          break;
        }
      }
      if (ret.length === 2) break;
      ret.length = 0;
    }
    return ret;
  },
};
