const getBaseUrl = () => {
  // Always remove trailing slash if present
  const url = import.meta.env.VITE_API_URL || "https://sid-bookstore.onrender.com";
  return url.replace(/\/$/, "");
};

export default getBaseUrl;
