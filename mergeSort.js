/**
 * сортировка слиянием  O(n * log (n))
 */

const merge = (left, right) => {
    let k = (left.length + right.length) - 1
    let l = left.length - 1
    let r = right.length - 1

    while(r >= 0) {
        if(left[l] > right[r]) { // сравниваем с конца массивов два последних элемента
            left[k] = left[l]
            l--
        } else {
            left[k] = right[r]
            r--
        }
        k--
    }

    return [...left]
}

const mergeSort = (arr) => {
    if(arr.length < 2) return arr

    let mid = arr.length / 2

    const left = arr.splice(0, mid)

    return merge(mergeSort(left), mergeSort(arr))
}

// исходный массив
array = [1,4, 7,5,1,3,4,2,6,];
console.log(mergeSort(array));