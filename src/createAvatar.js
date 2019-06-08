	import imgsrc from './c1.jpg';
function createAvatar(){
	
	var imgs = new Image();
	imgs.src = imgsrc;
	imgs.classList.add('imgstyle');
	
	var root = document.getElementById('root');
	root.append(imgs);
}
export default createAvatar;