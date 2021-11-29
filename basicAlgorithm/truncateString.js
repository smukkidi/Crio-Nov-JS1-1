function truncateGivenString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}

let results = truncateGivenString("A-tisket a-tasket A green and yesll basket", 8);
console.log(results);
