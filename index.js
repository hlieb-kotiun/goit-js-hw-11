import{i,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();function d(o){return fetch(o).then(e=>{if(!e.ok)throw new Error("Oooops!");return e.json()})}function m(o){return o.map(e=>` <li class="gallery-item">
      <a href="${e.largeImageURL}"><img class="img" src="${e.webformatURL}" alt="${e.tags}"/></a>
      <div class="card-wrapper"><p class="like text">Likes<span class="content">${e.likes}</span></p>
      <p class="view text">Views<span class="content">${e.views}</span></p>
      <p class="comment text">Comments<span class="content">${e.comments}</span></p>
      <p class="download text">Downloads<span class="content">${e.downloads}</span></p></div>
      
    </li>`).join("")}const u=document.querySelector(".form");document.querySelector(".btn");const a=document.querySelector(".gallery");document.querySelector(".text-input");const c=document.querySelector(".loader");u.addEventListener("submit",g);a.addEventListener("click",h);function g(o){o.preventDefault();const e=o.target.elements.text.value.trim();if(e==="")return i.warning({title:"",position:"topRight",message:"You forgot to fill the field!"});u.reset(),a.innerHTML="",c.style.display="block",d(`https://pixabay.com/api/?key=47394436-b99c7e5d1cf7e77b7cf55ecb6&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`).then(n=>{if(n.total===0)return i.error({title:"",position:"topRight",message:'"Sorry, there are no images matching your search query. Please try again!"'});a.insertAdjacentHTML("beforeend",m(n.hits)),p.refresh()}).catch(n=>i.error({title:"",position:"topRight",message:"Oooops! Somthing went wrong :/"})).finally(()=>c.style.display="none")}let p=new f(".gallery-item a",{captions:!0,captionsData:"alt",captionDelay:250});function h(o){o.preventDefault(),o.target.nodeName==="IMG"&&p.on("show.simplelightbox")}
//# sourceMappingURL=index.js.map
