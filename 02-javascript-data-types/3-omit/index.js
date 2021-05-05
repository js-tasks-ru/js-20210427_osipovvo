/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let objKeysToSearch = [...fields];
    let objKeys = Object.keys(obj);
    let objToReturn = {};
    
    for (let key of objKeys) {
        if (!objKeysToSearch.includes(key, 0)) {
            objToReturn[key] = obj[key];
        }
    }
    
    return objToReturn;
};
