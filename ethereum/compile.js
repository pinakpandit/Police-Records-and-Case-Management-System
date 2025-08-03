const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');


const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);
const crmsPath = path.resolve(__dirname,'contracts','crms.sol');
const statPath = path.resolve(__dirname,'contracts','stat.sol');
const source = fs.readFileSync(crmsPath,'utf8');
const source_1 = fs.readFileSync(statPath,'utf8');
const output = solc.compile(source,1).contracts;
const output_1 = solc.compile(source_1,1).contracts;

fs.ensureDirSync(buildPath);


for (let contract in output){
  fs.outputJSONSync(
    path.resolve(buildPath,contract.replace(':','') +'.json'),
    output[contract]
  );
}
  for (let contract in output_1){
    fs.outputJSONSync(
  path.resolve(buildPath,contract.replace(':','') +'.json'),
  output_1[contract]
);
}
