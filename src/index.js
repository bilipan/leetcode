module.exports = {
  twoSum: function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
      const ret = [];
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          ret.push(i);
          ret.push(j);
          return ret;
        }
      }
    }
  },
  // 结果为倒序
  twoSum2: function (nums, target) {
    let map = new Map();
    let ret = [];
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        ret["0"] = i;
        ret["1"] = map.get(nums[i]);
        return ret;
      }
      map.set(target - nums[i], i);
    }
    return ret;
  },
};
