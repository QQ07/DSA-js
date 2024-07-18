var GCDStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) return "";
  if (str1 == str2) return str1;
  if (str1 == "") return str2;
  if (str2 == "") return str1;
  return GCDStrings(str2, str1.slice(0, str1.length % str2.length));
};

GCDStrings("ababab", "ab");
