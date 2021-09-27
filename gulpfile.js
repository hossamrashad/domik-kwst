// -- انشاء المشروع
// = mkdir Project-Name
// -- هو قالب المشروع بتاعك اللى بيكون فية كل معلومات
// = npm init
// -- تنزيل الجالب جلوبال فى النظام
// = npm i gulp -g
// -- تنزيل الجالب فى المشروع
// = npm i --save-dev gulp
// todo Make Folder => dist & project
// todo Make File => gulpfile.js
// explain Inside gulpfile.js
var gulp = require("gulp");

// ++ بلاجان لدامج الملفات
// = npm install --save-dev gulp-concat
var concat = require("gulp-concat");

// -- هى خاصة بى البرفكسار الخاصة للمتصفحات فى خواص الس اس 3
// = npm install --save-dev gulp-autoprefixer
var autoprefixer = require("gulp-autoprefixer");

// -- بلاجان خاص بى تشغيل الساس
// = npm install sass gulp-sass --save-dev
var sass = require("gulp-sass")(require("sass"));

// -- تنزيل الجالب
// = npm i gulp-pug --save-dev
var pug = require("gulp-pug");

// -- لوكال سايرفار
// = npm i static-server -save

// -- اضافة الليف رايلود
// = npm install --save-dev gulp-livereload
// = script(src="http://localhost:35729/livereload.js")
var livereload = require("gulp-livereload");

// --اضافة خاصة بى الماب فى تاسك السي اس اس علشان تعملك خريطة للملف اللى مكتوب فية
// = npm i gulp-sourcemaps --save-dev
var sourcemaps = require("gulp-sourcemaps");

// -- اضافه بتضغاط ملاف الجافا اسكربت
// = npm install --save-dev gulp-uglify
var uglify = require("gulp-uglify");

// -- اضافة تنبية بى انو التاسك خالص
// = npm i gulp-notify --save-dev
var notify = require("gulp-notify");

// -- اضافة خاصة بى ضغط الصوار
// = npm install --save-dev gulp-imagemin
// var imagemin = require("gulp-imagemin");

// -- اضافة لعمال المشروع مضغوط
// = npm install --save-dev gulp-zip
var zip = require("gulp-zip");

