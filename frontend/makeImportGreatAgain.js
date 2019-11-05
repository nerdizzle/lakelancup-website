const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// credits: https://davidwalsh.name/javascript-debounce-function
const debounce = (func, wait, immediate) => {
	let timeout;
	return function() {
        let context = this;
        let args = arguments;
		let later = () => {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

readDir = (dir, level) => {
    return fs.readdirSync(dir).map((fn) => {
        const fp = path.join(dir,fn);
        const fpStat = fs.statSync(fp)
        if(fpStat.isDirectory()){
            return readDir(fp, level+1);
        } else if (fn.slice(-3) === ".js"){
            return {path: fp,  fileName: fn, level: level};
        } else {
            return [];
        }
    }).reduce((acc,x) => acc.concat(x),[]);
};

const fixImportPath = (filePath, fileContent) => {
    if(!fileContent.match(/import .* from/g)) {return;}
    let newFileContent = fileContent.replace(/(import .* from\s+['"])(.*\/[a-zA-Z0-9_-]*)(?=['"])/g, '$1$2.js');
    let oldContentHash = crypto.createHash('md5').update(newFileContent).digest("hex");
    let newContentHash = crypto.createHash('md5').update(fileContent).digest("hex");
    if(oldContentHash != newContentHash){
        console.log('| mitigating ' + filePath);
        fs.writeFileSync(filePath, newFileContent);
    }
}

const makeImportGreatAgain = (dir) => {
    const files = readDir(dir, 0);
    files.forEach((file) => {
        let  fileContent;
        if(file.path.slice(-3) === ".js"){
            fileContent = fs.readFileSync(file.path, 'UTF-8');;
            fixImportPath(file.path, fileContent);            
        }
    });
};

const rootDir = './public/js/src';
const preactFiles = './public/js/contrib/node_modules/preact/src'

const makeImportGreatAgainDebounced = debounce((dir)=>makeImportGreatAgain(dir),1000);

// initial fixes
makeImportGreatAgainDebounced(rootDir);
makeImportGreatAgainDebounced(preactFiles);


fs.watch(rootDir, {persistent: true, recursive: true}, (event, filename) => {
    //console.log("------>",filename);
    makeImportGreatAgainDebounced(rootDir);
});


