import{a as m,S as y,i as g}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const p="44822800-f7e5c6825510a03bf87da843b",L="https://pixabay.com/api/";async function f(t,r=1,a=15){const i={key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:a};try{return(await m.get(L,{params:i})).data}catch{throw new Error("Error fetching images")}}function h(t){const r=document.querySelector(".gallery"),a=t.map(e=>`
    <a href="${e.largeImageURL}" class="gallery__link">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      <div class="info">
        <p class="info-item"><b>Likes</b>${e.likes}</p>
        <p class="info-item"><b>Views</b>${e.views}</p>
        <p class="info-item"><b>Comments</b>${e.comments}</p>
        <p class="info-item"><b>Downloads</b>${e.downloads}</p>
      </div>
    </a>
  `).join("");r.insertAdjacentHTML("beforeend",a),new y(".gallery a").refresh()}function b(){const t=document.querySelector(".gallery");t.innerHTML=""}function n(t,r="info"){g[r]({title:r==="error"?"Error":"Success",message:t,position:"topRight"})}let c="",l=1;const w=document.querySelector("#search-form"),d=document.querySelector(".load-more"),s=document.querySelector(".loader");w.addEventListener("submit",async t=>{if(t.preventDefault(),c=t.currentTarget.elements.searchQuery.value.trim(),!c){n("Please enter a search query","error");return}l=1,b(),d.classList.add("hidden");try{s.classList.remove("hidden");const r=await f(c,l);if(s.classList.add("hidden"),r.hits.length===0){n("Sorry, there are no images matching your search query. Please try again!","error");return}h(r.hits),d.classList.remove("hidden")}catch{s.classList.add("hidden"),n("Failed to fetch images. Please try again later.","error")}});d.addEventListener("click",async()=>{l+=1;try{s.classList.remove("hidden");const t=await f(c,l);if(s.classList.add("hidden"),t.hits.length===0){n("No more images available.","info"),d.classList.add("hidden");return}h(t.hits),v()}catch{s.classList.add("hidden"),n("Failed to fetch images. Please try again later.","error")}});function v(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
