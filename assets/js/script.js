//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$('.tile').click(function () {
    // Get image inside tile element
    var img = $(this).find('img');
    // Update modal with image data
    $("#img01").attr('src', img.attr('src'));
    $("#img02").attr('src', img.attr('src'));
    $('#caption').html(img.attr('alt'));
    $('#myModal').css('display', 'block');
});

// Close modal
$('.close').click(function () {
    $('#myModal').css('display', 'none');
})