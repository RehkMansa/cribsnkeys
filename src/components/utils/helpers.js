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
  setCount(count - 1);
  setKeyVal(keyVal + 1);
  if (count < 0) {
    setCurrent(mainArr.length - 1);
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
  setCount(count + 1);
  setKeyVal(keyVal + 1);
  if (count > mainArr.length - 1) {
    count(0);
  }
  setCurrent([mainArr[count]]);
};
