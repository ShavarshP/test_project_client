const searchFunc = (str1: string, str2: string) => {
  if (!str1) {
    return true;
  }
  return str1
    .split("")
    .every((item, index) => item.toUpperCase() === str2[index].toUpperCase());
};

export const useSearch = () => {
  return { searchFunc };
};
