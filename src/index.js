

module.exports = function towelSort (matrix) {
  if(matrix === undefined) return [];
  if(matrix.length === 0) return [];
  
  let innerM = matrix.map((value,index) => {
    if(index % 2 !== 0) {
      return value.reverse();
    } else {
      return value;
    }
  })
  return innerM.flat();
}
