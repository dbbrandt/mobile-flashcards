const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action: ", action);
  const result = next(action);
  console.log("New state keys: ", Object.keys(store.getState()));
  console.log("New state: ", store.getState());
  console.groupEnd();
  return result;
};

export default logger;
