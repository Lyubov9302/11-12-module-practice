import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{a as c}from"./assets/vendor-BkCUij8E.js";const i="51359701-f6006c27d1fc3647654901390",e=document.querySelector(".list");c("https://pixabay.com/api/",{params:{key:i,q:"cat"}}).then(t=>{console.log(t),e.insertAdjacentHTML("beforeend",n(t.data.hits))}).catch(t=>{console.log(t)});function n(t){t.map(({previewURL:o,tags:a})=>`
    <li>
    <img src="${o}" alt="${a}" width="300" />
    </li>

    `).join("")}
//# sourceMappingURL=index.js.map
