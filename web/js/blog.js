$(document).ready(function ($) {
    var menu_type = $('[data-menu]').attr('data-menu') || false;

    if (menu_type) {
        $('div.blog-masthead a[data-' + menu_type + ']').addClass('active');
    }
    console.log(menu_type);
});