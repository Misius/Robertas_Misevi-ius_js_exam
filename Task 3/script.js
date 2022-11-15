/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
'use strict';
console.log('script.js');

const ENDPOINT = 'https://api.github.com/users';
const btn = document.getElementById('btn');
const output = document.getElementById('output');



// =======================================================================================================================================

btn.addEventListener('click', async () => {
  const dataArr = await getData(ENDPOINT);
  makeCardList(dataArr);
});



function getData(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .then((dataInJs) => dataInJs.data)
    .catch((err) => console.warn('klaida getData', err));
}


function makeCard(obj) {
    const divEl = document.createElement('div');
    divEl.className = 'card';
    const imgEl = document.createElement('img');
    imgEl.src = obj.avatar_url;
    imgEl.alt = obj.login;
    const pEl = document.createElement('p');
    pEl.textContent = `${obj.login}`;
    divEl.append(imgEl, pEl);
    return divEl;
}


function makeCardList(arr) {
  output.innerHTML = '';
//   let arr = null;
  arr.map((uObj) => makeCard(uObj)).forEach((htmlEl) => output.append(htmlEl));
}
