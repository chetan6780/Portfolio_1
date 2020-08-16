$(document).ready(function () {

    $('.sidenav').sidenav({
        edge: "right"
    });

    $('.parallax').parallax();

    $('.collapsible').collapsible();

    $('.slider').slider();

    $('input#input_text, textarea#textarea2').characterCounter();

    $('.materialboxed').materialbox();
});