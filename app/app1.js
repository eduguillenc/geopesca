/* Basemap Layers */
	    var attrib = " MinPesca 2022";
	    var osm = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: attrib + "|<a href='http://www.openstreetmap.org/#map=2/23.9/-6.0&layers=C'>Mapa OpenStreet</a>"});
        var topo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {attribution: attrib + "|<a href='http://thunderforest.com/'>Maps for Apps</a>"}); 
        var gray = L.tileLayer("http://basemaps.cartocdn.com/light_all/%7Bz%7D/%7Bx%7D/%7By%7D.png", {attribution: attrib + "|<a href='http://www.openstreetmap.org/#map=2/23.9/-6.0&layers=C'>Mapa OpenStreet</a>"}); 
        var terrain = new L.StamenTileLayer("terrain");


//MAPA CONFIG
	    var mapa = L.map('map', {crs: L.CRS.EPSG3857 , 
			    center: [7.406, -65.984], 
			    maxZoom: 8, 
			    minZoom: 3, 
			    zoom: 6,
			    attributionControl: true,
          //fullscreenControl: true,
			    zoomControl:false 
        });
	    var bounds = [[0.644045387225,-73.3793879998],[12.1979113972,-58.145981]];
	    var overlayerlim = new L.ImageOverlay("images/lim.png", bounds, { opacity: 0.6}).addTo(mapa);
    ;

    // COMPESQUERAS
      function colorp(d) {
        return d > 100 ? '#67000d' :
               d > 70 ? '#a50f15' :
               d > 50 ? '#cb181d' :
               d > 30 ? '#ef3b2c' :
               d >  20 ? '#fb6a4a' :
               d >  5 ? '#fc9272' :
	                '#ffffff';
          }	    

      function compesquerasInfo(feature, layer) {
        var content = "<table class='table table-striped table-bordered table-condensed'>" +
	      "<tr><th>Estado</th><td>" + feature.properties.ENTIDAD + "</td></tr>" + 
	      "<tr><th>Comunidades Pesqueras</th><td>" + feature.properties.COM_PESQUE + "</td></tr>" + 
	      "<tr><video width='100%' height='100%' poster='images/loading.svg' type='video/mp4' src='videos/" + feature.properties.ENTIDAD + ".mp4'autoplay loop></video></tr></table>";
	    var popupContent = "Comunidades Pesqueras: ";
	    if (feature.properties && feature.properties.COM_PESQUE) {
	      popupContent += content;
	    } else {
	      popupContent += 0; 
	    }
	    layer.bindPopup(popupContent);
          }	    	    
	        
          var compesquerasLayer = L.geoJson(compesqueras, {
            style: function (feature) {
	      return {
	        weight: 2,
	        opacity: 0.5,
	        color: 'black',
	        dashArray: '2',
	        fillOpacity: 0.9,		  
                fillColor: colorp(feature.properties.COM_PESQUE)
              };
            },
	          
	    onEachFeature: compesquerasInfo
          })
          //compesquerasLayer.addTo(mapa);
	        

    // ZDESCARGAS
      function colorz(d) {
		    return d > 100 ? '#00bfff' :
			    d > 70 ? '#61c9ff' :
			    d > 50 ? '#8ad4ff' :
			    d > 30 ? '#abdfff' :
			    d >  20 ? '#c9e9ff' :
			    d >  5 ? '#e5f4ff' :
					    '#ffffff';
		    }   
      function zdescargasInfo(feature, layer) {
        var content = "<table class='table table-striped table-bordered table-condensed'>" +
	      "<tr><th>Estado</th><td>" + feature.properties.ENTIDAD + "</td></tr>" + 
	      "<tr><th>Zona de Descargas: </th><td>" + feature.properties.Z_DESCARGA + "</td></tr>" + 
	      "<tr><video width='100%' height='100%' poster='images/loading.svg' type='video/mp4' src='videos/" + feature.properties.ENTIDAD + ".mp4'autoplay loop></video></tr></table>";
	    var popupContent = "Zonas de Descarga: ";
	    if (feature.properties && feature.properties.Z_DESCARGA) {
	      popupContent += content;
	    } else {
	      popupContent += 0; 
	    }
	    layer.bindPopup(popupContent);
          }	    	    
	        
          var zdescargasLayer = L.geoJson(zdescargas, {
            style: function (feature) {
	      return {
	        weight: 2,
	        opacity: 0.5,
	        color: 'black',
	        dashArray: '2',
	        fillOpacity: 0.9,		  
                fillColor: colorz(feature.properties.Z_DESCARGA)
              };
            },
	          
	    onEachFeature: zdescargasInfo
          })
          zdescargasLayer.addTo(mapa);


	map.on("hover", function (feature, layer) { 
    layer.on({
  		    'mouseover': function (e) {
  		      highlight(e.target);
  		    },
  		    'mouseout': function (e) {
  		      dehighlight(e.target);
  		    },
  				'click': function (e) {
  				  select(e.target);
  				}
  			});
	});

    // TEXPORT 
      function colort(d) {
        return d > 3000 ? '#ffd700' :
               d > 2000 ? '#ffdd4c' :
               d > 500 ? '#ffe474' :
               d > 100 ? '#ffea98' :
               d >  50 ? '#fff1ba' :
               d >  10 ? '#fff8dd' :
	                '#ffffff';
          }	 
        function texportInfo(feature, layer) {
        var content = "<table class='table table-striped table-bordered table-condensed'>" +
	      "<tr><th>Pais</th><td>" + feature.properties.PA??S + "</td></tr>" + 
	      "<tr><th>Toneladas: </th><td>" + feature.properties.IMPORT_TON + "</td></tr>" + 
	      "<tr><video width='100%' height='100%' poster='images/loading.svg' type='video/mp4' src='videos/" + feature.properties.ENTIDAD + ".mp4'autoplay loop></video></tr></table>";
	    var popupContent = "Exportado";
	    if (feature.properties && feature.properties.IMPORT_TON) {
	      popupContent += content;
	    } else {
	      popupContent += 0; 
	    }
	    layer.bindPopup(popupContent);
          }	    	    
	        
          var texportLayer = L.geoJson(texport, {
            style: function (feature) {
	      return {
	        weight: 2,
	        opacity: 0.5,
	        color: 'black',
	        dashArray: '2',
	        fillOpacity: 0.9,		  
                fillColor: colort(feature.properties.IMPORT_TON)
              };
            },
	          
	    onEachFeature: texportInfo
          })
          //texportLayer.addTo(mapa);

