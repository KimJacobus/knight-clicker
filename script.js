// Récupération des éléments HTML pour les boutons et la zone d'affichage
var display = document.querySelector('#display');
var click = document.querySelector('#click');
var multiply = document.querySelector('#multiply');
var autoclick = document.querySelector('#autoclick');
var bonus = document.querySelector('#bonus');
var bonusInter= document.querySelector('#bonus1');
var bonusPour = document.querySelector('#bonus2');
var bonus3 = document.querySelector('#bonus3');
var pBonus = document.querySelector('#pbonus');
var pMultiply = document.querySelector('#pmultiply');
var pAutoclick = document.querySelector('#pautoclick');
var pClick = document.querySelector('#pclick');
var pBonus3 = document.querySelector('#pbonus3');
var pBonus2 = document.querySelector('#pbonus2');
var pBonus1 = document.querySelector('#pbonus1');
var multi = document.querySelector('#multiplicateur');
var dep = document.querySelector('#POdepense');
var reset = document.querySelector('#resetbutton');

// Coûts pour les différentes actions
var multiplierCost = 30;
var autoclickCost = 50;
var bonusCost = 100;
var bonusInterCost = 200;
var bonusPourCost = 100;
var bonus3Cost = 100;
var depense = 0;

// Variables pour vérifier si les fonctionnalités de Autoclick et Bonus sont activées
var autoclickOn = false;
var bonusOn = false;

  // Intervalles d'appel pour les fonctions autoclickF et bonusF
  var interTime = 1000;
  var interTimeValid = 1000;
  var autoclickInterval = window.setInterval(autoclickF,interTimeValid);
  var bonusInterval = window.setInterval(bonusF, 1000);
    
// Variables pour le score, la valeur de chaque click, le multiplicateur et le temps de bonus
var score = 0;
var clickValue = 1;
var multiplier = 1;
var bonusTime = 30;
var pourVal = 10;
var disPourVal = 10;
var totalScore = (score*multiplier*((pourVal/100)*10))
var scoreBonus3 = 0

// fonction reset
function resetScore () {
  location.reload();
  localStorage.clear();

}

// Fonction pour mettre à jour l'affichage du score
function displayScore() {
  display.innerText = Math.round(score);
}

// Fonction pour mettre à jour l'affichage du multiplicateur
function displayMultiplier() {
  pMultiply.innerText = '(coût : ' + multiplierCost + ')';
}
//Fonction d'affichage multiplicateur
function displayMulti() {
  multi.innerText = 'Multi : \n x' + multiplier;
}

// Fonction pour mettre à jour l'affichage du bouton Autoclick
function displayAutoclick() {
  pAutoclick.innerText = '(coût : ' + autoclickCost + ')';
}

// Fonction pour mettre à jour l'affichage du bouton Bonus
function displayBonus() {
  pBonus.innerText ='(coût : ' + bonusCost + ')';
}

// Fonction pour mettre à jour l'affichage du temps de bonus
function displayBonusTime() {
  pBonus.innerText = 'Durée : ' + bonusTime + ' s';
}
// Fonction pour mettre à jour l'affichage du bonus inter
function displayBonusInter() {
  pBonus1.innerText = '(coût : '+ bonusInterCost +')';
}
// Fonction pour mettre à jour l'affichage du bonus pourcentage
function displayBonusPour() {
  pBonus2.innerText = `+${disPourVal++}% (coût : ${bonusPourCost})`;
}
// Fonction pour mettre à jour l'affichage du bonus pourcentage
function displayBonus3() {
  pBonus3.innerText = '(coût : '+ bonus3Cost +')';
}
//Fonction pour mettre a jour l'affichage du ClickValue
function displayClickValue() {
  pClick.innerText = 'PO/s : \n + '+ clickValue.toFixed(2) ;
} 
//Fonction pour mettre a jour l'affichage du total
function displayTotal() {
  // let totalScore = (score*multiplier*((pourVal/100)*10))
if (localStorage.totalScore) {
  localStorage.totalScore = Number(localStorage.totalScore)+(1*clickValue);
} else {
  localStorage.totalScore = totalScore;
}
  document.getElementById("pointtotal").innerText = ('Total : \n' +Math.floor((parseInt(localStorage.totalScore) + scoreBonus3)));
}
//Fonction pour mettre a jour l'affichage des depense
function displayDepense() {
  dep.innerText = 'Depense : \n' + depense
}
// Fonction pour activer ou désactiver le bouton "Multiplier" en fonction du score
function multiplyEnabler() {
  if (score >= multiplierCost) {
    multiply.disabled = false;
    multiply.classList.remove("cursor-not-allowed","opacity-50");
    multiply.classList.add("hover:animate-ping");
  } else {
    multiply.disabled = true;
    multiply.classList.add("cursor-not-allowed","opacity-50");
    multiply.classList.remove("hover:animate-ping");
  }
}

