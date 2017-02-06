


// Pause the video when the modal is closed
$(document).on('click', '.hanging-close, .modal-backdrop, .modal', function (event) {
    // Remove the src so the player itself gets removed, as this is the only
    // reliable way to ensure the video stops playing in IE
     $("#trailer-video-container").empty();
});


// Start playing the video whenever the trailer modal is opened
$(document).on('click', '.movie-tile', function (event) {
    var trailerYoutubeId = $(this).attr('data-trailer-youtube-id');
    var sourceUrl = 'https://www.youtube.com/embed/' + trailerYoutubeId + '?autoplay=1&html5=1';
     $("#trailer-video-container").empty().append($("<iframe></iframe>", {
              'src': sourceUrl
            }));
     });

$(document).on('click', '.web-game', function (event) {
	
	$("#trailer-video-container").empty().append($("<iframe></iframe>", {
		'src': 'https://mrmagic.herokuapp.com/'
	}));
});

