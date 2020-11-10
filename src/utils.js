export const formatDateTime = (strDate) => {
  const dateTime = new Date(strDate);
  const day = dateTime.getDate();
  const month = dateTime.getMonth();
  const year = dateTime.getFullYear();
  return `${day}/${month}/${year}`;
};

export const generalErrorMessage =
  "Errm.. Something went wrong, please check your Internet Connection or contact support";

export const toSentenceCase = (words) => {
  words = words.toLowerCase();
  words = words.split(" ");
  for (let index = 0; index < words.length; index++) {
    let currentWord = words[index];
    let firstLetter = currentWord.charAt(0).toUpperCase();
    words[index] = firstLetter + currentWord.slice(1);
  }
  return words.join(" ");
};

export const returnJson = (fetchRequest) => {
  if (fetchRequest.ok) {
    return fetchRequest.json();
  }
  return fetchRequest.json();
};
