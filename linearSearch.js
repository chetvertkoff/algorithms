/**
 * Линейный поиск (сложность On)
 */

const arr = [0, 2, 6, 13, 145];

const linearSearch = (data, val) => {
    for(let i = 0; i < data.length; i++) {
        if (data[i] === val) return i;
    }

    return -1;
}

console.log(linearSearch(arr, 145));
