// 1 - додаєм та використовуєм бібліотеку https://axios-http.com/
// Робимо рефакторинг
// - імпорт 
// - запит
// - метод axios.get 
// - обробка відповіді та помилки 

import axios from "axios";

// const url = "https://jsonplaceholder.typicode.com/todos";

// const list = document.querySelector(".todo-list");

// a) звичайний спобіб з фетч 

// fetch(url) 
// .then(res => {
//     if(!res.ok) {
//         throw new Error("Oops");
//     }
//     return res.json;
// })
// .then(data => {
//     console.log(data);
//     list.insertAdjacentHTML("beforeend", createMarkup(data));
// })
// .catch(error => {
//     console.log(error);
// })

// function createMarkup(arr) {
//     arr.map(({ title, completed}) => `
//     <li class="list-item">
//     <input type="checkbox" ${completed && "checked"}/>
//     <p>${title}</p>
//     </li>
//     `).join("");
// }

// b) cпосіб з аксіос 

// axios("https://jsonplaceholder.typicode.com/todos1")
// .then((res) => {
//     console.log(res.data);
//     list.insertAdjacentHTML("beforeend", createMarkup(res.data));
// })
// .catch(error => {
//     console.log(error.message);
// })

// c) спосіб з аксіос і явним викликом 

// axios.get("https://jsonplaceholder.typicode.com/todos1")
//  .then((res) => {
//         console.log(res.data);
//         list.insertAdjacentHTML("beforeend", createMarkup(res.data));
//     })
//     .catch(error => {
//         console.log(error.message);
//     })

// 2 - всередині функції запит, зовні обробка 
// (як ми можемо викор аксіос в функцяя для подальшого перевикористання)


// const fetchData = (endpoint = "todos") => {
// return axios(`https://jsonplaceholder.typicode.com/${endpoint}`);


// }

// fetchData("todos")
// .then(res => {
//     console.log(res);
// })
// .catch(error => {
//     console.log(error.message);
// })
// fetchData("users")
// .then(res => {
//     console.log(res.data);
// })
// .catch(error => {
//     console.log(error);
// })

// 2 -  робимо рефакторинг авторизації запитів з ключами 
// - як у axios передавати search params та headers 

// Для прикладу використовуємо https://pixabay.com/api/docs/ 

const API_KEY = "51359701-f6006c27d1fc3647654901390";
// const params = new URLSearchParams({
// key: API_KEY,
// q: "cat"
// })
const list = document.querySelector(".list");

axios('https://pixabay.com/api/', {
params: {
key: API_KEY,
q: "cat"
}
})
.then(res => {
    console.log(res);
    list.insertAdjacentHTML("beforeend", createMarkup(res.data.hits));
})
.catch(error => {
    console.log(error);
})

function createMarkup(arr) {
    arr.map(({previewURL, tags}) => `
    <li>
    <img src="${previewURL}" alt="${tags}" width="300" />
    </li>

    `).join("");
}