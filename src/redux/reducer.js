const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM":
      const check1 = state.find((item) => item.id === product.id);

      if (check1) {
        return state.map(
          (item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item //no need to return because in arrow function one argument is inbuild return.
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELETE_ITEM":
      const check2 = state.find((item) => item.id === product.id);

      if (check2.qty === 1) {
        return state.filter((item) => item.id !== product.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    default:
      return state;
  }
};
export { handleCart };
