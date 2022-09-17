import _ from "lodash"
import stringSimilarity from "string-similarity"

import longestCommonSubseq from "./helpers/longestCommonSubseq.mjs";
import searchHandler from "./helpers/searchHandler.mjs";
import medicineArray from "./helpers/medicines.mjs";
import { similarity } from "./helpers/stringSimilarity.mjs";

const searchText = ('gripa').toUpperCase();
const searchWords = searchText.split(' ');

const matches = stringSimilarity.findBestMatch(searchText, medicineArray.sort());
let x = matches.ratings.filter(m => m.rating > 0.65 && m.target.length > 3)
x = x.sort((a, b) => b.rating - a.rating)

// console.log(x);

if (searchWords.length > 1) {
  searchWords.forEach((word, index) => {
    const matches = stringSimilarity.findBestMatch(word, medicineArray.sort());
    let x = matches.ratings.filter(m => m.rating > 0.65 && m.target.length > 3)
    x = x.sort((a, b) => b.rating - a.rating)
    // console.log(x);
  })
}

for (let i = 0; i < medicineArray.length; i++) {
  const medicineWords = medicineArray[i].split(' ');
  if (medicineWords.length > 1) {
    medicineWords.forEach((word, index) => {
      const matches = stringSimilarity.findBestMatch(word, medicineArray.sort());
      let x = matches.ratings.filter(m => m.rating > 0.65 && m.target.length > 3)
      x = x.sort((a, b) => b.rating - a.rating)
      console.log(x);
    })
  }  
}

// -----------------------------

// const searchText = ('minofen').toUpperCase();
// const foundSubsequenceArray = []

// // First find the closest matches with several words with the longestCommonSubseq
// for (let i = 0; i < medicineArray.length; i++) {
//   const x = longestCommonSubseq(searchText, medicineArray[i])
//   if (x.length > 0) foundSubsequenceArray.push(x.trim())
// }

// // Remove duplicates
// let filteredResults = _.uniq(foundSubsequenceArray)
// // Remove words that are 3 or less characters
// filteredResults = filteredResults.filter(r => r.length > 3)
// for (let i = 0; i < filteredResults.length; i++) {
//   if (similarity(filteredResults[i], searchText) > 0.6) { 
//     console.log(filteredResults[i])
//   }
// }

// let foundMatches = []

// // Then with this filtered results, find the closest matches with the levenshtein
// for (let i = 0; i < filteredResults.length; i++) {
//   foundMatches.push(searchHandler(medicineArray, filteredResults[i]))
// }

// foundMatches = foundMatches.join(",").split(",").filter(n => n);
// foundMatches = _.uniq(foundMatches)

// console.log(foundMatches)

// const matches2 = stringSimilarity.findBestMatch('MINOFEN', foundMatches.sort());
// let x2 = matches2.ratings.filter(m => m.rating > 0.5 && m.target.length > 3)
// x2 = x2.sort((a, b) => b.rating - a.rating)

// console.log(x2);