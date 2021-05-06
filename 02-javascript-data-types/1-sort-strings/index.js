/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    
    let sortedArr = [...arr];
    let direction = 0;
    
    if (param == "asc") {
        direction = 1;
    }
        
    if (param == "desc") {
        direction = -1;
    } 

    if (direction == 0) {
        throw new Error('wrong value of "param", only "asc" or "desc" are operatable')
    }

    sortedArr.sort(function(a, b) {
        return (""+a).localeCompare(b, ["ru-Ru", "en-En"], {"caseFirst":"upper"}) * direction;
    });
        
    return sortedArr;
}
