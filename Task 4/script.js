/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';


function getData() {
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                document.getElementById('output').innerHTML +=
                ` <div class = 'card'><h3>${data[i].brand}</h3><br> ${data[i].models}</div>`;
            }
        })
        .catch((err) => console.warn('klaida getData', err));
}
getData();


function makeCard(obj) { 
    const divEl = document.createElement('div');
    divEl.className = 'card';
    const h3El = document.createElement('h3');
    h3El.textContent = `${data[obj].brand}`;
    const pEl = document.createElement('p');
    pEl.textContent = `${data[obj].models }`;
    imgEl.src = obj.avatar_url;
    imgEl.alt = obj.login;
    
    divEl.append(h3El, pEl);
    return divEl;
}