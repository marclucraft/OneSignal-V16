(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const o="/OneSignal-V16/";function f(t){t.innerHTML=`
    <div class="flex-1 flex flex-col bg-right bg-cover" style="background-image: url('${o}assets/bg.svg')">
      <div class="container pt-14 md:pt-28 px-6 mx-auto flex-1 flex flex-col">

        <!-- Nav -->
        <div class="w-full container mx-auto py-6">
          <div class="w-full flex items-center justify-between">
            <a class="flex items-center" href="#/">
              <img src="${o}assets/unosignal.png" />
            </a>
          </div>
        </div>

        <!-- Two-column layout -->
        <div class="flex flex-col md:flex-row w-full mt-8 md:mt-12 flex-1">

          <!-- Left column: page-specific content lives here -->
          <div class="flex flex-col w-full md:w-2/5 justify-start overflow-y-hidden">
            <h1 id="page-title"
              class="mt-0 mb-4 text-3xl font-black md:text-5xl text-grey-950 text-center md:text-left">
            </h1>
            <p id="page-paragraph" class="text-center md:text-2xl md:text-left"></p>
            <div class="onesignal-customlink-container"></div>
            <div id="page-content"></div>
          </div>

          <!-- Right column: persistent illustration -->
          <div class="w-full md:w-3/5 py-6 overflow-y-hidden flex items-center justify-center">
            <img class="w-5/6 mx-auto slide-in-bottom" src="${o}assets/devices.svg" />
          </div>

        </div>
      </div>
    </div>

    <footer class="w-full py-6 px-6 text-sm flex justify-between items-center bg-white bg-opacity-10">
      <div class="container mx-auto flex justify-between items-center">
        <div class="space-x-4">
          <a href="#/" class="text-gray-500 no-underline hover:no-underline">Home</a>
          <a href="#/activity" class="text-gray-500 no-underline hover:no-underline">Activity</a>
        </div>
        <div class="text-gray-500">
          <a class="no-underline hover:no-underline" href="#">&copy; UnoSignal ${new Date().getFullYear()}</a>
        </div>
      </div>
    </footer>
  `}function d({title:t,paragraph:i,content:s=""}){document.getElementById("page-title").textContent=t,document.getElementById("page-paragraph").textContent=i,document.getElementById("page-content").innerHTML=s}const r=new Map;function u(t,i){r.set(t,i)}function g(){const t=window.location.hash;return!t||t==="#"?"/":t.replace(/^#/,"").split("?")[0]||"/"}function c(){const t=g(),i=r.get(t)??r.get("/");i&&i(),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"virtualPageView",page:t,title:document.title})}function m(){window.addEventListener("hashchange",c),c()}function v(){d({title:"OneSignal Web Push Notifications",paragraph:"This is a site used to test OneSignal Web Push Notifications"})}function p(){const t=new URLSearchParams(window.location.search),i=window.location.hash.split("?")[1]??"",s=new URLSearchParams(i),a=t.get("reading")??s.get("reading")??"--",e=t.get("listening")??s.get("listening")??"--";d({title:"Activity Stats",paragraph:"Testing sharing stats from an In-App Message",content:`
      <div class="w-full mt-8">
        <div class="stats-card max-w-md bg-white rounded-lg shadow-lg p-6">
          <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Your Reading Activity</h1>
          <div class="stat-row flex justify-between items-center py-3 border-b border-gray-200">
            <div class="stat-label text-gray-600 font-medium">Time spent reading:</div>
            <div class="stat-value text-xl font-bold text-indigo-600">${a}</div>
          </div>
          <div class="stat-row flex justify-between items-center py-3">
            <div class="stat-label text-gray-600 font-medium">Time spent listening:</div>
            <div class="stat-value text-xl font-bold text-indigo-600">${e}</div>
          </div>
        </div>
      </div>
    `})}f(document.getElementById("app"));u("/",v);u("/activity",p);m();
