/*
 * crossdomainlinking
 * 
 *
 * Copyright (c) 2013 Gonzalo Ruiz de Villa
 * Licensed under the MIT license.
 */

(function ($) {


  // Collection method.
  $.fn.crossdomainlinking = function (_domains) {
    var domains = $.crossdomainlinking.domains || _domains;
    if (!domains || !domains.length) {
      return this;
    }
    return this.each(function () {
      $(this).find("a").each(function() {
        if ($.inArray(this.hostname, domains) > -1) {
          $(this).on("click", function (event){
            _gaq.push(['_link', this.href]);
            event.preventDefault();
          });
        }
      });
    });
  };

  $.crossdomainlinking = {};

}(jQuery));
