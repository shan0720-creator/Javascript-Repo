const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");
let numOfwords;
const generateWord = (n) => {
     let text = "";
     const letter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     for(let i = 0;i<numOfwords;++i){
          const random  = (Math.random()*25).toFixed(0);
          text += letter[i];
     }
     
     return text;
};
console.log(generateWord(5));
const generatePara= () => {
     numOfwords = Number(input.value);
     const para = document.createElement("p");
     let data = "";
     for(let i = 0;i<10;++i){
          const randomNumber = (Math.random()*15).toFixed(0);
         data+= generateWord(randomNumber);
         data+=" ";
     }

     para.innerText = data;
     para.setAttribute("class","paras");
     container.append(para);
};



