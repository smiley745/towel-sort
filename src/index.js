
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    
    if(matrix === undefined) return result
    
    for (i=0; i<matrix.length; i++){
        if (i === 0 || i % 2 === 0){
        result.push(matrix[i])}
        else {
        result.push(matrix[i].reverse())}
    }
    
  return result.flat();
}
