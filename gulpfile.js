var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });

    gulp.watch("src/*.html").on("change", browserSync.reload);
    gulp.watch("src/css/*.css").on("change", browserSync.reload);
    gulp.watch("src/js/*.js").on("change", browserSync.reload);
});