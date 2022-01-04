function showImgLayer(path) {
	var layer = document.createElement("div");
	layer.style.zIndex = "9999999";
	layer.style.position = "fixed";
	layer.style.top = "0";
	layer.style.left = "0";
	layer.style.backgroundColor = "rgba(0, 0, 0, .95)";
	layer.style.width = "100vw";
	layer.style.height = "100vh";
	layer.style.display = "flex";
	layer.style.justifyContent = "center";
	layer.style.alignItems = "center";
	layer.style.padding = "2%";
	layer.onclick = () => {
		layer.parentNode.removeChild(layer);
	};
	var imgbox = document.createElement("img");
	imgbox.style.display = "inline-block";
	imgbox.style.maxHeight = "100%";
	imgbox.style.maxWidth = "100%";
	imgbox.setAttribute("src", path);
	layer.appendChild(imgbox);
	document.body.appendChild(layer);
}

require(["gitbook"], function (gitbook) {
	gitbook.events.bind("page.change", function () {
		// 获取所有图片的dom
		var imgElem = document
			.getElementsByClassName("markdown-section")[0]
			.querySelectorAll("img");
		var aElem = document
			.getElementsByClassName("markdown-section")[0]
			.querySelectorAll("a.img");
		// 绑定事件
		imgElem.forEach((el) => {
			el.onclick = () => {
				showImgLayer(el.getAttribute("src"));
			};
		});
		aElem.forEach((el) => {
			el.onclick = () => {
				showImgLayer(el.getAttribute("src"));
			};
		});
	});
});
