/*
//导入crypto模块
const crypto = require('crypto');
//创建sha256对象
const hash = crypto.createHash('sha256');
//根据明文更新哈希对象的内容更新后的哈希对象的内容就是密文
hash.update('HelloWorld');
//将密文转换为16进制字符串
const hashStr = hash.digest('hex');
// hash.digest('hex');
console.log(hashStr);
*/

//导入crypto模块
const crypto = require('crypto');
//模拟判断密码是否正确，假设正确的密码为2021012
const hash = crypto.createHash('sha256');
hash.update('2021012');
const password = hash.digest('hex');

//假设用户输入的密码为123456
//假设用户输入的密码为2021012
const hash1 = crypto.createHash('sha256');
hash1.update('2021012');
const password1 = hash1.digest('hex');
if (password === password1) {
    console.log('密码正确');
} else {
    console.log('密码错误');
}
