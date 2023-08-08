module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  if (bracketsConfig[0][0] !== str[0] && bracketsConfig[1][0] !== str[0]) return false;

  const result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] === str[i]) {
        result.push(str[i]);
      }

      if (bracketsConfig[j][1] === str[i] && bracketsConfig[j][0] === result[result.length - 1]) {
        if (str[0] === '|' && str[str.length - 1] !== '|') {
          continue;
        } else {
          result.pop();
        }
      }
    }
  }

  return result.length === 0;
};
