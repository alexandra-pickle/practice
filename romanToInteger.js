/**
 * Function takes Roman numeral and returns an integer
 * @param {string} s
 */
function romanToInt(s) {
  let count = 0;

  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    const next = s[i + 1];
    if (isSubtract(s[i], s[i + 1])) {
      count -= values[s[i]];
    } else {
      count += values[s[i]];
    }
  }

  console.log(count);
}

function isSubtract(val, nextVal) {
  if (!nextVal) {
    return false;
  }

  return (
    (val === "I" && (nextVal === "V" || nextVal === "X")) ||
    (val === "X" && (nextVal === "L" || nextVal === "C")) ||
    (val === "C" && (nextVal === "D" || nextVal === "M"))
  );
}
