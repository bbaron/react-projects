export default (state = [], action) => {
  // noinspection JSRedundantSwitchStatement
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
