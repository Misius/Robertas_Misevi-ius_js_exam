/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const btn = document.getElementById('submit-btn'); 

btn.addEventListener('click', function() {
    
    let inputEl = document.getElementById('search').value; 
    let lb = inputEl * 2.2046;
    let g = inputEl * 1000;
    let oz = inputEl * 35.274;
    const form = document.createElement("p");
    const content = document.createTextNode(`${lb} pounds, ${g} grams or ${oz} ounces`);
    form.appendChild(content);
    console.log('conversion ===', `${lb} pounds ${g} grams ${oz} ounces`);
    document.getElementById("output").appendChild(form);

});