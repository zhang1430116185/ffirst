
// import {add} from './math.js';
// add(1,5);

// 代码分割，和webpack无关
// webpack中实现代码分割，两种方式
// 1. 同步代码： 只需要在webpack.common.js中做optimization的配置即可
// 2. 异步代码(import): 异步代码，无需做任何配置，会自动进行代码分割，放置到新的文件中
 

// 方法一：
//打包文件很大，加载时间比较长，当页面变更 用户要再加载很久
//  console.log( _.join([1,2,3],'***'));
// 方法二：
// main.js被分为lodash.js和main.js  并行加载  
	// 当业务逻辑发生变化时 只需要加载main.js就好了
	// 对公共代码进行拆分  提高性能
// function getComponent(){
// 	return import('lodash').then(({ default: _ }) =>{
// 		var element = document.createElement('div');
// 		element.innerHTML = _.join(['Dell', 'Lee'], '-');
// 		return element;
// 	})
// }

// import _ from 'lodash';
// var element = document.createElement('div');
// 		element.innerHTML = _.join(['Dell', 'Lee'], '-');
// 		return element;

// async function getComponent() {
// 	const { default: _ } = await import(/*webpackChunkName:'lodash'*/'lodash');
// 	const element = document.createElement('div');
// 	element.innerHTML = _.join(['Dell', 'Lee'], '-');
// 	return element;
// }
// document.addEventListener('click', () => {
// 	getComponent().then(element => {
// 		document.body.appendChild(element);
// 	});
// })


// import name from './test'
// console.log(name);

// import './style.css'
// import './style1.css'
 
import _ from 'lodash';
import $ from 'jquery';

const dom = $('<div>');
dom.html(_.join([1,2,3],'-'));
$('body').append(dom);