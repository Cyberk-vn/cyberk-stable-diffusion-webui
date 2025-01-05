const {exec} = require('child_process')

const main = () => {
    const p = exec('webui-user-male.bat')
    p.stdout.on('data', m => console.log(m))
}

main()