export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const addToCart = (product) => {
  let cart = getCart();

  const index = cart.findIndex((item) => item.id === product.id);

  if (index >= 0) {
    cart[index].quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
};

export const removeFromCart = (id) => {
  const cart = getCart().filter((item) => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
};

export const updateQuantity = (id, quantity) => {
  let cart = getCart();

  cart = cart.map((item) =>
    item.id === id
      ? {
          ...item,
          quantity,
        }
      : item
  );

  localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
};