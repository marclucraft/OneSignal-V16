import { updatePage } from '../layout.js';

export function home() {
  updatePage({
    title: 'OneSignal Web Push Notifications',
    pageTitle: 'Home',
    paragraph: 'This is a site used to test OneSignal Web Push Notifications',
  });
}
