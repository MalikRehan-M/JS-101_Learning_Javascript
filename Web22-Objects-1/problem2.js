let str="malikrehan";
let object={};

for (let i=0;i<=str.length-1;i++){
  if(object[str[i]]==undefined){
    object[str[i]]=1;
  }else{
    object[str[i]]++;
  }
  
    
  }

console.log(object);