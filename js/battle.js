// Setting cookies to store the values of the user's selected Pokemon along with their health and the cpu's.
// These cookies will be used in other functions that updates the user and cpu health when they are attacked.
var selectedPokemon = Cookies.get("selection");
if (selectedPokemon !== undefined) {
    Cookies.set("userPokemonSelection", selectedPokemon);
    Cookies.set("userCurrentHealth", 100);
    Cookies.set("computerCurrentHelath", 100);
    Cookies.set("userMaxHealth", 100);
    Cookies.set("computerMaxHealth", 100);
    Cookies.set("computerPokemonSelection", "Magikarp");
    // Remove this cookie to know if the user selected a new Pokemon to start a new game.
    Cookies.remove("selection");
   
}


