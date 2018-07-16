jQuery(document).ready(function() {
    'use strict';
    var $searchInput = jQuery('#kimsFractalSearch');
    var $componentList = jQuery('.Tree-entityLink');
    //console.log($searchInput, $componentList);
    jQuery(document).on('keyup', $searchInput, function() {
        var searchQuery = $searchInput.val();
        if(searchQuery === '') {
            jQuery('.Tree-collection:not(.is-closed) > .Tree-collectionLabel').trigger('click');
            $componentList.show();
        }
        else {
            jQuery('.Tree-collection.is-closed > .Tree-collectionLabel').trigger('click');
            $componentList.each(function(i, item) { 
                var $item = jQuery(item);
                var trimmedText = $item.text().trim().toLowerCase();
                //console.log(trimmedText);
                if(trimmedText.indexOf(searchQuery.toLowerCase()) === -1) {
                    $item.hide();
                }
                else {
                    $item.show();
                }
            });
        }
    });
});