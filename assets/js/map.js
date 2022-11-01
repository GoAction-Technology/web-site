
	mapboxgl.accessToken = 'pk.eyJ1IjoiaGV2YWxuZXJnaXoiLCJhIjoiY2w5dWFreGl2MWpxMTNvdGYwM2o4a2U5bSJ9.yrU4MeC3v9ikshuCm6YRfw';



    const map = new mapboxgl.Map({

        style: 'mapbox://styles/hevalnergiz/cl9uatjwt001015s6pq24xqi7',
        center: [27.139435, 38.429422],
        zoom: 16,
        pitch: 75,
        bearing: 0,
        container: 'map',
        antialias: true
    });

    map.on('load', () => {
     
        const layers = map.getStyle().layers;
        const labelLayerId = layers.find(
            (layer) => layer.type === 'symbol' && layer.layout['text-field']
        ).id;
        map.addSource('mapbox-dem', {
'type': 'raster-dem',
'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
'tileSize': 512,
'maxzoom': 19
});
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.9 });
        map.addLayer(
            {
                'id': 'add-3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 11,
                'paint': {
                    'fill-extrusion-color': '#004622',

                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        11,
                        0,
                        11.05,
                        ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            },
            labelLayerId
        );

    });
map.scrollZoom.disable();


