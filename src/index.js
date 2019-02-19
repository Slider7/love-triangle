/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let n = preferences.length, count = 0; 
  
  for (let i = 0; i < n; i++) {
    if (preferences[preferences[preferences[i] - 1] - 1] == i + 1  && preferences[i] != i+1) {
      count++;	
    }  
  };

  return Math.trunc(count / 3) ;
};