//LAYER CONTROL
        var baseLayers = {
            "Mapamundi": terrain,
            //"Gris": gray
        };
        var overlays = {
            "<img src='images/ico.svg' width='30' height='30' /> Comunidades Pesqueras": compesquerasLayer,
            "<img src='images/cangrejo.png' width='30' height='30' /> Zonas de Descarga": zdescargasLayer,
            //"<img src='images/export.svg' width='30' height='20' /> Paises Importadores": texportLayer
        };
        L.control.layers(baseLayers, overlays,{collapsed:false}).addTo(mapa);	  
        //L.control.mousePosition().addTo(mapa);
	      //L.control.scale({options: {position:'topleft',maxWidth: 100,metric: true,imperial: true,updateWhenIdle: true}}).addTo(mapa)
        terrain.addTo(mapa);   

/* Layer control zoom  */

		function highlight (layer) {
			layer.setStyle({
				weight: 5,
				dashArray: ''
			});
			if (!L.Browser.ie && !L.Browser.opera) {
				layer.bringToFront();
			}
		}

		function dehighlight (layer) {
		  if (selected === null || selected._leaflet_id !== layer._leaflet_id) {
			  geojson.resetStyle(layer);
		  }
		}

		function select (layer) {
		  if (selected !== null) {
		    var previous = selected;
		  }
			map.fitBounds(layer.getBounds());
			selected = layer;
			if (previous) {
			  dehighlight(previous);
			}
		}
    var selected = null;

    mapa.on('zoomend', function () {
        if (mapa.getZoom() >= 5 && mapa.hasLayer(texportLayer)) {
            mapa.removeLayer(texportLayer);
            }
        if (mapa.getZoom() <= 4 && !mapa.hasLayer(texportLayer)) {
            mapa.addLayer(texportLayer)
        }
    }); 
