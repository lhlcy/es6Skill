//查找一个数组中的最大、最小值
const arrayMax = arr => Math.max(...arr);
const arrayMin = arr => Math.min(...arr);
// 过滤数组中一些错误的值
const compact = arr => arr.filter(Boolean);
// 查询数组中一个值得出现次数
const countNum = (arr,value) =>arr.reduce((a,v) => v ===value? a+1 : a+0,0);
