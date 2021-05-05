/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let objKeysToSearch = [...fields];
    let objKeys = Object.keys(obj);
    let objToReturn = {};
    
    for (let key of objKeys) {
        if (objKeysToSearch.includes(key, 0)) {
            objToReturn[key] = obj[key];
        }
    }
    
    return objToReturn;
};
