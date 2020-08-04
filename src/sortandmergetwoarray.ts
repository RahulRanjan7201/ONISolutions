class SortAndMergeTwoArray {
    //Duplicate Elements m or n will also get inserted in arrays A and B. Asuming every element will be number type and pre sorted
    aArrayVal:number [] = [];
    bArrayVal:number [] = [];
    addElementsToA(val:number) {
        this.aArrayVal.push(val);
    }
    addElementToB(val:number) {
        this.bArrayVal.push(val);
    }
    // Bubble Sort Algo is used .
    mergeAndSortArray() {
        this.aArrayVal = [...this.aArrayVal ,...this.bArrayVal];
        var len = this.aArrayVal.length,
        i, j, stop;
        for (i=0; i < len; i++){
            for (j=0, stop=len-i; j < stop; j++){
                if (this.aArrayVal[j] > this.aArrayVal[j+1]){
                    this.swap(this.aArrayVal, j, j+1);
                }
            }
        }
    return this.aArrayVal;
    }

    swap(arr, first_Index, second_Index){
        let temp = arr[first_Index];
        arr[first_Index] = arr[second_Index];
        arr[second_Index] = temp;
    }
}

//Inputs 
const sm = new SortAndMergeTwoArray();
// For array A
sm.addElementsToA(1);
sm.addElementsToA(3);
sm.addElementsToA(5);
sm.addElementsToA(6);
sm.addElementsToA(8);

//For array  B
sm.addElementToB(0);
sm.addElementToB(2);
sm.addElementToB(10);

console.log("Printing Array A with Merge Data of B And in sorted form ========= >");
console.log(sm.mergeAndSortArray());