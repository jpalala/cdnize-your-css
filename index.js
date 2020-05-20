// this is probably only useful for scss libraries which can import for example, bootstrap scss);
const gittar = require('gittar');
const compileSass = require('compile-sass');
app.use('/css/:cssName', compileSass.setup());

var myArgs = process.argv.slice(2);
//first is the source
const src = myArgs[0]; // '...local file or repo pattern...';
let dest = myArgs[1] || null; // '/path/to/foobar';
if (dest == null) {
  dest = './node_modules/';
}

gittar.extract(src, dest);

console.log('Downloaded  from %s & extracted to: $s', src, dest);

