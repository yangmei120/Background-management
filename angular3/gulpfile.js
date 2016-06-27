var gulp = require('gulp');
var connect = require('gulp-connect');
var respond = require('gulp-respond');
var fs = require('fs')

function getParams(url) {
	var paramsObj = {};
	var paramsArr = url.split('?')[1] ? url.split('?')[1].split('&') : [];
	paramsArr.forEach(function(item) {
		paramsObj[item.split('=')[0]] = item.split('=')[1];
	});
	return paramsObj;
}

gulp.task('connect', function() {
	var params = {};
	// 启动本地server
	connect.server({
		// 多个root目录
		root: ['src', './bower_components'],
		port: 8008,
		livereload: true,
		// 本地server中间件，完成本地动态编译
		middleware: function () {
			return [function (req, res, next) {
				var path = req.url.split('?').shift();
				path = path == '/' ? '/index.html' : path;
				// 获取运行时参数
				if (path.indexOf('index.html') > -1) {
					params = getParams(req.url);
				}
				url = 'src' + path;
				if (!fs.existsSync(url)) {
					url = 'bower_components' + path;
				}
				console.log(url)
				gulp.src(url)
				.pipe(respond(res));
				
						
			}];
		}
	});
});
 gulp.task('default',function() {
        gulp.start('connect'); 
　　});