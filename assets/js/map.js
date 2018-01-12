
function initMap() {
  var uluru = { lat: -25.363, lng: 131.044 };
  var pinLocation = uluru;
    var map = new google.maps.Map(document.getElementById('map-section'), {
      zoom: 4,
      center: pinLocation
    });
    var marker = new google.maps.Marker({
      position: pinLocation,
      map: map
    });
}
