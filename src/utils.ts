export const getDomainName = (url: string): string => {
  let newUrl = url;

  if (url.indexOf("//") > -1) {
    newUrl = url.split("/")[2];
  } else {
    newUrl = url.split("/")[0];
  }

  //find & remove port number
  newUrl = newUrl.split(":")[0];
  //find & remove "?"
  newUrl = newUrl.split("?")[0];

  return newUrl;
};

export const spliceArray = (
  array: any[],
  startIndex: number,
  endIndex: number
) => {
  return [...array].slice(startIndex, endIndex);
};
