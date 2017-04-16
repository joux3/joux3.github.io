var key = 'pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiRk1kMWZaSSJ9.E5BkluenyWQMsBLsuByrmg';

var style = createMapboxStreetsV6Style()
var map = new ol.Map({
  layers: [
    new ol.layer.VectorTile({
      renderMode: 'hybrid',
      source: new ol.source.VectorTile({
        attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
          '© <a href="https://www.openstreetmap.org/copyright">' +
          'OpenStreetMap contributors</a>',
        format: new ol.format.MVT(),
        tileGrid: ol.tilegrid.createXYZ({maxZoom: 22}),
        tilePixelRatio: 16,
        url: 'https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/' +
            '{z}/{x}/{y}.vector.pbf?access_token=' + key
      }),
      style: function(feature, resolution) {
        /*(function() {
          var start = performance.now()
          var j = 0;
          for (var i = 0; i < 10000; i++) {
            j = (j + i + 9291) / 3;
          }
        })();*/

        var res = []
        var actual = style(feature, resolution);

        /*for (var i = 0; i < 10; i++) {
          res = res.concat(actual)
        }
        return res
        */
        return actual
      }
    })
  ],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 2
  })
});

// ol.style.Fill, ol.style.Icon, ol.style.Stroke, ol.style.Style and
// ol.style.Text are required for createMapboxStreetsV6Style()
