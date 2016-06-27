// // 加 md5
// fis.match('*.{js,css.png}',{
// useHash:true
// });
// // 启用 fis-spriter-csssprites 插件
// fis.match('::package',{

// 	spriter:fis.plugin('csssprites')
// });
// // 对 CSS 进行图片合并
// fis.match('*.css',{useSprite:true});


// fis.match('js/index.js',{
// 	// fis-optimizer-uglify-js 插件进行压缩
// 	optimizer:fis.plugin('uglify-js')

// });
// fis.match('css/index.js',{
// 	 // fis-optimizer-clean-css 
// 	optimizer:fis.plugin('clean-css')

// });

// fis.match('img/*.png',{
// 	 // fis-optimizer-png-compressor 插件进行压缩
// 	optimizer:fis.plugin('png-compressor')
// });
// // 

fis.config.set('fis-optimizer-uglify-js', 'js/index.js');
fis.config.set('fis-optimizer-clean-css', 'css/index.css');
fis.config.set('fis-optimizer-png-compressor', 'js/index.js');
fis.config.set('modules.spriter', 'csssprites');
fis.config.set('pack',{
	'index.css':['**.css']
});