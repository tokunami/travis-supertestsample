var mongoose = require('mongoose');

//データベース接続先
var db = mongoose.connect('mongodb://localhost/test');
//スキーマの宣言
var userinfoSchema = new mongoose.Schema({
  created: Date
  });
//スキーマからモデルを生成
var Userinfo = db.model('userinfo', userinfoSchema);

function loaddata(callback) {
  Userinfo.find({}, function(err, mongodata){
    if (err) {
      callback(err);
      return;
    }
    var result = [];
    for (i = 0; i < mongodata.length; i++) {
      result.push(mongodata[i]);
    }
    callback(null, result);
  });
}

module.exports.loaddata = loaddata;
