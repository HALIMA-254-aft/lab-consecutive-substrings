function consecutiveSubstrings(searchQuery) {
  // type your code here
 
  // Array to store all consecutive substrings
  let substrings = [];

  // Outer loop selects the starting index
  for (let i = 0; i < searchQuery.length; i++) {
    // Inner loop selects the ending index
    for (let j = i + 1; j <= searchQuery.length; j++) {
      // Extract consecutive substring
      substrings.push(searchQuery.slice(i, j));
    }
  }

  // Return the result
  return substrings

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


