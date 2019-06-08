
function Header() {
	var dom = document.getElementById('root');
	var header = document.createElement('div');
	header.innerHTML = 'header'
	dom.append(header);
}
//common.js
 module.exports = Header;
 
 //es6
 // export default  Header;