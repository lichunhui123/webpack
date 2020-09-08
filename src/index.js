// var Header = require('./header.js');
// var Sidebar = require('./sidebar.js');
// var Content = require('./content.js');
// new Header();
// new Sidebar();
// new Content();

// import avatar from "./avatar.jpg";
// import './index.scss';
// var dom = document.getElementById("root");
// var img = new Image();
// img.src = "./dist/"+avatar;
// img.classList.add('avatar');
// dom.append(img);

// var root = document.getElementById('root');
// import './index.scss';
// root.innerHTML = '<div class="iconfont icon-changjingguanli"></div>';

// const arr = [
// 	new Promise(() => {}),
// 	new Promise(() => {})
// ];

// arr.map(item => {
// 	console.log(item);
// });

// import {add} from "./math.js";
// add(1,2);

// function getComponent(){
//   return import("lodash").then(({default:_})=>{
//     var element = document.createElement("div");
//     element.innerHTML = _.join(["chunhui","li"],"-");
//     return element;
//   })
// }

// getComponent().then((element)=>{
//   document.body.appendChild(element);
// })

// async function getComponent(){
//   const {default:_} = await import(/* webpackChunkName:"lodash" */ "lodash");
//   const element = document.createElement('div');
// 	element.innerHTML = _.join(['chunhui', 'li'], '-');
// 	return element;
// }

// document.addEventListener("click",()=>{
//   getComponent().then(element=>{
//     document.body.appendChild(element);
//   })
// })
import './style.css';
import './style1.css';

document.addEventListener("click",()=>{
  import(/* webpackPrefetch:true */ "./click").then(({default:func})=>{
    func();
  })
})

import $ from 'jquery';
import _ from 'lodash';

const dom = $('<div>');
dom.html(_.join(['dell', 'lee'], '---'));
$('body').append(dom);

//console.log(this===window);