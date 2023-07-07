/**
 * Бинарный поиск (сложность - Olog2n)
 */

const arr = [0, 2, 6, 13, 145];

const binarySearch = (data, val) => {
    let high = data.length - 1;
    let low = 0;
    let mid = Math.floor(( high + low ) / 2);

    while (high >= low) {
        if (val === data[mid]) return mid;
        else if(val < data[mid]) high = mid - 1;
        else if(val > data[mid]) low = mid + 1;
        mid = Math.floor(( high + low ) / 2);
    }

    return -1;
}

console.log(binarySearch(arr, 145));
