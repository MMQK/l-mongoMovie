var express = require('express')
var port = process.env.PORT || 1338
var app = express()

// 设置根目录
app.set('views', './views')
// 设置模板引擎
app.set('view engine', 'jade')
app.listen(port)

console.log('服务启动：' + port)

// 加上首页路由
app.get('/', function (req, res) {
	res.render('pages/index', {
		title: '首页'
	})
})

// 加上详情路由
app.get('/movie/:id/', function (req, res) {
	res.render('detail', {
		title: '详情'
	})
})

// 加上列表路由
app.get('/admin/list', function (req, res) {
	res.render('list', {
		title: '列表'
	})
})

// 加上管理员路由
app.get('/admin', function (req, res) {
	res.render('admin', {
		title: '管理员'
	})
})
