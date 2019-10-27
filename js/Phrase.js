/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor (phrase){
        this.phrase = phrase.toLowerCase();
     }
     
     /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const phraseDivUl = document.getElementById('phrase').getElementsByTagName('ul')[0]; 
        const phraseDisplayed = this.phrase.split(""); //splits phrase to letters
        let htmlLetters = []; // array for holding li elements with letters

        phraseDisplayed.forEach(letter => {
            let li = document.createElement('li');
            phraseDivUl.append(li);
            li.innerHTML = letter;
            htmlLetters.push(li);
            if (letter === " "){
                li.className = "space";
            } else {
                li.className = "letter";
            }
        });
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter){       
        return this.phrase.includes(letter);
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter){
        const phrase = document.querySelectorAll(".letter");
        phrase.forEach(element => {
            if (element.innerHTML === letter){
              element.className = "show";
            }
        });
    }
 }