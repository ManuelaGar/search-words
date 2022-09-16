import _ from "lodash"
import longestCommonSubseq from "./helpers/longestCommonSubseq.mjs";
import searchHandler from "./helpers/searchHandler.mjs";

const searchText = 'acetaminophen';
const meds = ['dolex', 'dolex forte', 'dolex gripa', 'acetaminofen', 'vick', 'vick vaporub'];
const foundSubsequenceArray = []

// First find the closest matches with several words with the longestCommonSubseq
for (let i = 0; i < meds.length; i++) {
  const x = longestCommonSubseq(meds[i], searchText)
  if (x.length > 0) foundSubsequenceArray.push(x.trim())
}

// Remove duplicates
let filteredResults = _.uniq(foundSubsequenceArray)
// Remove words that are 3 or less characters
filteredResults = filteredResults.filter(r => r.length > 3)

console.log('filteredResults', filteredResults)

let foundMatches = []

// Then with this filtered results, find the closest matches with the levenshtein
for (let i = 0; i < filteredResults.length; i++) {
  foundMatches.push(searchHandler(meds, filteredResults[i]))
}

foundMatches = foundMatches.join(",").split(",").filter(n => n);
foundMatches = _.uniq(foundMatches)

console.log(foundMatches)