function initMap() {
    // Latitude et Longitude
    var myLatLng = {lat: 45.73396732391149, lng:  4.829979570478685};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 12,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Lyon, FRA' // Title Location
    });
}