    window.onload=function(){
        const tx1= document.getElementById('Text1');
        const tx2= document.getElementById('Text2');
        console.log(tx1);
        tx1.addEventListener('change',disBtn);
        tx2.addEventListener('change',disBtn);
    }
    function disBtn() {
        if(tx1.value!=""&&tx2.value!=""){
            document.getElementById('clickbtn').disabled = false;
        }else{
            document.getElementById('clickbtn').disabled = true;
        }    
    }

