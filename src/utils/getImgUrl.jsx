// src/utils/getImgUrl.js
export const getImgUrl = (fileName) => {
  return new URL(`../assets/books/${fileName}`, import.meta.url).href;
};
