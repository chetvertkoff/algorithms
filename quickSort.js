/**
 * Быстрая сортировка (сложность O(n×log2n))
 */

const arr = [15, 5, 12, 9, 13, 1, 14, 2, 11, 6, 4, 3, 8, 10, 7];

const quickSort = (data) => {
    if (data.length < 2) return data;

    let pivot = data[0];
    let less = [];
    let greater = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i] > pivot) greater.push(data[i]);
        else if (data[i] < pivot) less.push(data[i])
    }

    return quickSort(less).concat(pivot).concat(quickSort(greater));
}

console.log(quickSort(arr))
