let map = {}; 
/** 
 * key: 要锁key
 * lockTime: 锁定时间，毫秒
*/
const checkAndLock = exports.checkAndLock = (key = 'defaultKey', lockTime = 60000/** 毫秒 */) => {
  if (map[key] && map[key] != undefined &&  Date.now() - map[key] < lockTime) return true;
  map[key] = Date.now();
}

const unlock = exports.unlock = key => {
  delete map[key];
}
