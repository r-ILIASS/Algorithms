// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  // Check if string is empty
  if (str.trim() === "") return false;

  // Add CamelCase
  const withCamelCase = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join("");

  // Add Hashtag
  const withHashtag = "#" + withCamelCase;

  if (withHashtag.length > 140) return false;

  return withHashtag;
}

console.log(generateHashtag("this is no man's lan"));
console.log(generateHashtag("#"));
console.log(generateHashtag(""));
