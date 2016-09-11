// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require materialize-sprockets

$(document).ready(function (){

    function initialize() {
      var myLatLng = { lat: 49.2848468, lng: -123.1161113 };
      var mapOptions = {
      center: myLatLng,
      zoom: 16,
      scrollwheel: false
      };

      var map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);
      var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.DROP
      });

      var contentString = '<h6>Bertoldi &amp Co.</h6>';
      var infoWindow = new google.maps.InfoWindow({
        content: contentString
      });

      marker.addListener('click', function() {
            infoWindow.open(map, marker);
      });

    }

    google.maps.event.addDomListener(window, 'load', initialize);
});
