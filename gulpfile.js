var gulp    = require ('gulp')
    , sass  = require ('gulp-sass')
    , clean = require ('gulp-clean'),
    browserSync = require('browser-sync');

gulp.task('clean', function(){
    return gulp.src('dist')
        .pipe(clean());
})

gulp.task('copy', ['clean'], function(){
    gulp.src([
        'src/components/bootstrap/css/**/*', 
        'src/components/bootstrap/js/**/*', 
        'src/components/font-awesome/css/**/*',
        'src/components/font-awesome/webfonts/**/*',
        'src/components/fonts/**/*',
        'src/css/**/*', 
        'src/js/**/*', 
        'src/images/**/*', 
        'src/*.html'
    ], {"base": "src"})
        .pipe(gulp.dest('dist'))
})

gulp.task('sass', function(){
    gulp.src('./src/sass/**/*.scss') 
        .pipe(sass()) 
        .pipe(gulp.dest('./dist/css/')); 
})

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })

    gulp.watch('./dist/**/*').on('change', browserSync.reload)

    gulp.watch('./src/**/*').on('change', browserSync.reload)

    gulp.watch('./src/sass/**/*.scss', ['sass'])
})