// Fonction pour activer ou désactiver le bouton "Autoclick" en fonction du score et de l'état actuel
function autoclickEnabler() {
  if (!autoclickOn && score >= autoclickCost) {
    autoclick.disabled = false;
    autoclick.classList.remove("cursor-not-allowed","opacity-50");
    autoclick.classList.add("hover:animate-bounce");
  } else {
    autoclick.disabled = true;
    autoclick.classList.add("cursor-not-allowed","opacity-50");
    autoclick.classList.remove("hover:animate-bounce");
  }
}

// Fonction pour activer ou désactiver le bouton "Bonus" en fonction du score et de l'état actuel
function bonusEnabler() {
  if (!bonusOn && score >= bonusCost) {
    bonus.disabled = false;
    bonus.classList.remove("cursor-not-allowed","opacity-50");
    bonus.classList.add("hover:animate-waving-hand");
  } else {
    bonus.disabled = true;
    bonus.classList.add("cursor-not-allowed","opacity-50");
    bonus.classList.remove("hover:animate-waving-hand");
  }
}

// Fonction pour activer ou désactiver le bouton "Intervalle" en fonction du score
function intrevalEnabler() {
  if (score >= bonusInterCost && interTime > 500) {
    bonusInter.disabled = false;
    bonusInter.classList.remove("cursor-not-allowed","opacity-50");
    bonusInter.classList.add("hover:animate-pulse");
    bonusInter.classList.add("hover:scale-125");
  } else {
    bonusInter.disabled = true;
    bonusInter.classList.add("cursor-not-allowed","opacity-50");
    bonusInter.classList.remove("hover:animate-pulse");
    bonusInter.classList.remove("hover:scale-125");
  }
}
// Fonction pour activer ou désactiver le bouton "Pourcentage" en fonction du score
function pourcentEnabler() {
  if (score >= bonusPourCost && pourVal <= 15) {
    bonusPour.disabled = false;
    bonusPour.classList.remove("cursor-not-allowed","opacity-50");
    bonusPour.classList.add("hover:animate-pulse");
    bonusPour.classList.add("hover:scale-125");
  } else {
    bonusPour.disabled = true;
    bonusPour.classList.add("cursor-not-allowed","opacity-50");
    bonusPour.classList.remove("hover:animate-pulse");
    bonusPour.classList.remove("hover:scale-125");
  }
}

// Fonction pour activer ou désactiver le bouton "Bonus3" en fonction du score
function bonus3Enabler() {
  if (score >= bonus3Cost) {
    bonus3.disabled = false;
    bonus3.classList.remove("cursor-not-allowed","opacity-50");
    bonus3.classList.add("hover:animate-pulse");
    bonus3.classList.add("hover:scale-125");
  } else {
    bonus3.disabled = true;
    bonus3.classList.add("cursor-not-allowed","opacity-50");
    bonus3.classList.remove("hover:animate-pulse");
    bonus3.classList.remove("hover:scale-125");
  }
}

