const cart = [];

const handleCart = (state = cart, action) => {
  //console.log(action.payload);
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return (state = state.filter((item) => {
        return item.id !== action.payload.id;
      }));
    default:
      return state;
  }
};
export default handleCart;
