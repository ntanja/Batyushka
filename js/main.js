$(document).ready(function () {

//tooltip
    $(function () {
        $('.f-tooltip').tooltip();
    });
//fathers - change view
    $('.switch-list').click(function () {
        $('.block-fathers').hide();
        $('.list-view').show();
        $(this).addClass('active');
        $('.switch-table').removeClass('active');
    });
    $('.switch-table').click(function () {
        $('.block-fathers').show();
        $('.list-view').hide();
        $(this).addClass('active');
        $('.switch-list').removeClass('active');
    });
//show-hide more themes
    $('.theme-select').click(function () {
        $('.select-theme').toggle();
    });
    $('.close-theme').click(function () {
        $('.select-theme').hide();
    });
//show-hide more father-question page
    $('.father-select').click(function () {
        $('.question-select-father').toggle();
    });
    $('.close-theme-fathers').click(function () {
        $('.question-select-father').hide();
    });
    
//form validation
    $('#sign-in-form').validator();
});