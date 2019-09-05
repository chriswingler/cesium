define([
    './BillboardGraphics',
    './CompositePositionProperty',
    './ModelGraphics',
    './SampledPositionProperty',
    './SampledProperty',
    './ScaledPositionProperty',
    './RectangleGraphics',
    '../Core/Cartesian2',
    '../Core/Cartesian3',
    '../Core/Cartographic',
    '../Core/Color',
    '../Core/createGuid',
    '../Core/defaultValue',
    '../Core/defined',
    '../Core/defineProperties',
    '../Core/DeveloperError',
    '../Core/Ellipsoid',
    '../Core/isArray',
    '../Core/Iso8601',
    '../Core/JulianDate',
    '../Core/Math',
    '../Core/Rectangle',
    '../Core/ReferenceFrame',
    '../Core/Resource',
    '../Core/RuntimeError',
    '../Core/TimeInterval',
    '../Core/TimeIntervalCollection',
    '../Scene/HeightReference',
    '../Scene/HorizontalOrigin',
    '../Scene/VerticalOrigin',
    '../ThirdParty/when',
    '../ThirdParty/zip'
], function(
    BillboardGraphics,
    CompositePositionProperty,
    ModelGraphics,
    SampledPositionProperty,
    SampledProperty,
    ScaledPositionProperty,
    RectangleGraphics,
    Cartesian2,
    Cartesian3,
    Cartographic,
    Color,
    createGuid,
    defaultValue,
    defined,
    defineProperties,
    DeveloperError,
    Ellipsoid,
    isArray,
    Iso8601,
    JulianDate,
    CesiumMath,
    Rectangle,
    ReferenceFrame,
    Resource,
    RuntimeError,
    TimeInterval,
    TimeIntervalCollection,
    HeightReference,
    HorizontalOrigin,
    VerticalOrigin,
    when,
    zip
) {
    'use strict';

    /**
     * Exports an EntityCollection as a KML document. Only Point, Billboard, Model, Path, Polygon, Polyline geometries
     * will be exported. Note that there is not a 1 to 1 mapping of Entity properties to KML Feature properties. For
     * example, entity properties that are time dynamic but cannot be dynamic in KML are exported with their values at
     * options.time or the beginning of the EntityCollection's time interval if not specified. For time-dynamic properties
     * that are supported in KML, we use the samples if it is a {@link SampledProperty} otherwise we sample the value using
     * the options.sampleDuration. Point, Billboard, Model and Path geometries with time-dynamic positions will be exported
     * as gx:Track Features. Not all Materials are representable in KML, so for more advanced Materials just the primary
     * color is used. Canvas objects are exported as PNG images.
     *
     * @exports exportCzml
     *
     * @param {Object} options An object with the following properties:
     * @param {EntityCollection} options.entities The EntityCollection to export as KML.
     * @param {Ellipsoid} [options.ellipsoid=Ellipsoid.WGS84] The ellipsoid for the output file.
     * @param {exportKml~ModelCallback} [options.modelCallback] A callback that will be called with a {@link ModelGraphics} instance and should return the URI to use in the KML. Required if a model exists in the entity collection.
     * @param {JulianDate} [options.time=entities.computeAvailability().start] The time value to use to get properties that are not time varying in KML.
     * @param {TimeInterval} [options.defaultAvailability=entities.computeAvailability()] The interval that will be sampled if an entity doesn't have an availability.
     * @param {Number} [options.sampleDuration=60] The number of seconds to sample properties that are varying in KML.
     * @param {Boolean} [options.kmz=false] If true KML and external files will be compressed into a kmz file.
     *
     * @returns {Promise<Object>} A promise that resolved to an object containing the KML string and a dictionary of external file blobs, or a kmz file as a blob if options.kmz is true.
     * @demo {@link https://cesiumjs.org/Cesium/Apps/Sandcastle/index.html?src=Export%20KML.html|Cesium Sandcastle KML Export Demo}
     * @example
     * Cesium.exportCzml({
     *      entities: entityCollection
     *  })
     *   .then(function(result) {
     *     // The XML string is in result.kml
     *
     *     var externalFiles = result.externalFiles
     *     for(var file in externalFiles) {
     *       // file is the name of the file used in the KML document as the href
     *       // externalFiles[file] is a blob with the contents of the file
     *     }
     *   });
     *
     */
    function exportCzml() {
        console.log('hey');
    }

    return exportCzml;
});
