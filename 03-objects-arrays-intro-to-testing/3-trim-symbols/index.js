/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    
    size = (size !== null && size !== undefined) ? size : -1; //i dont know why, but nmp can't parse there '??' and throws error
    if (size == -1)
        return string;
    
    if ((string.length == 0) || (size == 0))
        return '';

    let chPrev = '';
    let counter = 0;
    let resultStr = '';
    
    for(let i = 0 ; i<string.length; i++){
        let ch = string.charAt(i);
        if (ch != chPrev){
            chPrev = ch;
            counter = 1;
        } else {
            counter++;
        }
        if (counter <= size){
            resultStr+=ch;
        }
    }
    
    return resultStr;
}
