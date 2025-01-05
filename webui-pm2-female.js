const {exec} = require('child_process')

const main = () => {
    const p = exec('webui-user-female.bat')
    p.stdout.on('data', m => console.log(m))
}

main()