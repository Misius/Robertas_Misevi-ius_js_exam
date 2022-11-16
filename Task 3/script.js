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



// =======================================================================================================================================

// btn.addEventListener('click', async () => {
//   const dataArr = await getData(ENDPOINT);
//   makeCardList(dataArr);
// });



// function getData(from) {
//   return fetch(from)
//     .then((resp) => resp.json())
//     .then((dataInJs) => dataInJs.data)
//     .catch((err) => console.warn('klaida getData', err));
// }


// function makeCard(obj) { 
//     const divEl = document.createElement('div');
//     divEl.className = 'card';
//     const imgEl = document.createElement('img');
//     imgEl.src = obj.avatar_url;
//     imgEl.alt = obj.login;
//     const pEl = document.createElement('p');
//     pEl.textContent = `${obj.login}`;
//     divEl.append(imgEl, pEl);
//     return divEl;
// }


// function makeCardList(arr) {
//   btn.innerHTML = '';
//   // let arr = null;
//   arr.map((uObj) => makeCard(uObj)).forEach((htmlEl) => btn.append(htmlEl));
//   return arr;
// }


btn.addEventListener('click', function() {
  getData();
  displayNone();
});

function getData() {
  fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          for (let i = 0; i < data.length; i++) {
              document.getElementById('output').innerHTML +=
              ` <div class = 'card'><img src = '${data[i].avatar_url} alt = '${data[i].login}'></img><br> <h3>${data[i].login}</h3></div>`;
          }
      })
      .catch((err) => console.warn('klaida getData', err));
}

function displayNone() {
  document.getElementById('message').style.display = 'none';
}