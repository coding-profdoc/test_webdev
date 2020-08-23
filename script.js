let mysteryWord = prompt('Jeu : le rappeur du jour !').toLowerCase();
let display = '_'.repeat(mysteryWord.length);

// sorte de jeu du pendu (mais on déclare son mot avant de le retrouver XD)

while(mysteryWord !== display) {

    // je demande le guess et stocke sa position
    let guess = prompt(`Devine ! ${display}`).toLowerCase();
    let foundPos = mysteryWord.indexOf(guess);


    // tant que la position correspond à une position valide
    while(foundPos !== -1 && guess.length === 1) {
          // je découpe en 2 parties : avant et après le guess
          let firstPart = display.substring(0, foundPos);
          let lastPart = display.substring(foundPos + 1);

          // je concatène en insérant la lettre trouvée
          display = `${firstPart}${guess}${lastPart}`;
          // foundPos remis à la position de la prochaine lettre identique
          // ou -1 s'il y en a pas (on sort de la petite boucle)
          foundPos = mysteryWord.indexOf(guess, foundPos + 1);
    }
    // fin de la petite boucle

}

// fin de la grande boucle
alert('BRAVOOOOO LOïC ^^')