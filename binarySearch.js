/**
 * Бинарный поиск (сложность - O log n)
 */

const arr = [0, 2, 6, 13, 145];

const binarySearch = (data, val) => {
    let left = 0
    let right = data.length - 1
    let mid = Math.floor((left + right) / 2)

    while (left <= right) {
        if(val === data[mid]) return mid
        if(val > data[mid]) left = mid + 1
        if(val < data[mid]) right = mid - 1
        mid = Math.floor((left + right) / 2)
    }
return - 1
}

console.log(binarySearch(arr, 145));
