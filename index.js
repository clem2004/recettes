let count = 2;

document.getElementsByClassName("find-ricardo")[0].onclick = function(){
    findRecipes("ricardo");
};

document.getElementsByClassName("find-recettes-qc")[0].onclick = function(){
    findRecipes("recettesduquebec");
};

document.getElementsByClassName("add")[0].onclick = function(){
    document.getElementById(count).insertAdjacentHTML('afterend', `<input id="${count + 1}" placeholder="Ingrédient ${count + 1}">`);
    count += 1;
};

document.getElementsByClassName("exemple1")[0].onclick = function(){
    document.getElementById(1).value = "Banane mûre";
    document.getElementById(2).value = "";
    findRecipes("ricardo");
};

document.getElementsByClassName("exemple2")[0].onclick = function(){
    document.getElementById(1).value = "Banane verte";
    document.getElementById(2).value = "";
    findRecipes("ricardo");
};

document.getElementsByClassName("exemple3")[0].onclick = function(){
    document.getElementById(1).value = "Framboise";
    document.getElementById(2).value = "Glaçons";
    findRecipes("ricardo");
};

function findRecipes(website) {
    let ingredients = "";
    for (let i = 1; i <= count; i++) {
        let input = document.getElementById(i);
        ingredients += input.value + ",";
    };
    ingredients = ingredients.slice(0, -1);

    switch (website) {
        case "ricardo":
            document.getElementsByTagName("iframe")[0].src = 'https://www.ricardocuisine.com/recherche?ingredient-to-include=' + ingredients + "&sort=rating";
            break
        case "recettesduquebec":
            const regex = /,/i;
            ingredients.replace(regex, "%2C+")
            document.getElementsByTagName("iframe")[0].src = 'https://www.recettes.qc.ca/recettes/recherche?search%5Bquery%5D=' + ingredients;
            break
    }
}