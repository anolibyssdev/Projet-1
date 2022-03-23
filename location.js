const iconBase = "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

function initMaps() {
    var location = {lat: 48.471698761, lng: 1.01416003704};
    var local = {lat: 48.47370170214537, lng: 1.0117144356593364};
    var map = new google.maps.Map(document.getElementById("maps"), {
        zoom: 14,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP
    });
    var mark1 = new google.maps.Marker({
        position: local,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: {url: 'Wild_Code_School.png',
        scaledSize: new google.maps.Size(50, 50)
    }
    });
}

const tmp = document.getElementById("submit").addEventListener('click', no_refresh(e));

function no_refresh(e){
    e.preventDefault();
}