const mysql=require('mysql');
//创建连接池对象
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'KK1628524067',
  database:'xz',
  connectionLimit:20,
  multipleStatements:true
});
//导出连接池对象
module.exports=pool;


