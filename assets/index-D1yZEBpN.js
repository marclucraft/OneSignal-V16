(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const r="/OneSignal-V16/";function f(e){e.innerHTML=`
    <div class="min-h-screen flex flex-col">

      <div style="position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background-image:url('${r}assets/bg.svg');background-position:right;background-size:cover;background-repeat:no-repeat"></div>

      <div class="flex flex-col">
        <div class="container pt-14 md:pt-28 px-6 mx-auto flex flex-col">

          <div class="w-full container mx-auto py-6">
            <div class="w-full flex items-center justify-between">
              <a class="flex items-center" href="#/">
                <img src="${r}assets/unosignal.png" />
              </a>
            </div>
          </div>

          <div class="flex flex-col md:flex-row w-full mt-8 md:mt-12 flex-1">

            <div class="flex flex-col w-full md:w-2/5 justify-start overflow-y-hidden">
              <h1 id="page-title"
                class="mt-0 mb-4 text-3xl font-black md:text-5xl text-grey-950 text-center md:text-left">
              </h1>
              <p id="page-paragraph" class="text-center md:text-2xl md:text-left"></p>
              <div class="onesignal-customlink-container"></div>
              <div id="page-content"></div>
            </div>

            <div class="w-full md:w-3/5 py-6 overflow-y-hidden flex items-center justify-center">
              <img class="w-5/6 mx-auto slide-in-bottom" src="${r}assets/devices.svg" />
            </div>

          </div>
        </div>
      </div>

      <footer class="mt-auto w-full py-6 px-6 text-sm flex justify-between items-center bg-white bg-opacity-10">
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

    </div>
  `}function d({title:e,pageTitle:i=e,paragraph:s,content:a=""}){document.title=`UnoSignal — ${i}`,document.getElementById("page-title").textContent=e,document.getElementById("page-paragraph").textContent=s,document.getElementById("page-content").innerHTML=a}const l=new Map;function u(e,i){l.set(e,i)}function g(){const e=window.location.hash;return!e||e==="#"?"/":e.replace(/^#/,"").split("?")[0]||"/"}function c(){const e=g(),i=l.get(e)??l.get("/");i&&i(),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"virtualPageView",page:e,title:document.title})}function m(){window.addEventListener("hashchange",c),c()}function p(){d({title:"OneSignal Web Push Notifications",pageTitle:"Home",paragraph:"This is a site used to test OneSignal Web Push Notifications"})}function v(){const e=new URLSearchParams(window.location.search),i=window.location.hash.split("?")[1]??"",s=new URLSearchParams(i),a=e.get("reading")??s.get("reading")??"--",t=e.get("listening")??s.get("listening")??"--";d({title:"Activity Stats",pageTitle:"Activity Stats",paragraph:"Testing sharing stats from an In-App Message",content:`
      <div class="w-full mt-8">
        <div class="stats-card max-w-md bg-white rounded-lg shadow-lg p-6">
          <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Your Reading Activity</h1>
          <div class="stat-row flex justify-between items-center py-3 border-b border-gray-200">
            <div class="stat-label text-gray-600 font-medium">Time spent reading:</div>
            <div class="stat-value text-xl font-bold text-indigo-600">${a}</div>
          </div>
          <div class="stat-row flex justify-between items-center py-3">
            <div class="stat-label text-gray-600 font-medium">Time spent listening:</div>
            <div class="stat-value text-xl font-bold text-indigo-600">${t}</div>
          </div>
        </div>
      </div>
    `})}f(document.getElementById("app"));u("/",p);u("/activity",v);m();
