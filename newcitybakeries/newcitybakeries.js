let name;
let address;
let postalCode;
let number;
let email;


let choice;
let price;
let total=0;
let order;

function contactinfo(){
        name= document.getElementById('name').value;
        address=document.getElementById('address').value;
        postalCode=document.getElementById('postalCode').value;
        number=document.getElementById('phone').value;
        email=document.getElementById('email').value;
        document.getElementById('contactButton').style.backgroundColor='#45ab11';
}





let rectangleButton = document.getElementById("rectangle");
let roundButton = document.getElementById("round");

rectangleButton.onclick=function () {
    document.getElementById("rectangle").onclick = function () {
        document.getElementById("rectangleOptions").style.display = "inline";
        document.getElementById("extras").style.display = "inline";
        document.getElementById("roundOptions").style.display = "none";
        choice = 1;
        document.getElementById('rectangle').style.backgroundColor='#45ab11';
        document.getElementById('round').style.backgroundColor='#2d3033';
    };
};

roundButton.onclick=function () {
    document.getElementById("round").onclick = function () {
        document.getElementById("rectangleOptions").style.display = "none";
        document.getElementById("extras").style.display = "inline";
        document.getElementById("roundOptions").style.display = "inline";
        choice = 2;
        document.getElementById('round').style.backgroundColor='#45ab11';
        document.getElementById('rectangle').style.backgroundColor='#2d3033';
    };
};

function calculate(){

    let extras=0;
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let layersSheet = document.getElementById('layersSheet').value;
    let radius= document.getElementById('radius').value;
    let layersRound = document.getElementById('layersRound').value;



    if(choice === 1){
        price = 18 + ((length*width-900)*0.02);
        price = price + price*((layersSheet-1) * 0.5);
        order="Sheet cake "+width+"cm by "+length+"cm with "+layersSheet+" layers: $"+price+"<br>";
    }else{
        price = 15 + ((radius*radius*3.14-707)*0.02);
        price = price + price*((layersRound-1) * 0.5);
        order="Round cake "+radius+"cm with "+layersRound+" layers: $"+price+"<br>";
    }

    if(document.getElementById('cream').checked){
        extras+= 5;
        order+="Cream Cheese icing $5<br>";
    }
    if(document.getElementById('almonds').checked){
        extras+= 7;
        order+="Fruit and Almond topping $7<br>";
    }
    if(document.getElementById('fruit').checked){
        extras+= 4;
        order+="Fruit Jam filling $4<br>";
    }

    total = price+extras;

    document.getElementById('result').innerHTML=name+"<br>"+address+"<br>"+postalCode+"<br>"+number+"<br>"+email+"<br><br>Your order:<br><br>"+order;
    document.getElementById('total').innerHTML= "Total: $"+total.toFixed(2);
}
