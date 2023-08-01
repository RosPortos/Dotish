document.addEventListener('DOMContentLoaded', function () {
    $(".select-city").select2({
        placeholder: '*עיר',
        width: '100%',
        // minimumResultsForSearch: Infinity,
        dropdownCssClass: 'select-city-dropdown'
      });
});
