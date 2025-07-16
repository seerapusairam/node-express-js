//os module  - bulid in module 
const os = require('os');

//get current username 
let user = os.userInfo();
console.log(user);

//uptime
console.log(`system uptime ${os.uptime()}`)
const sec = os.uptime();
hr = (sec / 60)/60;
console.log(`total hours of uptime ${hr}`)

//os
const os_des = {
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    freemem:os.freemem()
}
console.log(os_des);