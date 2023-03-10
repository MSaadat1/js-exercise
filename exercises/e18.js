import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const asteroidDiscoveryCounts = data.asteroids.reduce((counts, asteroid) => {
    const year = asteroid.discoveryYear;
    counts[year] = (counts[year] || 0) + 1;
    return counts;
  }, {});
  
  const greatestYear = Object.keys(asteroidDiscoveryCounts).reduce((maxYear, year) => {
    if (asteroidDiscoveryCounts[year] > asteroidDiscoveryCounts[maxYear]) {
      return year;
    }
    return maxYear;
  }, Object.keys(asteroidDiscoveryCounts)[0]);
  
  return Number(greatestYear);
   
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
