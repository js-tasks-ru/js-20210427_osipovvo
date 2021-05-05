/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    let newObj = {};
    
    obj = (obj !== null && obj !== undefined) ? obj : false; //i dont know why, but nmp can't parse there '??' and throws error
    if (obj == false)
        return;
      
    if (Object.values(obj).length == 0)
        return newObj;
    
    for (let [key, value] of Object.entries(obj)) {
        if (value) {
            newObj[value] = key;
        }
    }
    
    return newObj;
}
