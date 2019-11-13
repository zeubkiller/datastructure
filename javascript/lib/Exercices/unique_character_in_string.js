import { finished } from "stream";

export function search_unique_character_in_string(s) {
    return _search_unique_character_in_string_with_sort(s, _selectionSort);
}

function _selectionSort(s){

    let strArray = s.split("");

    for(let i = 0 ; i < s.length ; i++) {
        //Find minimum
        let minIndex = null;
        for(let j = i + 1 ; j < strArray.length ; j++) {
            if(strArray[j] < strArray[minIndex])
                minIndex = j;
        }

        //Swap
        const temp = s[i];
        strArray[i] = strArray[minIndex];
        strArray[minIndex] = temp;
    }

    return strArray.join("");
}

function _quickSort(s) {
    let strArray = s.split("");

    return strArray.join("");
}

function _search_unique_character_in_string_with_sort(s, sortFunction) {
    //Sort the string in place
    const sortedString = sortFunction(s);

    console.log("*SortedString " + sortedString);

    //search for non unique character
    let previous_character = sortedString[0];
    for(let i = 1; i < sortedString.length; i++){
        if(sortedString[i] === previous_character) {
            //console.log("previousChar " + previous_character);
            //console.log("s[i] " + s[i]);
            return false;
        }
        previous_character = sortedString[i];
    }

    return true;
}