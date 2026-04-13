// BASE_URL is '/' in dev and '/<repo>/' in production (set by vite.config.js).
const BASE = import.meta.env.BASE_URL;

export function initShell(app) {
  app.innerHTML = `
    <div class="min-h-screen flex flex-col">

      <div style="position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;background-image:url('${BASE}assets/bg.svg');background-position:right;background-size:cover;background-repeat:no-repeat"></div>

      <div class="flex flex-col">
        <div class="container pt-14 md:pt-28 px-6 mx-auto flex flex-col">

          <div class="w-full container mx-auto py-6">
            <div class="w-full flex items-center justify-between">
              <a class="flex items-center" href="#/">
                <img src="${BASE}assets/unosignal.png" />
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
              <img class="w-5/6 mx-auto slide-in-bottom" src="${BASE}assets/devices.svg" />
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
  `;
}

export function updatePage({
  title,
  pageTitle = title,
  paragraph,
  content = "",
}) {
  document.title = `UnoSignal — ${pageTitle}`;
  document.getElementById("page-title").textContent = title;
  document.getElementById("page-paragraph").textContent = paragraph;
  document.getElementById("page-content").innerHTML = content;
}
