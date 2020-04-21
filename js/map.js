function initMap(){
  var el = document.getElementById('container');
  var myLocation = new google.maps.LatLng(41.831395, -87.627228);
  var mapOptions = {
    center: myLocation,
    zoom: 19,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.DROP,
    icon: 'IIT-Icon.png'
  });

  var contentString = '<h1>IIT Tower</h1>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(myMap, marker);
  });

}

google.maps.event.addDomListener(window, 'load', initMap);