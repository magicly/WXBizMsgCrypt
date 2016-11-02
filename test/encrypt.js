import test from 'ava';
const should = require('chai').should();

const WXCrypt = require('../lib/WXBizMsgCrypt.js');

test('encrypt', t => {
  t.plan(1);

  const wxcrypt = new WXCrypt('7ccfb3b5217b4bff', 'wx9ca8afc8075fcc93', 'dd872beTkF0Gc2HfXqUcVb0T78hHvgAYtknqldfBiC9')
  const rawMsg = '<xml><ToUserName><![CDATA[oditPuFCItL-IPajwFvcgk78OSb4]]></ToUserName><FromUserName><![CDATA[gh_0e7ca0ffb14f]]></FromUserName><CreateTime>1474364883463</CreateTime><MsgType><![CDATA[news]]></MsgType><ArticleCount>1</ArticleCount><Articles><item><Title><![CDATA[川川方脑壳熊猫]]></Title><Description><![CDATA[这是一个测试。this is a test.]]></Description><PicUrl><![CDATA[http://image.cdn.fishsaying.com/602854156b424248819b957e93c75835.jpg]]></PicUrl><Url><![CDATA[http://m.fishsaying.com]]></Url></item></Articles></xml>';

  const encryptedMsg = wxcrypt.encrypt(rawMsg);
  const decryptedMsg = wxcrypt.decrypt(encryptedMsg);

  t.is(decryptedMsg, rawMsg);
})

// test('encryptMsg', t => {
//   t.plan(1);
//   return getIPInfos('asdfasdfadfadf').then(infos => {
//     t.true(infos.length >= 1);
//   })
// })

test('decrypt', t => {
  t.plan(1);

  const wxcrypt = new WXCrypt('7ccfb3b5217b4bff', 'wx9ca8afc8075fcc93', 'dd872beTkF0Gc2HfXqUcVb0T78hHvgAYtknqldfBiC9')
  const rawMsg = '<xml><ToUserName><![CDATA[oditPuFCItL-IPajwFvcgk78OSb4]]></ToUserName><FromUserName><![CDATA[gh_0e7ca0ffb14f]]></FromUserName><CreateTime>1474364883463</CreateTime><MsgType><![CDATA[news]]></MsgType><ArticleCount>1</ArticleCount><Articles><item><Title><![CDATA[川川方脑壳熊猫]]></Title><Description><![CDATA[这是一个测试。this is a test.]]></Description><PicUrl><![CDATA[http://image.cdn.fishsaying.com/602854156b424248819b957e93c75835.jpg]]></PicUrl><Url><![CDATA[http://m.fishsaying.com]]></Url></item></Articles></xml>';
  const encryptedMsg = 'llHCKWc0PGWZ9mXWHttQbFfmwigCZuGaqNin4qTsPbIPwpuEHbWpBZtpoK3lOoXDoCpz1zbfjDVO7/r+RWc3ihEOTxCF/VgaH2J8cJjvEZQB7Bkf8gvtfLUtSourAgVR9qXPHv3IQjMCxXgmPcMK9AZLBDsHEBgiMf2FAZJh1AMwVaHHQ1XUX3NQWiUHEfv8k2gMGdqztaQld1d+xfLAfF+zj+Hw4zjLfmgMnh5BV1UVWli2v1ECPnJ+J4ZJXTffrGL1OIEIm+iO/xu42z4BNnkOU9gCYxw9ripFPkAGm5SKN1G9Z1DgqDaaNf24M9ImvFYiCQZZB6sVkxglJP+inCDuMzCbx5FwEoPoo8SxGjHnMX5TbWJmQTNxYutdurUTGPNNGp38Ne1YMPBQtgIYj1+qvbhuIbuNHoU43R/uVFQCFv5vqGpy6TqMcbFH74PlGgFstAUVFgo9V4SaZvPx2Y0pcu0V3qY+Je7pKRdT8uGrJdFRyrS0bYx3qtSUrNY1X4R4UMW4inOjbC7PI+BJ/ybofZkHfmXwXHE80m3Nm3vxHZggyqyXUVaw6ga2d+IZeSJ09slSU1R9tMaa4PAFXnPp4bzJNIGPuS+W5Ozurg1r7/HQEoIRdTIvPNg/k+dV43KWTZ1pLLGee18JAlanoFp/Yy85XC4Frnbn+ovXpfI5VV5R/qUAi5cUYF57QMFcmeSDndXledhK/ch6W2g+9uCsxkYTCXom8lORxIwbS8IO4Vo3+oc0YgRnbEqc4OsL';

  const decryptedMsg = wxcrypt.decrypt(encryptedMsg);

  t.is(decryptedMsg, rawMsg);
})