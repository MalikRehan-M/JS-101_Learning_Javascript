let reg_username="Deadly Champ";
let reg_password="Champ9911";

let ent_username="Deadly Champ";
let ent_password="Champ9911";

if(ent_username==reg_username){
  if(ent_password==reg_password){
    console.log("login successfull");
  }else{
    console.log("Wrong Password");
  }
}else{
  console.log("Wrong Credentials");
}