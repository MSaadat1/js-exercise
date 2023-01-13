import { data } from "../data/data";

// SPACE DATA EXERCISE 6
// Return an array with all asteroids names discovered after a given year
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidsDiscoveredAfterYear(data, year) {
  // Your code goes here...
  year = [2001, 2002, 2003, 2004, 2006, 2014];
    return data.asteroids.filter((planet) =>
    planet.discoveryYear >= year[0]
    ).map((planet) =>
    planet.name
    )

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
