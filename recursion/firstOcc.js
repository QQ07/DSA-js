//find the first occurence of a number in an array.

// arr=[3,4,1,8,1,4]
// findMe= 1
// currIndex=0

// output: 2
//if not found: -1

//itertive
// function firstOcc(arr, findMe, currIndex) {
//   while (currIndex < arr.length) {
//     if (arr[currIndex] == findMe) return currIndex;

//     currIndex++;
//   }
//   return -1;
// }

// recursive
function firstOcc(arr, findMe, currIndex) {
  if (arr.length == currIndex) return -1;
  if (arr[currIndex] == findMe) return currIndex;
  return firstOcc(arr, findMe, currIndex + 1);
}
