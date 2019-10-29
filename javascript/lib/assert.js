
export function assert_true(first) {
    console.assert(first === true)
}

export function assert_false(first) {
    console.assert(first === false)
}

function compare_array(first, second) {
    if(first instanceof Array && second instanceof Array){
        if (first.length !== second.length)
            return false
        
        const valuesNotEquals = first.filter((value, index)=> value !== second[index]);
        
        return valuesNotEquals.length === 0;
    }
    else
        return false;
    
}

export function assert_equals(first, second) {
    if(first instanceof Array)
        console.assert(compare_array(first, second), `${first} is different from ${second}`);
    else
        console.assert(first === second, `${first} is different from ${second}`)
}

export function assert_not_equals(first, second) {
    console.assert(first !== second, `${first} is equal to ${second}`)
}