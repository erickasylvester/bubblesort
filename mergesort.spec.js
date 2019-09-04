describe('Split Array function', function() {

  it('handles an empty array', function() {
    expect(split([])).toEqual( [] );
  });

  it('handles an array with one element', function() {
    expect(split([1])).toEqual( [1] );
  });

  it('is able to split an even array into two halves', function() {
    expect(split([1, 2])).toEqual([[1], [2]]);
  });

  it('is able to split an odd array into two halves', function() {
    expect(split([1, 2, 3])).toEqual([[1], [2, 3]]);
  });
});

describe('Merge function', function(){

  it('handles one empty array and one with items', function() {
    expect(merge([], [1, 2, 4])).toEqual( [1, 2, 4] );
    expect(merge([1, 2, 4], [])).toEqual( [1, 2, 4] );
  });

  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([2, 4], [1, 3])).toEqual( [1,2,3,4] );
    expect(merge([2, 4, 5], [1, 3])).toEqual( [1,2,3,4,5] );
    expect(merge([2, 4], [1, 3, 5])).toEqual( [1,2,3,4,5] );
  });

  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([2, 4, 5, 10, 19], [1])).toEqual( [1, 2, 4 ,5 , 10, 19] );
    expect(merge([1], [2, 4, 5, 10, 19])).toEqual( [1, 2, 4 ,5 , 10, 19] );
  });

});

describe('Merge sort function', function(){

  it('handles an empty array', function() {
    expect(mergeSort([])).toEqual( [] );
  });

  it('handles an array with one element', function() {
    expect(mergeSort([1])).toEqual( [1] );
  });

  it('merge sorts both even and odd arrays', function() {
    expect(mergeSort([4, 2, 1])).toEqual( [1, 2, 4] );
    expect(mergeSort([10, 2, 5, 1, 4, 19])).toEqual( [1, 2, 4, 5 , 10, 19]);
  });

});
