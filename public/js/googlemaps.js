var map;
async function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 1
    });

    const response = await fetch(`${window.location.protocol}/users/locations`);

    const myJson = await response.json();
    myJson.forEach(function (element) {
        var lat = parseFloat(element.Lat);
        var lng = parseFloat(element.lng);
        var username = element.username;
        var myLatlng = { lat: lat, lng: lng };
        console.log(myLatlng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: username,
            animation: google.maps.Animation.DROP
        });
    });
}