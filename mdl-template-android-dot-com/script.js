
/* initialize list of gallery_photo and gallery_photo_expanded lists */
var gallery_photo = document.getElementsByClassName("gallery_photo");
var gallery_photo_expanded = gallery_photo_expanded = document.getElementsByClassName("gallery_photo_expanded");

function update_expanded() {
	/* update list of gallery_photo and gallery_photo_expanded lists */
	gallery_photo = document.getElementsByClassName("gallery_photo");
	gallery_photo_expanded = document.getElementsByClassName("gallery_photo_expanded");
	/* update the onclick functions of the each gallery_photo object */
	for (i = 0; i < gallery_photo.length; i++){
		gallery_photo[i].onclick = function () {
			this.className = "col-xs-6 col-sm-4 col-md-3 gallery_photo_expanded";
			update_expanded();
		};
	}
	/* update the onclick functions of the each gallery_photo_expanded object */
	for (i = 0; i < gallery_photo_expanded.length; i++) {
		gallery_photo_expanded[i].onclick = function () {
			this.className = "col-xs-6 col-sm-4 col-md-3 gallery_photo";
			update_expanded();
		};
	}
}

update_expanded();
