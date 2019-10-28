
export function assert_true(first, second) {
    console.assert(first === second, `${first} is different from ${second}`)
}

export function assert_false(first, second) {
    console.assert(first !== second, `${first} is equal to ${second}`)
}