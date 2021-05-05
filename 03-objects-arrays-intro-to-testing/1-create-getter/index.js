/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    if (!path)
        return;
    
    let pathKeys = path.split(".");
     
    return function (obj){
        let i = 0;
        let inner = obj;
        for( ; i < pathKeys.length; i++){
            if (Object.keys(inner).length == 0)
                return;
            inner = inner[pathKeys[i]];
        }
        return inner;
        
    };
}
