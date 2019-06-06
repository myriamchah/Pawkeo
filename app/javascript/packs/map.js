import { autocomplete } from '../components/autocomplete';

const mapElement = document.getElementById('map');
if (mapElement) {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.864848, lng: 2.379853},
    zoom: 8,
    disableDefaultUI: true,
    styles: [
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "saturation": -10
          },
          {
            "lightness": -65
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 15
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          },
          {
            "lightness": 17
          }
        ]
      }
    ]
  });
  const image = {
    url: 'https://res.cloudinary.com/dposbbt0s/image/upload/v1559813309/mini-pin_gnqp3e.svg',
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(32, 32)
  };
  const markers = JSON.parse(mapElement.dataset.markers);
  markers.forEach((marker) => {
    new google.maps.Marker({ position: new google.maps.LatLng(marker.lat, marker.lng), icon: image, map: map });
  });
  
  const car = {
    url: 'https://png.pngtree.com/svg/20170825/fca5fbda9c.svg',
    // size: new google.maps.Size(64, 64),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(96, 96)
  };
  
  const marker = new google.maps.Marker({ position: new google.maps.LatLng(48.864848, 2.379853), icon: car, map: map });

  if (navigator.geolocation) { 
    navigator.geolocation.watchPosition(function(position) {
      map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
      marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    }); 
  } 
  else {
    alert('Your browser does not support geolocation');
  } 
};

autocomplete();
