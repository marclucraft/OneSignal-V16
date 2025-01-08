const gulp = require("gulp");
const hb = require("gulp-hb");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const connect = require("gulp-connect");
const ghPages = require("gh-pages");
const path = require("path");

// Task: Compile Handlebars templates into HTML
gulp.task("build-html", function () {
  return gulp
    .src("src/pages/*.hbs") // Process only page templates
    .pipe(
      hb()
        .partials("src/templates/base.hbs") // Load the base template
        .partials("src/templates/_*.hbs") // Load all partials (leading underscore)
    )
    .pipe(rename({ extname: ".html" }))
    .pipe(htmlmin({ collapseWhitespace: true })) // Minify HTML
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
});

// Task: Minify CSS
gulp.task("minify-css", function () {
  return gulp
    .src("src/assets/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/assets"))
    .pipe(connect.reload());
});

// Task: Minify JS
gulp.task("minify-js", function () {
  return gulp
    .src("src/assets/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/assets"))
    .pipe(connect.reload());
});

// Task: Copy other assets (images, fonts, etc.)
gulp.task("copy-assets", function () {
  return gulp
    .src(["src/assets/**/*", "!src/assets/*.css", "!src/assets/*.js"])
    .pipe(gulp.dest("dist/assets"));
});

// Task: Start a local dev server with live reload
gulp.task("server", function () {
  connect.server({ root: "dist", livereload: true });
});

// Task: Watch for changes and rebuild automatically
gulp.task("watch", function () {
  gulp.watch("src/**/*.hbs", gulp.series("build-html"));
  gulp.watch("src/assets/*.css", gulp.series("minify-css"));
  gulp.watch("src/assets/*.js", gulp.series("minify-js"));
});

// Task: Deploy to GitHub Pages
gulp.task("deploy", function (done) {
  ghPages.publish(path.join(__dirname, "dist"), function (err) {
    if (err) {
      console.error("GitHub Pages Deployment Failed:", err);
    } else {
      console.log("Deployment Successful!");
    }
    done();
  });
});

// Default task: Build everything and start server
gulp.task(
  "default",
  gulp.series(
    gulp.parallel("build-html", "minify-css", "minify-js", "copy-assets"),
    gulp.parallel("server", "watch")
  )
);
