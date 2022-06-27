export const toggleStateVar = (stateVar, setStateVar) =>
  stateVar === true ? setStateVar(false) : setStateVar(true);
