## a simple lock
### install
```
npm i --save check-and-lock
```
### usage
```
const { checkAndLock, unlock } = require('check-and-lock');

if (checkAndLock('myKey', 1000/**millisecond*/)) throw new Error('短时间内不能重复操作，请稍后再试');

// do something ...

unlock('myKey');
```
```
router.get('/path', wrap(async (req, res, next, logger)=>{
  let userId = ...;
  if (checkAndLock('path' + userId, 500/**millisecond*/)) throw new Error('短时间内不能重复操作，请稍后再试');
  // do something ...
}));
```