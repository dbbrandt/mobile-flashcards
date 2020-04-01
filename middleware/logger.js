const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action: ", action);
  console.log("Old state: ", store.getState());
  const result = next(action);
  console.log("New state: ", store.getState());
  console.groupEnd();
  return result;
};

export default logger;
