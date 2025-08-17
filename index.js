import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{a as c}from"./assets/vendor-BkCUij8E.js";const i="https://pokeapi.co/api/v2/pokemon/",l=document.querySelector(".card-container"),d=document.querySelector(".search-form");d.addEventListener("submit",p);async function u(t){return(await c(`${i}${t}`)).data}async function p(t){t.preventDefault();const e=t.target.elements.query.value.trim();try{const a=await u(e);console.log(a),l.innerHTML=m(a)}catch(a){h(a.message)}}function m({name:t,weight:e,height:a,abilities:o,sprites:r}){const s=o.map(({ability:n})=>`
        <li class="list-group-item">${n.name}</li>
    `).join("");return`
        <div class="card">
            <div class="card-img-top">
                <img src="${r.front_default}" alt="${t}"/>
            </div>
            <div class="card-body">
                <h3 class="card-title">Ім'я: ${t}</h3>
                <p class="card-text">Вага: ${e}</p>
                <p class="card-text">Зріст: ${a}</p>
            </div>

            <p class="card-text">
                <h4>Вмінян:</h4>
                <ul>
                    ${s}
                </ul>
            </p>
        </div>
    `}function h(t){alert(t)}const f="51359701-f6006c27d1fc3647654901390",y=document.querySelector(".list");c("https://pixabay.com/api/",{params:{key:f,q:"cat"}}).then(t=>{console.log(t),y.insertAdjacentHTML("beforeend",$(t.data.hits))}).catch(t=>{console.log(t)});function $(t){t.map(({previewURL:e,tags:a})=>`
    <li>
    <img src="${e}" alt="${a}" width="300" />
    </li>

    `).join("")}
//# sourceMappingURL=index.js.map
