/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game */
    createPhrases(){
        const listOfPhrases = [
            {phrase: "Life is like a box of chocolates"},
            {phrase: "Hasta la vista baby"},
            {phrase: "We will rock you"},
            {phrase: "I am an alien"},
            {phrase: "this is phrase five"}
        ];
        return listOfPhrases;
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase(){
        var randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame(){
        document.getElementById("overlay").style.display = "none";
        const randomPhrase = this.getRandomPhrase();        
        const phrase = new Phrase(randomPhrase.phrase);
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button){
        button.disabled = true; //Disables the selected letter’s onscreen keyboard button.
        
        //checks wether the button clicked matches the phrase's letter
        const checkLetter = game.activePhrase.checkLetter(button.textContent);
        if (!checkLetter) {
            button.className = "wrong";
            this.removeLife();
        } else {
            button.className = "chosen";
            game.activePhrase.showMatchedLetter(button.textContent);

            if (this.checkForWin()){
                this.gameOver(true);
            }
        }
    }

     /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife(){
        document.querySelectorAll(".tries")[this.missed].
            getElementsByTagName("img")[0].src = "images/lostHeart.png";
        this.missed += 1;
        if (this.missed === 5){
            this.gameOver(this.checkForWin());
        }
    }

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't
    won */
    checkForWin(){
        const phrase = document.querySelectorAll(".letter");
        return phrase.length === 0 ? true : false;
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon){
        const overlay = document.getElementById("overlay");
        overlay.style.display = "";
        
        if (gameWon){
            document.getElementById("game-over-message").innerHTML = "Congratulations! You won the game!";
            overlay.className = "win";
        } else {
            document.getElementById("game-over-message").innerHTML = "Sorry, better luck next time!";
            overlay.className = "lose";
        }
        //resets game

                //delete previous phrase
                let ul = document.getElementById("phrase").getElementsByTagName("ul")[0];

                while (ul.firstChild) {
                    ul.removeChild(ul.firstChild);
                }

                //enable used keys 
                let usedKeys = document.querySelectorAll('.wrong, .chosen');
                usedKeys.forEach(key => {
                    key.disabled = false;
                    key.className = "key";
                });

                //renews hearts
                this.missed = 0;

                const tries = document.querySelectorAll(".tries");
                tries.forEach((heartImg) => {
                    heartImg.getElementsByTagName("img")[0].src = "images/liveHeart.png";
                });
    }
}