// document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("form").onsubmit = function(){
        let emojis = [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
            0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x23F0, 0x1F579, 0x1F628,
            0x1F62C, 0x1F62E, 0x1F604, 0x1F614];
        let bmi = 0;
        let weight = document.querySelector("#Weight").value;
        let tal = document.querySelector("#tall").value;
        tal = tal/100;
        bmi = (weight/(tal*tal)).toFixed(1);
        document.querySelector("h1").innerHTML = bmi;
         if(bmi <= 18.5){
             document.querySelector("h2").innerHTML =`Under Weight  ${String.fromCodePoint(0x1F614)}`;  
         }
         if(bmi > 18.5 && bmi <=24.9 )
         {
            document.querySelector("h2").innerHTML =`Normal Weigjt  ${String.fromCodePoint(0x1F604)}`;
         }
         if(bmi > 25.0 && bmi <=29.9 )
         {
            document.querySelector("h2").innerHTML =`Over Weight  ${String.fromCodePoint(0x1F62E)}`;
         }
         if(bmi > 30.0 && bmi <=34.9 )
         {
            document.querySelector("h2").innerHTML =`Obesity class I  ${String.fromCodePoint(0x1F62C)}`;
         }
         if(bmi > 35.0 && bmi <=39.9 )
         {
            document.querySelector("h2").innerHTML =`Obesity class II  ${String.fromCodePoint(0x1F628)}`;
         }
         if(bmi >=40.0){
            document.querySelector("h2").innerHTML =`Obesity class III  ${String.fromCodePoint(0x1F62B)}`;
         }
        return false;
    }
// })

