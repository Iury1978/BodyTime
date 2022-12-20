import gulp from "gulp";
import cssimport from "gulp-cssimport";
import gcmq from "gulp-group-css-media-queries";
gulp.task("import", function () {
  gulp
    .src("css/index.css")
    .pipe(cssimport())
    .pipe(gcmq())
    .pipe(gulp.dest("dist/"));
});
