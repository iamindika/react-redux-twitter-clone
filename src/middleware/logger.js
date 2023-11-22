export const logger = (store) => (next) => (action) => {
  console.group(action.type);
  const returnValue = next(action);
  console.log("New state", store.getState());
  console.groupEnd(action.type);

  return returnValue;
};
