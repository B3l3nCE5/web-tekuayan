let map = L.map('map').setView([19.83448715192078, -98.996313696349], 15); 


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

let greenIcon = L.icon({
    iconUrl: '/tekuayan/images/tekuayan.png',
    shadowUrl: '/tekuayan/images/shadow.png',
    iconSize:     [56, 50], // tamaño del icono
    shadowSize:   [60, 60],
    iconAnchor:   [-5, 45], // punto del icono que corresponderá a la ubicación del marcador
    shadowAnchor: [0, 49],
    popupAnchor:  [-3, -76] // punto desde el que debe abrirse la ventana emergente en relación con el iconAnchor
});

L.marker([19.83448715192078, -98.996313696349], {icon: greenIcon}).addTo(map);