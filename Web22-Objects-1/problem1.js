let items=["one","two",'three','four','one','five','two','three','six'];
let numbers={};
for(let i=0;i<=items.length-1;i++){
  numbers[items[i]]=1;
}
console.log(numbers);