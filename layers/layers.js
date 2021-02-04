var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_JatobadoPiau_2 = new ol.format.GeoJSON();
var features_JatobadoPiau_2 = format_JatobadoPiau_2.readFeatures(json_JatobadoPiau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JatobadoPiau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JatobadoPiau_2.addFeatures(features_JatobadoPiau_2);
var lyr_JatobadoPiau_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JatobadoPiau_2, 
                style: style_JatobadoPiau_2,
                interactive: false,
                title: '<img src="styles/legend/JatobadoPiau_2.png" /> Jatoba do Piauí'
            });
var format_Municpios_Piau_3 = new ol.format.GeoJSON();
var features_Municpios_Piau_3 = format_Municpios_Piau_3.readFeatures(json_Municpios_Piau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municpios_Piau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municpios_Piau_3.addFeatures(features_Municpios_Piau_3);
var lyr_Municpios_Piau_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municpios_Piau_3, 
                style: style_Municpios_Piau_3,
                interactive: false,
                title: '<img src="styles/legend/Municpios_Piau_3.png" /> Municípios_Piauí'
            });
var format_PontosdeIlulminaoeTransformadores_4 = new ol.format.GeoJSON();
var features_PontosdeIlulminaoeTransformadores_4 = format_PontosdeIlulminaoeTransformadores_4.readFeatures(json_PontosdeIlulminaoeTransformadores_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosdeIlulminaoeTransformadores_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosdeIlulminaoeTransformadores_4.addFeatures(features_PontosdeIlulminaoeTransformadores_4);
var lyr_PontosdeIlulminaoeTransformadores_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PontosdeIlulminaoeTransformadores_4, 
                style: style_PontosdeIlulminaoeTransformadores_4,
                interactive: true,
                title: '<img src="styles/legend/PontosdeIlulminaoeTransformadores_4.png" /> Pontos de Ilulminação e Transformadores'
            });

lyr_WazeWorld_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_JatobadoPiau_2.setVisible(true);lyr_Municpios_Piau_3.setVisible(true);lyr_PontosdeIlulminaoeTransformadores_4.setVisible(true);
var layersList = [lyr_WazeWorld_0,lyr_GoogleSatellite_1,lyr_JatobadoPiau_2,lyr_Municpios_Piau_3,lyr_PontosdeIlulminaoeTransformadores_4];
lyr_JatobadoPiau_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Municpios_Piau_3.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_PontosdeIlulminaoeTransformadores_4.set('fieldAliases', {'ID': 'ID', 'Rua': 'Rua', 'Bairro/Pov': 'Bairro/Pov', 'Zona Urban': 'Zona Urban', 'Zona Rural': 'Zona Rural', 'Coordenada': 'Coordenada', 'Coordena_1': 'Coordena_1', 'Observaç�': 'Observaç�', 'Luminária': 'Luminária', 'Transforma': 'Transforma', });
lyr_JatobadoPiau_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Municpios_Piau_3.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_PontosdeIlulminaoeTransformadores_4.set('fieldImages', {'ID': 'TextEdit', 'Rua': 'TextEdit', 'Bairro/Pov': 'TextEdit', 'Zona Urban': 'TextEdit', 'Zona Rural': 'TextEdit', 'Coordenada': 'TextEdit', 'Coordena_1': 'TextEdit', 'Observaç�': 'TextEdit', 'Luminária': 'TextEdit', 'Transforma': 'TextEdit', });
lyr_JatobadoPiau_2.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_Municpios_Piau_3.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_PontosdeIlulminaoeTransformadores_4.set('fieldLabels', {'ID': 'inline label', 'Ponto cole': 'no label', 'Rua': 'inline label', 'Bairro/Pov': 'inline label', 'Zona Urban': 'inline label', 'Zona Rural': 'inline label', 'Coordenada': 'no label', 'Coordena_1': 'no label', 'Altura': 'no label', 'Observaç�': 'inline label', 'Luminária': 'inline label', 'Transforma': 'inline label', });
lyr_PontosdeIlulminaoeTransformadores_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});