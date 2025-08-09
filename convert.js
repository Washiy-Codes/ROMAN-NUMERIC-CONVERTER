const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const converts = [
  ["M",1000],
  ["CM",900],
  ["D",500],
  ["CD",400],
  ["C",100],
  ["XC",90],
  ["L",50],
  ["XL",40],
  ["X",10],
  ["IX",9],
  ["V",5],
  ["IV",4],
  ["I",1]

];

convertBtn.addEventListener("click", () => {

  let _input = parseInt(document.getElementById("number").value);
  if(isNaN(_input) || !_input){
    result.innerText = "Please enter a valid number";
  }else if(_input <= 0){
    result.innerText = "Please enter a number greater than or equal to 1"
  }else if(_input >= 4000){
      result.innerText = "Please enter a number less than or equal to 3999";
  } else{
    let numberRoman = "";
    let input = _input;

    for(const [roman,number] of converts){
      while(input >= number){
        numberRoman += roman;
        input -= number;
      }

    }
    result.innerText = `In Roman Numerals: ${_input} is written as ${numberRoman}`;
    document.getElementById("number").value = "";
  }
});

