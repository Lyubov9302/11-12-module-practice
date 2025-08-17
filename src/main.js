import axios from "axios";


// 12.1
// const url = 'https://jsonplaceholder.typicode.com/todos';

// 1) обробка помилки безпосередньо в тілі асинхронної функції 
// async function foo() {

// await чекає поки метод вик і перетворює (розпарсює)
// і зберіг результат у змінну result
  

// try {
//   const result = await axios(url);

//   document.body.insertAdjacentHTML("beforeend", JSON.stringify(result.data));

// } catch(error) {

//     console.log(error)
// }
// console.log("lalala");
// }

// foo()

// 2) або якщо ми щось повертаємо з асинхронної функції 

// foo()
// .then(data => console.log("then", data))
// .catch(error => console.log(error.message));

// 3) якщо хочем обробити результат одеієї асинхронної функції в тілі іншої 

// async function foo() {
//   const response = await axios(url);
//   return response.data;

// }


//  async function result() {
//  try {
// const data = await foo();
// console.log(data);

//  } catch(error) {
//     console.log(error.message)
//  }
// }

// result();


// 2- як ми робим запити на 3 різні ендпойнти або url 

// const url = 'https://jsonplaceholder.typicode.com/todos';

// async function getTodos() {
//     const todo1 = await axios(`${url}/1`);
//     const todo2 = await axios(`${url}/2`);
//     const todo3 = await axios(`${url}/3`);

//     return [todo1.data, todo2.data, todo3.data];
// }
//  
// getTodos()
// .then(data => console.log(data))
// .catch(error => {
//     console.log(error)
// });

// інший спосіб

// async function getTodos() {
//     const todosArr = [1, 2, 3];

//     const todos = todosArr.map( async (item) => {

//         const res = await axios(`${url}/${item}`);
//         return res.data;
//     })

//     const result = await Promise.all(todos);
//     return result;
// }

// getTodos()
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.log(error);
// })



// *************
//cпосіб, якщо обробляємо в функції 


// async function getTodos() {
//     const todosArr = [1, 2, 3];

//     try {
//         const todos = todosArr.map( async (item) => {
//             const res = await axios(`${url}/${item}`);
//             return res.data;
//         })

//         const result = await Promise.all(todos);
//         console.log(result);

//     } catch(error) {
//      console.log(error.message)
     
//     }
// }

// getTodos()


// 3 - вправа 
// використовуєм https://pokeapi.co/ та створимо сторінку перегляду 

/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 *
 */

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// 1) 
const container = document.querySelector(".card-container");
const form = document.querySelector(".search-form");

form.addEventListener("submit", onSearch);

// 2) функція яка робитиме запит на сервер
async function fetchData(pokemonName) {
    const result = await axios(`${BASE_URL}${pokemonName}`);
    return result.data;
}

async function onSearch(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.query.value.trim();
    
    try {
        const data = await fetchData(searchQuery);
        console.log(data);
        
        container.innerHTML = renderPokemon(data);
    } catch(error) {
        onFetchError(error.message);
    }
}


function renderPokemon({ name, weight, height, abilities, sprites }) {

    const abilitiesList = abilities.map(({ ability }) => `
        <li class="list-group-item">${ability.name}</li>
    `).join("");

    return `
        <div class="card">
            <div class="card-img-top">
                <img src="${sprites.front_default}" alt="${name}"/>
            </div>
            <div class="card-body">
                <h3 class="card-title">Ім'я: ${name}</h3>
                <p class="card-text">Вага: ${weight}</p>
                <p class="card-text">Зріст: ${height}</p>
            </div>

            <p class="card-text">
                <h4>Вмінян:</h4>
                <ul>
                    ${abilitiesList}
                </ul>
            </p>
        </div>
    `
}

function onFetchError(message) {
    alert(message)
}


// 4 - пагінація 