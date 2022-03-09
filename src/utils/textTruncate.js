export const truncateText = (text, amount = 20) => {
  let truncatedWord = "";
  for (let i = 0; i <= amount; i++) {
    truncatedWord += text[i] ? text[i] : "";
  }
  return truncatedWord + "...";
};
