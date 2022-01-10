const fs = require('fs')
const shell = require('shelljs');


(async () => {
    // var count = 0;
    for (;;) {
        try {
            // count++;
            fs.appendFileSync('./aa', '\na')
            
            shell.exec(`git add ./aa`);
            // git commit --date="10 day ago" -m "Your commit message" 
            
            shell.exec(`git commit --date="${parseInt(Math.random() * 100) + 1000} day ago" -m "update some text"`);
            // if (count > 1000) {
            //     count = 0;
            //     shell.exec(`git push`);
            // }
        } catch (error) {
            console.error('error', error);
        }
    }
})();