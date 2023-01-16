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

// Coûts pour les différentes actions
var multiplierCost = 50;
var autoclickCost = 20;
var bonusCost = 10;
var bonusInterCost = 100;
var bonusPourCost = 100;
var bonus3Cost = 10;
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



// Fonction pour mettre à jour l'affichage du score
function displayScore() {
  display.innerText = Number(localStorage.score)+1;
}

// Fonction pour mettre à jour l'affichage du multiplicateur
function displayMultiplier() {
  pMultiply.innerText = 'x' + multiplier + ' (coût : ' + multiplierCost + ')';
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
  bonusInter.innerText = 'Reduire Intervalle (coût : '+ bonusInterCost +')';
}
// Fonction pour mettre à jour l'affichage du bonus pourcentage
function displayBonusPour() {
  bonusPour.innerText = `+${Math.floor(pourVal)}% (coût : ${bonusPourCost})`;
}
// Fonction pour mettre à jour l'affichage du bonus pourcentage
function displayBonus3() {
  pBonus3.innerText = '? (coût : '+ bonus3Cost +')';
}
//Fonction pour mettre a jour l'affichage du ClickValue
function displayClickValue() {
  pClick.innerText = '+ '+ clickValue + ' PO/s ';
} 
//Fonction pour mettre a jour l'affichage du total
function displayTotal() {
if (localStorage.score) {
  localStorage.score = Number(localStorage.score)+1;
} else {
  localStorage.score = score;
}
  document.getElementById("pointtotal").innerText = ('Total PO ' +localStorage.score);
}

// Fonction pour activer ou désactiver le bouton "Multiplier" en fonction du score
function multiplyEnabler() {
  if (score >= multiplierCost) {
    multiply.disabled = false;
  } else {
    multiply.disabled = true;
  };
}

// Fonction pour activer ou désactiver le bouton "Autoclick" en fonction du score et de l'état actuel
function autoclickEnabler() {
  if (!autoclickOn && score >= autoclickCost) {
    autoclick.disabled = false;
  } else {
    autoclick.disabled = true;
  }
}

// Fonction pour activer ou désactiver le bouton "Bonus" en fonction du score et de l'état actuel
function bonusEnabler() {
  if (!bonusOn && score >= bonusCost) {
    bonus.disabled = false;
  } else {
    bonus.disabled = true;
  }
}

// Fonction pour activer ou désactiver le bouton "Intervalle" en fonction du score
function intrevalEnabler() {
  if (score >= bonusInterCost && interTime > 500) {
    bonusInter.disabled = false;
  } else {
    bonusInter.disabled = true;
  }
}
// Fonction pour activer ou désactiver le bouton "Pourcentage" en fonction du score
function pourcentEnabler() {
  if (score >= bonusPourCost) {
    bonusPour.disabled = false;
  } else {
    bonusPour.disabled = true;
  }
}

// Fonction pour activer ou désactiver le bouton "Bonus3" en fonction du score
function bonus3Enabler() {
  if (score >= bonus3Cost) {
    bonus3.disabled = false;
  } else {
    bonus3.disabled = true;
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
  multiplier *= 2;
  clickValue = multiplier;
  if (bonusOn) {
  clickValue *= 2;
  }
  multiplierCost *= 3;
  buttonsEnabler();
  displayScore();
  displayMultiplier();
  }
  
  // Fonction pour activer la fonctionnalité Autoclick lorsque le bouton "Autoclick" est pressé
  function enableAutoclick() {
  score -= autoclickCost;
  autoclickOn = true;
  autoclick.disabled = true;
  displayScore();
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
  bonusOn = true;
  clickValue *= 2;
  bonus.disabled = true;
  displayScore();
  displayBonusTime();
  }
  
  // Fonction pour désactiver la fonctionnalité Bonus lorsque le temps de bonus est écoulé
  function disableBonus() {
  bonusOn = false;
  bonusTime = 30;
  clickValue = multiplier;
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
    bonusInterCost *= 5;
    buttonsEnabler();
    displayScore();
    displayBonusInter(); 
  }
    
  // Fonction pour activer la fonctionnalité Bonus lorsque le bouton "Pourcentage" est pressé
  function pourcentage() {
    if(score >= bonusPourCost && pourVal <= 15) {
      score += Math.ceil((score/100)*pourVal);
      pourVal *= 1.1;
    }
    else if(score >= bonusPourCost) {
      score += Math.ceil((score/100)*pourVal)
    }
    // score -= bonusPourCost;
    bonusPour.disabled = true;
    bonusPourCost *= 3;
    displayScore();
    buttonsEnabler();
    displayBonusPour(); 
  }

  // Fonction pour activer la fonctionnalité Bonus lorsque le bouton "Bonus3" est pressé
  function Bonus3() {
    let bonusMalus = (Math.floor(Math.random() * 10));
    if(bonusMalus >= 5) {
      score *= 5
    } else if(bonusMalus < 5) {
      score *= 0.5
    }
    score -= bonus3Cost;
    bonus3.disabled = true;
    bonus3Cost *= 1;
    displayScore();
    buttonsEnabler();
    displayBonus3();
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
  






