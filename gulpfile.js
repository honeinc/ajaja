'use strict';

var gulp = require( 'gulp' );

var bundle = require( './gulp/bundle' );

var getPackageInfo = function() {
    var version = require( './package.json' ).version;
    var name = require( './package.json' ).name;
    return {
        name: name,
        version: version
    };
};

gulp.task( 'bundle', function() {
    var packageInfo = getPackageInfo();
    bundle( {
        file: './index.js',
        name: packageInfo.name,
        output: './build/' + packageInfo.name + '-' + packageInfo.version + '.js',
        sourceMaps: true,
        minify: true,
        debug: true,
        expose: true
    } );
} );

gulp.task( 'default', [ 'bundle' ] );