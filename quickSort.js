/**
 * Быстрая сортировка (сложность O(n×log2n))
 */

const arr = [15, 5, 12, 2, 15, 15, 7 ];

const quickSort = (arr) => {
    if(arr.length < 2) return arr

    let pivot = arr[0]

    let great = []
    let less = []

    arr.forEach((item) => {
        if(item > pivot) great.push(item)
        if(item < pivot) less.push(item)
    })


    return [...quickSort(less), pivot, ...quickSort(great)]

}

console.log(quickSort(arr))
