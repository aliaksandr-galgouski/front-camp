import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles.css';
import App from './app'

console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);


window.onload = async function (params) {
  var app = new App();
  await app.init();
}


