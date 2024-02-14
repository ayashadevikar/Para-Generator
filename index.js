const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");

// const getData = () => {
//     console.log(input.value);
// }

let generateWord = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    for(let i=0; i < n; i++) {
        const random = (Math.random() * 25).toFixed(0);
        text += letters[random];
    }

    return text;
}

const generatePara = () => {
    const numOfWords = Number(input.value);

     const para = document.createElement("p");

    //  para.innerText = "sample para";

    let data = "";

    for(let i=0; i < numOfWords; i++) {
        const randomNumber = (Math.random() * 15).toFixed(0);
        data += generateWord(randomNumber);
        data += " ";
    }

     para.innerText = data;

     para.setAttribute("class", "paras");

     container.append(para);
}
