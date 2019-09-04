

function bubbleSort(array, ){
    if(array.length <= 1){
        return array;
    }
    else{
        //SOLUTION 1 - WORKS
        let endPointer = array.length -1;
        let pointer = 0;
        while(pointer != endPointer){
            for(let i = 1; i <= endPointer;i ++){
                if(array[i-1]> array[i]){
                    swap(i-1, i, array);
                }
            }
            endPointer--;
        }
        return array;

        // let endPointer = array.length -1;
        // let pointer = 0;
        // while(pointer != endPointer){
        //     for(let i = 1; i <= endPointer;i ++){
        //         if(array[i-1]> array[i]){
        //             swap(i-1, i, array);
        //         }
        //     }
        //     endPointer--;
        // }
        // return array;


    }

}

function swap(index1, index2, array){
    let temp = array[index1];
    array[index1] = array[index2]
    array[index2] = temp;
}