import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as s}from"./assets/vendor-BkCUij8E.js";const l=document.querySelector("#search-form"),u=document.querySelector("#breed-input"),d=document.querySelector("#breeds-list"),o=document.querySelector("#loader"),c=document.querySelector("#cat-card");l.addEventListener("submit",h);m();function m(){s("https://api.thecatapi.com/v1/breeds").then(e=>{d.insertAdjacentHTML("beforeend",p(e.data))}).catch(e=>{console.log(e)})}function p(e){return e.map(({id:a,name:r})=>`
        <option value="${r}" data-id="${a}"></option>
    `).join("")}function h(e){e.preventDefault();const a=u.value,r=Array.from(d.options).find(t=>t.value.toLowerCase()===a.toLowerCase());if(!r){alert("Оберіть існуючу породу");return}const n=r.dataset.id;o.classList.remove("hidden"),s(`https://api.thecatapi.com/v1/images/search?breed_ids=${n}`).then(t=>{if(t.data.length>0){const i=t.data[0].url;c.innerHTML=`
                    <div class="card">
                        <img src="${i}" alt="${a}" class="card-image"/>
                        <div class="card-body">
                            <h2 class="card-title">${a}</h2>
                        </div>
                    </div>
                `}else c.innerHTML='<p class="error-text">Зображення не знайдено</p>'}).catch(t=>{console.log(t)}).finally(()=>{o.classList.add("hidden")})}
//# sourceMappingURL=11-practice-axios.js.map
