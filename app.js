// 1.首先要引入 express 模块
var express = require('express');
var fs = require("fs");
//处理跨域
var cors = require('cors');
// 2.执行一下模块变量 相当于是构造了一个 对象
var app = express();
app.use(cors());
app.use(express.static('files'));
// 3.直接就可以使用 路由表来实现客户的路由请求
app.get('/getdata', function (req, res) {

    // 异步读取
    fs.readFile('./files/datas.json', function (err, data) {
        if (err) { return console.error(err); }
        // console.log("异步读取: " + data.toString());
        // var json = data;
        // res.send(JSON.stringify(json));
        res.send(data.toString());
    });


    // res.send('这是中文');
    // var json = {
    //     msg: {
    //         mes: '登录成功',
    //         name: req.query.name,
    //         pw: req.query.pw
    //     }
    // };
    // res.send(JSON.stringify(json));

});

// 4.可选 关心监听就写
var server = app.listen(8885, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('host:' + host + port);
});