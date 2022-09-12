const { notify } = require("browser-sync");
const { dest, src, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const browsersync = require("browser-sync").create();
// Sass Task

function scssTask() {
  return src("src/scss/**/*.scss").pipe(sass()).pipe(dest("dist/css"));
}

// JS task

function jsTask() {
  return src("src/index.js").pipe(uglify()).pipe(dest("dist/js/"));
}
// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
    notify: false,
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("*.html", browsersyncReload);
  watch(["src/index.js"], series(jsTask, browsersyncReload));
  watch(["src/scss/**/*.scss"], series(scssTask, browsersyncReload));
}

// Default Gulp task
exports.default = series(scssTask, jsTask, browsersyncServe, watchTask);
