/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    let retArr = [];
    if (!arr)
        return retArr;
    if (!arr.length)
        return retArr;

    for(let i=0; i<arr.length; i++){
        
        if (retArr.indexOf(arr[i]) < 0){
            retArr.push(arr[i]);
        }
    }
    
    return retArr;
}
