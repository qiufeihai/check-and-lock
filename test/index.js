const { checkAndLock, unlock } = require('../index')

// 默认值, defaultKey  1分钟
// setInterval(() => {
//   if (checkAndLock()) return console.log('--------4----------------------lock--------------------', );
//   console.log('do something', new Date().toLocaleString());
// }, 1000);


// 锁5秒
// setInterval(() => {
//   if (checkAndLock('key', 5000)) return console.log('--------4----------------------lock--------------------', );
//   console.log('do something', new Date().toLocaleString());
// }, 1000);

// 立马解锁
setInterval(() => {
  if (checkAndLock('key', 5000)) return console.log('--------4----------------------lock--------------------', );
  unlock('key');
  console.log('do something', new Date().toLocaleString());
}, 1000);