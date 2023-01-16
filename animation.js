

// iterate over the children instead ? 
// get element by id.children

var skull = document.getElementById('skull'); 
var skullTwo = document.getElementById('skullTwo'); 
var skullThree = document.getElementById('skullThree'); 
var skullFour = document.getElementById('skullFour'); 
var skullFive = document.getElementById('skullFive'); 
var knight = document.querySelector('#knight');
var orc = document.querySelector('#orc')

var click = document.querySelector('#click');


var blockone = true;
var blocktwo = true;
var blockthree = true;
var blockfour = true;
var blockfive = true;









click.addEventListener("click", CallSkullOne);
click.addEventListener("click", callSlideKnight);
click.addEventListener("click", callSlideOrc);

function callSlideKnight() {
    knight.classList.remove("animate-none");
    knight.classList.remove("lg:animate-none");
}
function callSlideOrc() {
    orc.classList.remove("animate-none");
    orc.classList.remove("lg:animate-none");
}
function CallSkullOne(){ 

    
    if(blockone) {
        blockone = false;
        
        skull.classList.remove("hidden");
        
        setTimeout(()=> {
           
            blockone = true; 
            CallSkullTwo();
            skull.classList.add("hidden");
        },2000)
        
    }
}


function CallSkullTwo() {


    
    if(blocktwo) {

        blocktwo = false;
    
    skullTwo.classList.remove("hidden");

    setTimeout(()=> {
        skullTwo.classList.add("hidden");
        blocktwo = true;

    },2000)

    setTimeout(()=> {
            CallSkullThree();
    },500)
}
}


function CallSkullThree() {

    
    if(blockthree) {
        blockthree = false;
    
    skullThree.classList.remove("hidden");

    setTimeout(()=> {
        skullThree.classList.add("hidden");
        blockthree = true;
    },2000)

    setTimeout(()=> {
            CallSkullFour();
    },300)
}
}

function CallSkullFour() {

    
    if(blockfour) {
        blockfour = false;
    
    skullFour.classList.remove("hidden");
    setTimeout(()=> {
        
        skullFour.classList.add("hidden");
        blockfour = true;
    },2000)

    setTimeout(()=> {
            CallSkullFive();
    },800)
}
}

function CallSkullFive() {
    let blockfive = true;
    
    if(blockfive) {
        blockfive = false;
    skullFive.classList.remove("hidden");

    setTimeout(()=> {
        blockfive = true; 
        skullFive.classList.add("hidden");
    },2000)

    // setTimeout(()=> {
    // },300)
}
}


