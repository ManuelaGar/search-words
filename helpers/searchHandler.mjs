import levenshtein from "js-levenshtein"

export default function searchHandler(meds, searchText) {
  const MIN_DISTANCE = 3;
  const filteredMeds = meds.filter((med) => {
    const distance = levenshtein(med.toLowerCase(), searchText.toLowerCase());
    return distance <= MIN_DISTANCE;
  });
  return filteredMeds
}