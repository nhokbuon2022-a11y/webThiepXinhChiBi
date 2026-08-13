export const getWishlist = () => {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
};

export const toggleWishlist = (productId) => {
  const list = getWishlist();

  const exists = list.includes(productId);

  let newList;

  if (exists) {
    newList = list.filter((id) => id !== productId);
  } else {
    newList = [...list, productId];
  }

  localStorage.setItem("wishlist", JSON.stringify(newList));

  return newList;
};

export const isFavorite = (productId) => {
  return getWishlist().includes(productId);
};