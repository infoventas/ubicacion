var size = 0;
var placement = 'point';

var style_LINEA_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#01fff2";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("MEDIDA_ML") !== null) {
        labelText = String(feature.get("MEDIDA_ML"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(20,234,254,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
