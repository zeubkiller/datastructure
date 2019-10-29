
export function assert_true(first) {
    console.assert(first === true, `${first} is false`)
}

export function assert_false(first) {
    console.assert(first === false, `${first} is true`)
}

export function assert_equals(first, second) {
    console.assert(first === second, `${first} is different from ${second}`)
}

export function assert_not_equals(first, second) {
    console.assert(first !== second, `${first} is equal to ${second}`)
}