const tx1= document.getElementById('Text1').value;
const tx2= document.getElementById('Text2').value;

tx1.addEventListener('change',disBtn);
tx2.addEventListener('change',disBtn);

function disBtn() {
    if(tx1!=""&&tx2!=""){
        document.getElementById('clickbtn').disabled = false;
    }else{
        document.getElementById('clickbtn').disabled = true;
    }    
}

