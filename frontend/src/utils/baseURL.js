const getBaseUrl = () => {
  return (import.meta.env.VITE_API_URL || "https://sid-bookstore-backend-1.onrender.com").replace(/\/$/, "");
};

export default getBaseUrl;
