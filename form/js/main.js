$(document).ready(function() {
    $('.js-test-list').select2();

    $('.js-title-list, .js-gender-list').select2({
        minimumResultsForSearch: -1
    });
    console.warn('hello');
});