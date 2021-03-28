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
        document.getElementById("myPokemonImage").setAttribute("alt", "Jigglypuff form Pokemon");
    } else if (Cookies.get("userPokemonSelection") === "Psyduck") {
        document.getElementById("myPokemonImage").setAttribute("src", "images/psyduck.jpeg");
        document.getElementById("myPokemonImage").setAttribute("alt", "Psyduck from Pokemon");
    }
}

// Setting cookies to store the values of the user's selected Pokemon along with their health and the cpu's.
// These cookies will be used in other functions that updates the user and cpu health when they are attacked.
var selectedPokemon = Cookies.get("selection");
if (selectedPokemon !== undefined) {
    Cookies.set("userPokemonSelection", selectedPokemon);
    Cookies.set("userCurrentHealth", 100);
    Cookies.set("computerCurrentHealth", 100);
    Cookies.set("userMaxHealth", 100);
    Cookies.set("computerMaxHealth", 100);
    Cookies.set("computerPokemonSelection", "Magikarp");
    // Remove this cookie to show if the user selected a new Pokemon to start a new game.
    Cookies.remove("selection");
}

update();


