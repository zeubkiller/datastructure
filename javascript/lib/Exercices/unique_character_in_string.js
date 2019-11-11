import { finished } from "stream";

export function search_unique_character_in_string(s) {
    return _search_unique_character_in_string_with_sort(s, _selectionSort);
}

function _selectionSort2(s) {
    let strArray = s.split("");

    const sortedArray = strArray.map((element, index)=> {
        let min = element;
        for(let i = index + 1; i < strArray.length ; i++)
            if(min > strArray[i])
                min = strArray[i];

        return min;
    });
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

function _swap(s, index1, index2) {
    const temp = strArray[index1];
    strArray[index1] = strArray[index2];
    strArray[index2] = temp;
}

// function _quicksortRecurse(strArray, indexLow, indexHigh) {

//     if(indexLow < 0 || indexLow >= strArray.length || indexHigh < 0 || indexHigh >= strArray.length)
//         return;

//     const endRightPart = indexHigh;
//     const startLeftPart = indexLow;

//     const pivot = strArray[endRightPart];

//     indexHigh--;

//     while(indexLow !== indexHigh) {
//         if(strArray[indexLow] > pivot) {
//             while(strArray[indexHigh] > pivot && indexLow !== indexHigh)
//                 indexHigh--;
            
//             if(indexLow !== indexHigh)
//                 _swap(strArray, indexLow, indexHigh);
//         }
//         else
//             indexLow++;
//     }

//     //swap pivot
//     _swap(strArray, indexHigh, endRightPart);

//     //Do the same for left and right part
//     _quicksortRecurse(strArray, startLeftPart, indexLow);
//     _quicksortRecurse(strArray, indexLow + 1, endRightPart);
// }

// function _quickSort(s) {
//     let strArray = s.split("");

//     //Choose pivot
//     const pivotIndex = strArray.length - 1;
//     const pivot = strArray[pivotIndex];

//     //Swap item
//     let indexLow = 0;
//     let indexHigh = strArray.length - 2;

    

//     //Do the same for left and right part
//     const startLeftPart = 0;
//     const endLeftPart = indexLow;

//     return strArray.join("");
// }

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