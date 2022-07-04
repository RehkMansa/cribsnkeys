export const toggleStateVar = (stateVar, setStateVar) =>
  stateVar === true ? setStateVar(false) : setStateVar(true);
export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
