/**
 * Created by PK on 7/4/2015.
 */
var gulp=require('gulp');
var uglify=require('gulp-uglify');
var ts=require('gulp-typescript');
/*gulp.task('hello',function(){
    console.log('hello');
});

gulp.task('world',['hello'],function()
{
    console.log('world');
});*/

gulp.task('task1',function(){
    console.log('this is task 1');
});

gulp.task('task2',function(){
    console.log('this is task 2');
});

gulp.task('task3',['task1','task2'],function(){
    console.log('this is task 3');
});

gulp.task('runall',['task3'],function(){
    console.log("run all tasks");
});
gulp.task('copytxt',function(){
   gulp.src('source/*.txt')
    .pipe(gulp.dest('destination/'));
});
gulp.task('copyjs',function(){
    gulp.src('source/!*.js')
        .pipe(gulp.dest('destination/'));
});
gulp.task('minify',function()
{
    gulp.src('source/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('destination/'));
});
gulp.task('transpiler',function(){
    gulp.src('source/*.ts').pipe(ts({
        target: 'ES6',
        declarationFiles: false,
        logErrors: true,
        noExternalResolve: true
    })).pipe(gulp.dest('destination/'));
});
gulp.task('default',function(){
    gulp.watch('source/*.ts',['transpiler']);
});
