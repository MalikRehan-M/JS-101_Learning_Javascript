let char="mALIK";
let bag="";
for(let i=0;i<=char.length-1;i++){
  if(char[i]=="m"){
    bag=bag+"M";
  }else{
    bag=bag+char[i];
  }
}
console.log(bag);