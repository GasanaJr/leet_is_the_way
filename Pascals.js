/**
 * @param {number} limit
 * @returns {Array<Array<number>>}
 */

const PascalTriangle = (limit) => {
    if (limit == 0) return [];
    let res = [[1]];
    for (let i = 0; i< limit-1; i++) {
        let row = [];
        let previousRow = res[res.length - 1];
        let temp = [0, ...previousRow, 0];

        for (let j=0; j< previousRow.length + 1; j++) {
            row.push(temp[j] + temp[j+1]);
        }
        res.push(row);
    }
    return res
}

console.log(PascalTriangle(5));
