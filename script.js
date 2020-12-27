function rot13(str){
  let chip = "";
for(let i = 0; i< str.length; i++) {
let asciiNum =str[i].charCodeAt();
if(asciiNum >= 65 && asciiNum <=77) {
  chip += String.fromCharCode(asciiNum+13);
}else if(asciiNum >=78 && asciiNum <=90){
  chip += String.fromCharCode(asciiNum -13);
}else { 
  chip +=str[i];
}
}
return chip;
}
//rot13("A")
rot13("SERR PBQR PNZC");