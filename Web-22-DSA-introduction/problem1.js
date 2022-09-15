let str="DonalD";
let bag="";
for(let i=0;i<=str.length-1;i++){
  if(i==0){
    bag=bag+"R";
  }else{
    bag=bag+str[i];
  }
}
console.log(bag);
