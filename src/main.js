import './styles.css';
import { initShell } from './layout.js';
import { register, init } from './router.js';
import { home } from './pages/home.js';
import { activity } from './pages/activity.js';

initShell(document.getElementById('app'));

register('/', home);
register('/activity', activity);

init();
