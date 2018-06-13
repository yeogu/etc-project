var map;
function initMap() { // 대한민국 중심
  //var center = {lat: 37.5647689, lng: 126.7093709};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(37.55615726813202,126.97069409811479),
    //"https://maps.googleapis.com/maps/api/place/textsearch/output?"+"",
    mapTypeId: 'roadmap'
  });

  var features = [
    {position: new google.maps.LatLng(37.55615726813202, 126.97069409811479)},
    {position: new google.maps.LatLng(37.55715726813202, 126.97069409811479)},
    ];

  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      map: map
    });
  });
}