// Fonction pour activer ou désactiver tous les boutons en fonction des conditions nécessaires
function buttonsEnabler() {
  multiplyEnabler();
  autoclickEnabler();
  bonusEnabler();
  intrevalEnabler();
  pourcentEnabler();
  bonus3Enabler();
  }
  
  // Fonction pour augmenter le score lorsque le bouton "Click" est pressé
  function increaseScore() {
  score += clickValue;
  displayClickValue();
  buttonsEnabler();
  displayScore();
  displayTotal();
  }
  
  // Fonction pour augmenter le multiplicateur lorsque le bouton "Multiplier" est pressé
  function increaseMultiplier() {
  score -= multiplierCost;
  depense += multiplierCost;
  multiplier *= 2;
  clickValue = multiplier*((pourVal/100)*10);
  if (bonusOn) {
  clickValue *= 2;
  }
  multiplierCost *= 2;
  displayMulti();
  buttonsEnabler();
  displayScore();
  displayMultiplier();
  displayDepense();
  }
  
  // Fonction pour activer la fonctionnalité Autoclick lorsque le bouton "Autoclick" est pressé
  function enableAutoclick() {
  score -= autoclickCost;
  depense += autoclickCost;
  autoclickOn = true;
  autoclick.disabled = true;
  displayScore();
  displayDepense();
  }
  
  // Fonction appelée toutes les secondes pour augmenter le score si la fonctionnalité Autoclick est activée
  function autoclickF() {
  if (autoclickOn) {
  increaseScore();
  }
  }
  
  // Fonction pour activer la fonctionnalité Bonus lorsque le bouton "Bonus" est pressé
  function enableBonus() {
  score -= bonusCost;
  depense += bonusCost;
  bonusOn = true;
  clickValue *= 2;
  bonus.disabled = true;
  displayScore();
  displayBonusTime();
  displayDepense();
  }
  
  // Fonction pour désactiver la fonctionnalité Bonus lorsque le temps de bonus est écoulé
  function disableBonus() {
  bonusOn = false;
  bonusTime = 30;
  clickValue = ((multiplier/100)*pourVal)*10;
  displayBonus();
  buttonsEnabler();
  }
  
  // Fonction appelée toutes les secondes pour décrémenter le temps de bonus et désactiver la fonctionnalité Bonus si nécessaire
  function bonusF() {
  if (bonusOn) {
  --bonusTime;
  displayBonusTime();
  if (bonusTime === 0) {
  disableBonus();
  }
  }
  }
  // Fonction pour activer la fonctionnalité Bonus lorsque le bouton "Intervalle" est pressé
  function reducInterval() {
    if (interTime > 500) {
    clearInterval(autoclickInterval);
    interTime -= 100;
    autoclickInterval = window.setInterval(autoclickF, interTime);
    }
    bonusInter.disabled = true;
    score -= bonusInterCost;
    depense += bonusInterCost;
    bonusInterCost *= 3;
    buttonsEnabler();
    displayScore();
    displayBonusInter(); 
    displayDepense();
  }
    
  // Fonction pour activer la fonctionnalité Bonus lorsque le bouton "Pourcentage" est pressé
  function pourcentage() { 
    if(score >= bonusPourCost) {
      pourVal *= 1.1;
      clickValue += Math.min((multiplier/100)*pourVal);
    }
    score -= bonusPourCost;
    depense += bonusPourCost;
    bonusPour.disabled = true;
    bonusPourCost *= 2;
    displayScore();
    buttonsEnabler();
    displayBonusPour();
    displayDepense();
  }

  // Fonction pour activer la fonctionnalité Bonus lorsque le bouton "Bonus3" est pressé
  function Bonus3() {
    let bonusMalus = (Math.floor(Math.random() * 10));
    console.log(bonusMalus)
    score -= bonus3Cost;
    depense += bonus3Cost;
    if(confirm("Êtes-vous sûr de vouloir boire la potion ?")) {
      if(bonusMalus === 1) { scoreBonus3 = (score *= 5 + bonus3Cost) }        
      else if(bonusMalus > 1 && bonusMalus <= 3) { scoreBonus3 = (score *= 1.1 + bonus3Cost) }        
      else if(bonusMalus > 3 && bonusMalus <= 5) { scoreBonus3 = (score *= 1.3 + bonus3Cost) }
      else if(bonusMalus > 5 && bonusMalus <=7) {
        if(score <= bonus3Cost) { score = 0 }
        else score *= 0.5 }
      else if(bonusMalus > 7 && bonusMalus <=9) { score = 0 }
      else alert("Rien ne se passe...") }
    else score += bonus3Cost
    bonus3.disabled = true;
    bonus3Cost *= 1;
    displayScore();
    buttonsEnabler();
    displayBonus3();
    displayDepense();
  }

  // Mise à jour initiale de l'affichage et des boutons
  displayScore();
  displayMultiplier();
  displayAutoclick();
  displayBonus();
  displayBonusInter();
  displayBonusPour();
  displayBonus3();
  buttonsEnabler();
  displayTotal();
  displayMulti();
  displayDepense();

  multiply.disabled = true;
  autoclick.disabled = true;
  bonus.disabled = true;
  bonusInter.disabled = true;
  bonusPour.disabled = true;
  bonus3.disabled = true;
  
  // Ajout des écouteurs d'événements pour les boutons
  click.addEventListener('mousedown', increaseScore);
  multiply.addEventListener('mousedown', increaseMultiplier);
  autoclick.addEventListener('mousedown', enableAutoclick);
  bonus.addEventListener('mousedown', enableBonus);
  bonusInter.addEventListener('mousedown',reducInterval);
  bonusPour.addEventListener('mousedown', pourcentage);
  bonus3.addEventListener('mousedown', Bonus3);
  reset.addEventListener('mousedown', resetScore);
  

// ANIMATION

var skull = document.getElementById('skull'); 
var skullTwo = document.getElementById('skullTwo'); 
var skullThree = document.getElementById('skullThree'); 
var skullFour = document.getElementById('skullFour'); 
var skullFive = document.getElementById('skullFive'); 
var knight = document.getElementById('knight');
var orc = document.getElementById('orc')

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
    knight.classList.add("animate-sliding2");
    knight.classList.add("lg:animate-sliding4");
}
function callSlideOrc() {
    orc.classList.add("animate-sliding");
    orc.classList.add("lg:animate-sliding3");
    orc.classList.remove("animate-bounce");
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


