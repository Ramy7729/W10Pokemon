// Collaborated with Liz for this assignment.

// Created a function that will update and display the user and enemy health along with their names.
// Cookies.get will retrieve the value of the specified cookie.
function update() {
    document.getElementById("myPokemonName").innerHTML = Cookies.get("userPokemonSelection");
    document.getElementById("myPokemonHP").innerHTML = `HP ${Cookies.get("userCurrentHealth")}`;
    document.getElementById("cpuHealth").innerHTML = `HP ${Cookies.get("computerCurrentHealth")}`;
    // These conditional statements will show the image of the Pokemon that the user selected.
    if (Cookies.get("userPokemonSelection") === "Pikachu") {
        document.getElementById("myPokemonImage").setAttribute("src", "images/pikachu.jpeg");
        document.getElementById("myPokemonImage").setAttribute("alt", "Pikachu from Pokemon");
    } else if (Cookies.get("userPokemonSelection") === "Jigglypuff") {
        document.getElementById("myPokemonImage").setAttribute("src", "images/jigglypuff.jpeg");
        document.getElementById("myPokemonImage").setAttribute("alt", "Jigglypuff fromm Pokemon");
    } else if (Cookies.get("userPokemonSelection") === "Psyduck") {
        document.getElementById("myPokemonImage").setAttribute("src", "images/psyduck.jpeg");
        document.getElementById("myPokemonImage").setAttribute("alt", "Psyduck from Pokemon");
    }
    // Specific text appears on screen depending on who is the winner.
    if (Cookies.get("computerCurrentHealth") <= 0) {
        document.getElementById("winLoseText").innerHTML = "YOU WIN!";
        document.getElementById("winLoseText").classList.remove("hidden");
    } else if (Cookies.get("userCurrentHealth") <= 0) {
        document.getElementById("winLoseText").innerHTML = "YOU LOSE!";
        document.getElementById("winLoseText").classList.remove("hidden");
    }
}

// Attack function used with the onclick attribute to attack the cpu.
// Attack function stops when the user or cpu wins the battle.
function attack() {
    if (Cookies.get("computerCurrentHealth") <= 0 || Cookies.get("userCurrentHealth") <= 0) {
        return;
    }
    // User and cpu attack damage is based on the Math.floor and Math.random function to randomize damage within a range of 7-11.
    var enemyHealth = Cookies.get("computerCurrentHealth") - (Math.floor(Math.random() * 5) + 7);
    Cookies.set("computerCurrentHealth", enemyHealth, {expires: 365});
    if (enemyHealth > 0) {
        var myHealth = Cookies.get("userCurrentHealth",) - (Math.floor(Math.random() * 5) + 7);
        Cookies.set("userCurrentHealth", myHealth, {expires: 365}); 
    }

    update();
}

// Setting cookies to store the values of the user's selected Pokemon along with their health and the cpu's.
// These cookies will be used in other functions that updates the user and cpu health when they are attacked.
var selectedPokemon = Cookies.get("selection");
if (selectedPokemon !== undefined) {
    Cookies.set("userPokemonSelection", selectedPokemon, {expires: 365});
    Cookies.set("userCurrentHealth", 100, {expires: 365});
    Cookies.set("computerCurrentHealth", 100, {expires: 365});
    Cookies.set("userMaxHealth", 100, {expires: 365});
    Cookies.set("computerMaxHealth", 100, {expires: 365});
    Cookies.set("computerPokemonSelection", "Magikarp", {expires: 365});
    // Remove this cookie to show if the user selected a new Pokemon to start a new game.
    Cookies.remove("selection");
}

update();


