const stringDecoder = (string) => {
  return string
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&");
};

export default stringDecoder;
