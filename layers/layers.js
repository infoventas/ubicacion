ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32717").setExtent([777466.067388, 9207491.857183, 777594.565411, 9207558.686142]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_VENTADELOSTES_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'VENTA DE LOSTES<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/VENTADELOSTES_1.png",
            attributions: ' ',
            projection: 'EPSG:32717',
            alwaysInRange: true,
            imageExtent: [777532.921508, 9207529.967326, 777550.184436, 9207545.034720]
        })
    });
var format_ACCESO_2 = new ol.format.GeoJSON();
var features_ACCESO_2 = format_ACCESO_2.readFeatures(json_ACCESO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_ACCESO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACCESO_2.addFeatures(features_ACCESO_2);
var lyr_ACCESO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACCESO_2, 
                style: style_ACCESO_2,
                popuplayertitle: 'ACCESO',
                interactive: true,
                title: '<img src="styles/legend/ACCESO_2.png" /> ACCESO'
            });
var format_SEALIZACION_3 = new ol.format.GeoJSON();
var features_SEALIZACION_3 = format_SEALIZACION_3.readFeatures(json_SEALIZACION_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_SEALIZACION_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEALIZACION_3.addFeatures(features_SEALIZACION_3);
var lyr_SEALIZACION_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEALIZACION_3, 
                style: style_SEALIZACION_3,
                popuplayertitle: 'SEÑALIZACION',
                interactive: true,
                title: '<img src="styles/legend/SEALIZACION_3.png" /> SEÑALIZACION'
            });
var format_REFERENCIAS_4 = new ol.format.GeoJSON();
var features_REFERENCIAS_4 = format_REFERENCIAS_4.readFeatures(json_REFERENCIAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_REFERENCIAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REFERENCIAS_4.addFeatures(features_REFERENCIAS_4);
var lyr_REFERENCIAS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REFERENCIAS_4, 
                style: style_REFERENCIAS_4,
                popuplayertitle: 'REFERENCIAS',
                interactive: true,
                title: '<img src="styles/legend/REFERENCIAS_4.png" /> REFERENCIAS'
            });
var format_LINEA_5 = new ol.format.GeoJSON();
var features_LINEA_5 = format_LINEA_5.readFeatures(json_LINEA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_LINEA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LINEA_5.addFeatures(features_LINEA_5);
var lyr_LINEA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LINEA_5, 
                style: style_LINEA_5,
                popuplayertitle: 'LINEA',
                interactive: true,
                title: '<img src="styles/legend/LINEA_5.png" /> LINEA'
            });
var format_LOTESENVENTA_6 = new ol.format.GeoJSON();
var features_LOTESENVENTA_6 = format_LOTESENVENTA_6.readFeatures(json_LOTESENVENTA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_LOTESENVENTA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTESENVENTA_6.addFeatures(features_LOTESENVENTA_6);
var lyr_LOTESENVENTA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTESENVENTA_6, 
                style: style_LOTESENVENTA_6,
                popuplayertitle: 'LOTES EN VENTA',
                interactive: true,
                title: '<img src="styles/legend/LOTESENVENTA_6.png" /> LOTES EN VENTA'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_VENTADELOSTES_1.setVisible(true);lyr_ACCESO_2.setVisible(true);lyr_SEALIZACION_3.setVisible(true);lyr_REFERENCIAS_4.setVisible(true);lyr_LINEA_5.setVisible(true);lyr_LOTESENVENTA_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_VENTADELOSTES_1,lyr_ACCESO_2,lyr_SEALIZACION_3,lyr_REFERENCIAS_4,lyr_LINEA_5,lyr_LOTESENVENTA_6];
lyr_ACCESO_2.set('fieldAliases', {'id': 'id', });
lyr_SEALIZACION_3.set('fieldAliases', {'id': 'id', });
lyr_REFERENCIAS_4.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', });
lyr_LINEA_5.set('fieldAliases', {'id': 'id', 'MEDIDA_ML': 'MEDIDA_ML', });
lyr_LOTESENVENTA_6.set('fieldAliases', {'id': 'id', 'LOTE': 'LOTE', 'AREA_M2': 'AREA_M2', 'PERIMET_ML': 'PERIMET_ML', 'PRECIOxM2': 'PRECIOxM2', });
lyr_ACCESO_2.set('fieldImages', {'id': 'TextEdit', });
lyr_SEALIZACION_3.set('fieldImages', {'id': 'TextEdit', });
lyr_REFERENCIAS_4.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_LINEA_5.set('fieldImages', {'id': 'TextEdit', 'MEDIDA_ML': 'TextEdit', });
lyr_LOTESENVENTA_6.set('fieldImages', {'id': 'TextEdit', 'LOTE': 'TextEdit', 'AREA_M2': 'Range', 'PERIMET_ML': 'Range', 'PRECIOxM2': 'Range', });
lyr_ACCESO_2.set('fieldLabels', {'id': 'no label', });
lyr_SEALIZACION_3.set('fieldLabels', {'id': 'no label', });
lyr_REFERENCIAS_4.set('fieldLabels', {'id': 'hidden field', 'NOMBRE': 'inline label - visible with data', });
lyr_LINEA_5.set('fieldLabels', {'id': 'hidden field', 'MEDIDA_ML': 'inline label - always visible', });
lyr_LOTESENVENTA_6.set('fieldLabels', {'id': 'hidden field', 'LOTE': 'inline label - visible with data', 'AREA_M2': 'inline label - always visible', 'PERIMET_ML': 'hidden field', 'PRECIOxM2': 'inline label - always visible', });
lyr_LOTESENVENTA_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});