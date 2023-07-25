const arr = [94,67,15,22,83,38,67,49,30,15,82,52,13,73,76,92,65,95,29,38,83,9,1,48,32];
let sum = 0;
    for(i=0;i < arr.length;i++){
        if(arr[i]%2==0){
          sum +=arr[i];
        }
        
    }
    console.log(`THE EVEN NUM IS:${sum}`);


const Arrs = [94,67,15,22,83,38,67,49,30,15,82,52,13,73,76,92,65,95,29,38,83,9,1,48,32];
const maxnum = Math.max(...Arrs);
const minnum = Math.min(...Arrs);
console.log(`THE MAX NUM IS:${maxnum}`);
console.log(`THE MIN NUM IS:${minnum}`);

const Arr_5 = [94,67,15,22,83,38,67,49,30,15,82,52,13,73,76,92,65,95,29,38,83,9,1,48,32];
const searchElement = 22;
const index = Arr_5.indexOf(searchElement);
console.log("Index of", searchElement + ":", index); 

const Arr_6 = [94,67,15,22,83,38,67,49,30,15,82,52,13,73,76,92,65,95,29,38,83,9,1,48,32];
function isAscending(arr_6) {
    for (let i = 1; i < arr_6.length; i++) {
      if (arr_6[i] < arr_6[i - 1]) {
        return false;
      }
    }
    return true;
  }
  console.log("Is the array sorted in ascending order?", isAscending(Arr_6)); 
  const uniqueArr = Arr_6.filter((value, index, self) => self.indexOf(value) === index);

  const Arr_7 = [94,67,15,22,83,38,67,49,30,15,82,52,13,73,76,92,65,95,29,38,83,9,1,48,32];
  console.log("Array without duplicates:", uniqueArr);