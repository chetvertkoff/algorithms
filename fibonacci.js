const fib = (max) => {
    const arr = []

    let prev = 0;
    let next = 1

    for (let i = 1; i < max; i++) {
        let current = prev+next
        prev = next
        next = current
        arr.push(current)
    }

    return arr;
}

console.log(fib(10))
