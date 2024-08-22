export const leafletMapHtmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Leaflet Map</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <style>
    #map {
      height: 100vh;
      width: 100vw;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      var map = L.map('map').setView([6.4291, 3.4214], 13); // Initial coordinates

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      var marker = L.marker([6.428993333,  3.428453333]).addTo(map); // Initial coordinates

      // Function to update marker position
      function updateMarker(lat, lng) {
        marker.setLatLng([lat, lng]);
        map.setView([lat, lng], 13);
      }

      // Listen for messages from React Native
      window.addEventListener('message', function(event) {
        var data = JSON.parse(event.data);
        if (data.type === 'UPDATE_LOCATION') {
          updateMarker(data.latitude, data.longitude);
        }
      });
    });
  </script>
</body>
</html> 
`


export const testHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Google Maps</h1>
  <h1>Google Maps</h1>
  <h1>Google Maps</h1>
  <h1>Google Maps</h1>
  <h1>Google Maps</h1>
</body>
</html>
`