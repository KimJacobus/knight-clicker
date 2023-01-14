var skull = document.getElementById('skull'); 

var click = document.querySelector('#click');

var block = true;

click.addEventListener("click", SkullAppear);

function SkullAppear(){ 
    
    if(block) {
        
        
        block = false;
        
        skull.classList.remove("hidden");
        
        
  setTimeout(()=> {

      block = true; 

    skull.classList.add("hidden");
  },2000)

}
}
