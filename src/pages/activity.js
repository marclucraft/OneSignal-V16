import { updatePage } from '../layout.js';

export function activity() {
  // Params can arrive either as a real query string (?reading=…) when the
  // page is opened directly from an IAM deep-link, or embedded in the hash
  // fragment (#/activity?reading=…) when navigated to within the SPA.
  const searchParams = new URLSearchParams(window.location.search);
  const hashQuery = window.location.hash.split('?')[1] ?? '';
  const hashParams = new URLSearchParams(hashQuery);

  const reading = searchParams.get('reading') ?? hashParams.get('reading') ?? '--';
  const listening = searchParams.get('listening') ?? hashParams.get('listening') ?? '--';

  updatePage({
    title: 'Activity Stats',
    pageTitle: 'Activity Stats',
    paragraph: 'Testing sharing stats from an In-App Message',
    content: `
      <div class="w-full mt-8">
        <div class="stats-card max-w-md bg-white rounded-lg shadow-lg p-6">
          <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">Your Reading Activity</h1>
          <div class="stat-row flex justify-between items-center py-3 border-b border-gray-200">
            <div class="stat-label text-gray-600 font-medium">Time spent reading:</div>
            <div class="stat-value text-xl font-bold text-indigo-600">${reading}</div>
          </div>
          <div class="stat-row flex justify-between items-center py-3">
            <div class="stat-label text-gray-600 font-medium">Time spent listening:</div>
            <div class="stat-value text-xl font-bold text-indigo-600">${listening}</div>
          </div>
        </div>
      </div>
    `,
  });
}