// =============================== Task Html =============================== //
gulp.task("html", function () {
  return gulp
    .src("project/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(livereload())
    .pipe(notify("Html Task Is Done"));
});

// =============================== Task Scss =============================== //
gulp.task("scss", function () {
  return gulp
    .src(["project/scss/*.scss", "!project/scss/homepage.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(concat("style.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss Task Is Done"));
});

gulp.task("scss-style-ar", function () {
  return gulp
    .src(["project/scss/style-ar.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss Style Ar Task Is Done"));
});

gulp.task("scss-homepage", function () {
  return gulp
    .src(["project/scss/homepage.scss", "project/scss/homepage-ar.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss Homepage Task Is Done"));
});
gulp.task("scss-blog", function () {
  return gulp
    .src(["project/scss/blog.scss", "project/scss/blog-ar.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss blog Task Is Done"));
});
gulp.task("scss-about", function () {
  return gulp
    .src(["project/scss/about.scss", "project/scss/about-ar.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss About Task Is Done"));
});
gulp.task("scss-category", function () {
  return gulp
    .src(["project/scss/category.scss", "project/scss/category-ar.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss category Task Is Done"));
});
gulp.task("scss-contact", function () {
  return gulp
    .src(["project/scss/contact.scss", "project/scss/contact-ar.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss contact Task Is Done"));
});
gulp.task("scss-portfolio", function () {
  return gulp
    .src(["project/scss/portfolio.scss", "project/scss/portfolio-ar.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss portfolio Task Is Done"));
});
gulp.task("scss-project", function () {
  return gulp
    .src(["project/scss/project.scss", "project/scss/project-ar.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss project Task Is Done"));
});
gulp.task("scss-project-single", function () {
  return gulp
    .src([
      "project/scss/project-single.scss",
      "project/scss/project-single-ar.scss",
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 20 versions"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss project single Task Is Done"));
});
// ============================== Task Jquery ============================== //
gulp.task("JQueryTools", function () {
  return gulp
    .src("project/js/JQueryTools/*.*")
    .pipe(concat("JQueryTools.js"))
    .pipe(gulp.dest("dist/js/JQueryTools"))
    .pipe(uglify())
    .pipe(livereload())
    .pipe(notify("jquery Task Is Done"));
});

// ============================= Task js ================================= //
gulp.task("js", function () {
  return gulp
    .src("project/js/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("js.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js/js"))
    .pipe(notify("Js Task Is Done"))
    .pipe(livereload());
});

// ============================= Task Es6 =============================== //
gulp.task("es6", function () {
  return gulp
    .src("project/js/es6/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("es6.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js/es6"))
    .pipe(notify("ES6 Task Is Done"))
    .pipe(livereload());
});

// ============================= Task vue =============================== //
gulp.task("vue", function () {
  return gulp
    .src("project/js/vue/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("vue-app.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js/vue"))
    .pipe(notify("Vue App Task Is Done"))
    .pipe(livereload());
});

// =============================== Task react =============================== //
gulp.task("react", function () {
  return gulp
    .src("project/js/react/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("react-app.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js/react"))
    .pipe(notify("React App Task Is Done"))
    .pipe(livereload());
});

// ============================== Libs Css Task ================================ //
gulp.task("libs-css", function () {
  return gulp
    .src("project/libs-css/**/*")
    .pipe(gulp.dest("dist/css/libs"))
    .pipe(livereload())
    .pipe(notify("Libs Css Task Is Done"));
});

// =========================== Libs Js Task =================================== //
gulp.task("libs-js", function () {
  return gulp
    .src("project/libs-js/**/*.*")
    .pipe(gulp.dest("dist/js/libs"))
    .pipe(livereload())
    .pipe(notify("Libs Js Task Is Done"));
});

// ============================== Images Task ================================ //
gulp.task("compressImages", function () {
  return (
    gulp
      .src("project/images/**/*")
      // .pipe(imagemin({ progressive: true }))
      .pipe(notify("Images Task Is Done"))
      .pipe(gulp.dest("dist/images"))
  );
});

// =============================== Zip Compress Files =============================== //
gulp.task("compress", function () {
  return gulp
    .src("dist/**/*.*")
    .pipe(zip("Finance-Company.zip"))
    .pipe(gulp.dest("."))
    .pipe(notify("Files Is Compressed To Zip "));
});

// ============================ Task watch ================================== //
gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  // = Html
  gulp.watch("project/pug/**/*.pug", gulp.series("html"));
  // = Css
  gulp.watch("project/scss/**/*.scss", gulp.series("scss"));
  gulp.watch(["project/scss/style-ar.scss"], gulp.series("scss-style-ar"));
  gulp.watch(
    ["project/scss/homepage.scss", "project/scss/homepage-ar.scss"],
    gulp.series("scss-homepage")
  );
  gulp.watch(
    ["project/scss/blog.scss", "project/scss/blog-ar.scss"],
    gulp.series("scss-blog")
  );
  gulp.watch(
    ["project/scss/about.scss", "project/scss/about-ar.scss"],
    gulp.series("scss-about")
  );
  gulp.watch(
    ["project/scss/category.scss", "project/scss/category-ar.scss"],
    gulp.series("scss-category")
  );
  gulp.watch(
    ["project/scss/contact.scss", "project/scss/contact-ar.scss"],
    gulp.series("scss-contact")
  );
  gulp.watch(
    ["project/scss/portfolio.scss", "project/scss/portfolio-ar.scss"],
    gulp.series("scss-portfolio")
  );
  gulp.watch(
    ["project/scss/project.scss", "project/scss/project-ar.scss"],
    gulp.series("scss-project")
  );
  gulp.watch(
    ["project/scss/project-single.scss", "project/scss/project-single-ar.scss"],
    gulp.series("scss-project-single")
  );
  gulp.watch("project/libs-css/**/*", gulp.series("libs-css"));
  // = Javascript
  gulp.watch("project/libs-js/**/*", gulp.series("libs-js"));
  gulp.watch("project/js/js/**/*.js", gulp.series("js"));
  gulp.watch("project/js/JQueryTools/*.*", gulp.series("JQueryTools"));
  gulp.watch("project/js/es6/**/*.js", gulp.series("es6"));
  gulp.watch("project/js/vue/**/*.js", gulp.series("vue"));
  gulp.watch("project/js/react/**/*.js", gulp.series("react"));
  // = Images
  gulp.watch("project/images/**/*", gulp.series("compressImages"));
  // = Zip
  gulp.watch("dist/**/*.*", gulp.series("compress"));
  // gulp.watch("dist/**/*.*", gulp.series("deploy"));
});
// = Default
// gulp.task("default", ["watch"]);
gulp.task("default", gulp.series("watch"));
