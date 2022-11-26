const zodiac = document.getElementById("zodiac");
const body = document.body;  // select body to change 




const changeBackground = () => {
    switch(zodiac.value){    //switch case statements for changing colors on clicking getcolor button
        case "aries":
            body.style.backgroundColor = "white";
           break;
           case "tarus":
            body.style.backgroundColor = "gray";
           break;
           case "cancer":
            body.style.backgroundColor = "red";
           break;
           case "sagittarius":
            body.style.backgroundColor =" pink ";
           break;                                    //use hex color code for better colors
           case "aquarius":
            body.style.backgroundColor = "blue";
           break;
           case "libra":
            body.style.backgroundColor = "green";
           break;
           case "scorpion":
            body.style.backgroundColor = "black";
           break;
           case "pisces":
            body.style.backgroundColor = "orange";
           break;
           case "gemini":
            body.style.backgroundColor = "yellow";
           break;
           case "capricorn":
            body.style.backgroundColor = "brown";
           break;
           case "virgo":
            body.style.backgroundColor = "blue";
           break;
           case "leo":
            body.style.backgroundColor = "yellow";
           break;
        
    }
}
