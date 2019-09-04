function split(wholeArray) {
  if (wholeArray.length <= 1) {
    return wholeArray;
  } else {
    const startOfSecond = Math.floor(wholeArray.length / 2);
    const firstHalf = wholeArray.slice(0, startOfSecond);
    const secondHalf = wholeArray.slice(startOfSecond);
    return [firstHalf, secondHalf];
  }
}

function merge(first, second, comparator = defaultComparator) {
  if (first.length === 0) { return second; }
  if (second.length === 0) { return first; }
  const mergedArray = [];
  while (first.length !== 0 || second.length !== 0) {
    if (first.length === 0) {
      return mergedArray.concat(second);
    } else if (second.length === 0) {
      return mergedArray.concat(first);
    } else if (comparator(first[0],second[0])) {
      mergedArray.push(first.shift());
    } else {
      mergedArray.push(second.shift());
    }
  }
  return mergedArray;
}

function defaultComparator(a, b){
  if(a < b) return true;
  return false;
}

function mergeSort(array, comparator = defaultComparator) {
  if (array.length <= 1) {
    return array;
  } else {
    const arrays = split(array);
    return merge(mergeSort(arrays[0], comparator), mergeSort(arrays[1], comparator), comparator);
  }
}







// merge
  // First draft, this works!
  // let firstPointer = 0;
  // let secondPointer = 0;
  // for (let i = 0; i < first.length; i++) {
  //   while (first[i] > second[secondPointer]) {
  //     mergedArray.push(second[secondPointer]);
  //     secondPointer++;
  //   }
  //   mergedArray.push(first[i]);
  // }
  // while (secondPointer <= second.length - 1) {
  //   mergedArray.push(second[secondPointer]);
  //   secondPointer++;
  // }
  // return mergedArray;
