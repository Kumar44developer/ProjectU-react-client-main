export const firstUpperCase = (message) => {
  if (!message || typeof message !== "string") return "";
  return message[0].toUpperCase() + message.substring(1);
};

