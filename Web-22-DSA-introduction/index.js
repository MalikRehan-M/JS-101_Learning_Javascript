let str="DonalD";
let bag="";
for(let i=0;i<=str.lenght-1;i++){
  if(str[i]=="D"){
    bag=bag+"R";
  }else{
    bag=bag+str[i];
  }
}
console.log(bag);
