function initMap(){
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });
    var labels = "ABCDFGHIJKLMNOPQRSTWXYZ";
    var locations = [
        { lat: 40.785091,lng: -73.968285},
        { lat: 40.785091,lng: -73.968285},
        { lat: 40.785091,lng: -73.968285}
    ];
    var markers = locations.map(function(location,i) {
        return new google.maps.marker({
            position: location,
            label: labels[i % labels.length]
        });
    })
}