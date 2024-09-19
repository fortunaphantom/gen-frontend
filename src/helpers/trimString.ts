export const trimString = (str: string, len: number) => {
  return str.length < len ? str : str.substring(0, len - 3) + "...";
};
