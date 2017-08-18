// 配置插件
seajs.config({
   //JS文件目录
   base: "/js/",
   // 配置别名
   alias: {
	    'jquery': 'jquery-1.11.2.min',
	    'cookie': 'jquery.cookie',
	    'mouse': 'jquery.mousewheel.min',
	    'jqNicescroll': 'jquery.nicescroll',
	    'regex': 'formValidatorRegex',
	    'nicescroll':'jquery.nicescroll',
	    'style': 'style',
	    'jqSuperSlide': 'jquery.SuperSlide.2.1.1',
	    'layer': 'layer/layer',
	    'layerExt': 'layer/extend/layer.ext',
	    'validate': 'jquery.validate.min',
	    'aliasMethod': 'alias-method',
	    'lottery': 'lottery',

	    //css
	    'layer_css': 'layer/skin/layer.css'
  },
  //调试模式
  debug: true,
  preload: 'jquery',
  //文件编码
  charset: 'utf-8'
});