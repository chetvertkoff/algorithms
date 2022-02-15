/**
 * Сотировка выбором (сложность On2)
 */

const arr = [15, 5, 12, 9, 13, 1, 14, 2, 11, 6, 4, 3, 8, 10, 7];

const findSmallest = (data) => {
    let smallestIndex = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i] < data[smallestIndex]) {
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

const selectionSort = (data) => {
    const newArr = [];

    for (let i = 0; i < data.length; i++) {
        for (let k = 0; k < data.length; k++) {
            const smallestIndex = findSmallest(data);
            newArr.push(data[smallestIndex]);
            data.splice(smallestIndex, 1);
        }
    }

    return newArr;
}

console.log(selectionSort(arr))
