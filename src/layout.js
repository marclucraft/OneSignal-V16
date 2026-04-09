// BASE_URL is '/' in dev and '/<repo>/' in production (set by vite.config.js).
const BASE = import.meta.env.BASE_URL;

/**
 * Renders the persistent app shell into the #app element.
 * Called once on startup — nav, background, right column, and the
 * OneSignal custom-link container all live here so they survive
 * SPA navigation without requiring OneSignal to re-initialise.
 */
export function initShell(app) {
  app.innerHTML = `
    <div class="flex-1 flex flex-col bg-right bg-cover" style="background-image: url('${BASE}assets/bg.svg')">
      <div class="container pt-14 md:pt-28 px-6 mx-auto flex-1 flex flex-col">

        <!-- Nav -->
        <div class="w-full container mx-auto py-6">
          <div class="w-full flex items-center justify-between">
            <a class="flex items-center" href="#/">
              <img src="${BASE}assets/unosignal.png" />
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
            <img class="w-5/6 mx-auto slide-in-bottom" src="${BASE}assets/devices.svg" />
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
  `;
}

/**
 * Updates only the dynamic portions of the left column.
 * The shell (nav, bg, right col, OneSignal container) is untouched.
 */
export function updatePage({ title, paragraph, content = '' }) {
  document.getElementById('page-title').textContent = title;
  document.getElementById('page-paragraph').textContent = paragraph;
  document.getElementById('page-content').innerHTML = content;
}
