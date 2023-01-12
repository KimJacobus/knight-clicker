// Récupération des éléments HTML pour les boutons et la zone d'affichage
var display = document.getElementById('display');
var click = document.getElementById('click');
var multiply = document.getElementById('multiply');
var autoclick = document.getElementById('autoclick');
var bonus = document.getElementById('bonus');
var bonusInter= document.getElementById('bonus1');
var bonusPour = document.getElementById('bonus2');
var bonus3 = document.getElementById('bonus3');

// Coûts pour les différentes actions
var multiplierCost = 15;
var autoclickCost = 20;
var bonusCost = 300;
var bonusInterCost = 10;
var bonusPourCost = 100;
var bonus3Cost = 100;
// Variables pour vérifier si les fonctionnalités de Autoclick et Bonus sont activées
var autoclickOn = false;
var bonusOn = false;

// Variables pour le score, la valeur de chaque click, le multiplicateur et le temps de bonus
var score = 0;
var clickValue = 1;
var multiplier = 1;
var bonusTime = 5;

// Fonction pour mettre à jour l'affichage du score
function displayScore() {
  display.innerHTML = score;
}

// Fonction pour mettre à jour l'affichage du multiplicateur
function displayMultiplier() {
  multiply.value = 'Multiplicateur x' + multiplier + ' (coût suivant : ' + multiplierCost + ')';
}

// Fonction pour mettre à jour l'affichage du bouton Autoclick
function displayAutoclick() {
  autoclick.value = 'Autoclick (coût : ' + autoclickCost + ')';
}

// Fonction pour mettre à jour l'affichage du bouton Bonus
function displayBonus() {
  bonus.value = 'Bonus (coût : ' + bonusCost + ')';
}

// Fonction pour mettre à jour l'affichage du temps de bonus
function displayBonusTime() {
  bonus.value = 'Bonus (temps : ' + bonusTime + ' sec)';
}
// Fonction pour mettre à jour l'affichage du bonus inter
function displayBonusInter() {
  bonusInter.value = 'Reduire Intervalle (coût : '+ bonusInterCost +')';
}
// Fonction pour mettre à jour l'affichage du bonus pourcentage
function displayBonusPour() {
  bonusPour.value = 'Augmente le pourcentage (coût : '+ bonusPourCost +')';
}
// Fonction pour mettre à jour l'affichage du bonus pourcentage
function displayBonus3() {
  bonus3.value = 'je sais pas encore (coût : '+ bonus3Cost +')';
}

// Fonction pour activer ou désactiver le bouton "Multiplier" en fonction du score
function multiplyEnabler() {
  if (score >= multiplierCost) {
    multiply.disabled = false;
  } else {
    multiply.disabled = true;
  }
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
  if (score >= bonusInterCost) {
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
  buttonsEnabler();
  displayScore();
  }
  
  // Fonction pour augmenter le multiplicateur lorsque le bouton "Multiplier" est pressé
  function increaseMultiplier() {
  score -= multiplierCost;
  multiplier += 1;
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
  
  // Mise à jour initiale de l'affichage et des boutons
  displayScore();
  displayMultiplier();
  displayAutoclick();
  displayBonus();
  displayBonusInter();
  displayBonusPour();
  displayBonus3();
  multiply.disabled = true;
  autoclick.disabled = true;
  bonus.disabled = true;
  bonusInter.disabled = true;
  bonusPour.disabled = true;
  bonus3.disabled = true;
  
  // Ajout des écouteurs d'événements pour les boutons
  click.addEventListener('click', increaseScore);
  multiply.addEventListener('click', increaseMultiplier);
  autoclick.addEventListener('click', enableAutoclick);
  bonus.addEventListener('click', enableBonus);
  
  // Intervalles d'appel pour les fonctions autoclickF et bonusF
var autoclickInterval = window.setInterval(autoclickF, 1000);
var bonusInterval = window.setInterval(bonusF, 1000);

  // Bonus autoclick diminue le temps d'intervalle
