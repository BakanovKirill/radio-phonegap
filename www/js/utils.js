(function($) {

  $.fn.loadIndicator = function(text) {
    //Append loader indicator
    var loader = $('<div class="loader">'+( text? '<div>'+text+'</div>' : '' )+'</div>');
    loader.height($(this).height());
    loader.width($(this).width());
    return $(this).before(loader).addClass('ajax-loading');
  };

  $.fn.deleteIndicator = function() {
    //Erase loader indicator
    $(this).removeClass('ajax-loading').prev('div.loader').remove();
  };

})(jQuery);

function titleTracksUpdate(url) {
  $.getJSON(url, function(data){
     $.each(data, function(index, value){
       var pk = value[0];
       var text = value[1];
       $(".station_"+pk+" .current-track, #station_"+pk+" .current-track").text(text).attr('title', text);
     });
    }
  );
}

function getActiveStation(stationSelector) {
	var station = '';
	if (window.location.hash) {
    	station = $(window.location.hash+'_');
    }
    else {
    	station = $(stationSelector+'_'+$.jStorage.get("station"));
    }
    
    if (station && !station.length) {
      station = $(stationSelector).first();
    }
    
    return station;
}

$(document).ready(function() {

  if (window.PIE) {
    $('.portlet-comments .portletHeader span').each(function() {
        PIE.attach(this);
    });
    $('.portlet-comments .portletHeader span').each(function() {
        PIE.attach(this);
    });
  }

});

