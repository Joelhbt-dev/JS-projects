const button = document.querySelector("#buttons");

 function BGchanger(color){

        document.body.style.backgroundColor = color;
    }


button.addEventListener('click',(event)=>{

    const tButton = event.target.textContent;

      BGchanger(tButton);
})