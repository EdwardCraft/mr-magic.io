

function resizeIFrameToFitContent( iFrame ) {

      iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
      iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}

window.addEventListener('DOMContentReady', function(e) {

       var iFrame = document.getElementById( 'iFrame1' );
       resizeIFrameToFitContent( iFrame );

        // or, to resize all iframes:
       var iframes = document.querySelectorAll("iframe");
       for( var i = 0; i < iframes.length; i++) {
            resizeIFrameToFitContent( iframes[i] );
        }
} );





// Pause the video when the modal is closed
$(document).on('click', '.hanging-close, .modal-backdrop, .modal', function (event) {
    // Remove the src so the player itself gets removed, as this is the only
    // reliable way to ensure the video stops playing in IE
    $("#trailer-video-container").empty();
});

    //Start playing the webGame 
    //https://city-moto-racer.herokuapp.com/
$(document).on('click', '.web-game', function (event){
$("#trailer-video-container").empty().append($("<iframe></iframe>", {
        'src': 'https://city-moto-racer.herokuapp.com'
    }));
});








