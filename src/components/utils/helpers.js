export const toggleStateVar = (stateVar, setStateVar) =>
  stateVar === true ? setStateVar(false) : setStateVar(true);
export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
export const prevItem = (
  count,
  setCount,
  keyVal,
  setKeyVal,
  setCurrent,
  mainArr
) => {
  if (count <= 0) {
    setCount(mainArr.length - 1);
  } else {
    setCount(count - 1);
    setKeyVal(keyVal + 1);
  }
  setCurrent([mainArr[count]]);
};
export const nextItem = (
  count,
  setCount,
  keyVal,
  setKeyVal,
  setCurrent,
  mainArr
) => {
  if (count >= mainArr.length - 1) {
    setCount(0);
  } else {
    setCount(count + 1);
    setKeyVal(keyVal + 1);
  }
  setCurrent([mainArr[count]]);
};
export const showLog = (message) => console.log(message);
