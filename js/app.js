$(function () {
	"use strict";

	var overlay = $('#overlay'),
		shareClosed = $('#share-closed'),
		shareOpened = $('#share-opened'),
		closeShare = $('#close-share');
	
	shareClosed.on('click', function () {
		shareOpened.css('display', 'block');
		overlay.css('display', 'block');
	});

	closeShare.on('click', function () {
		shareOpened.css('display', 'none');
		overlay.css('display', 'none');
	});
});