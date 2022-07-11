// prints out proper text, decodes all HTML entities

const stringDecoder = (string) => {
  let textArea = document.createElement("textarea");
  textArea.innerHTML = string;
  return textArea.value;
};

export default stringDecoder;
