describe('Bubble Sort', function(){
    beforeEach(function () {
        spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
      });
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
        expect(window.swap.calls.count()).toEqual(0);
    });

    it('one element', function(){
        expect( bubbleSort([5]) ).toEqual( [5] );
        expect(window.swap.calls.count()).toEqual(0);
    });
    it('retains length', function(){
        expect( bubbleSort([3,2,1]).length ).toEqual( 3 );
        expect(window.swap.calls.count()).toEqual(3);
    });
    it('simple case', function(){
        expect( bubbleSort([3,2,1]) ).toEqual( [1,2,3] );
        expect(window.swap.calls.count()).toEqual(3);
    });
    it('medium case', function(){
        expect( bubbleSort([5,8,12,34,89,1]) ).toEqual( [1,5,8,12,34,89] );
        expect(window.swap.calls.count()).toEqual(5);
    });

});