let latitude=16.8583, longitude=74.5659;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibWFuaXNoMjIxMjIwMDgiLCJhIjoiY2wyOTIzazVrMDAwMjNkbzRjbWs1eWY1ZiJ9._gzDgub6s7fYFuF7xN6LOA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 16                                                      
});   

map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: false
	})
);

map.addControl(
	new MapboxDirections({
		accessToken: mapboxgl.accessToken
	}),
	'top-left'
);





var Image1 =document.querySelector("#Sangli")
var marker1 = new mapboxgl.Marker({ element: Image1 }) 
.setLngLat([74.5659,16.8583])  
.addTo(map);



var Image2 =document.querySelector("#Amrai")
var marker2 = new mapboxgl.Marker({ element: Image2 }) 
.setLngLat([74.5728098001,16.8661088501]) 
.addTo(map);