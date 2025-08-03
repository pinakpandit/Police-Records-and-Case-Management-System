const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());


const compiledCRMS = require('../ethereum/build/crms.json');


let accounts;
let crmsAddress;
let crms;

beforeEach(async()=>{
  accounts = await web3.eth.getAccounts();

  crms = await new web3.eth.Contract(JSON.parse(compiledCRMS.interface))
  .deploy({data:compiledCRMS.bytecode})
  .send({from:accounts[0],gas:'1000000'});
});


describe('CRMS',()=>{
  it('deploys the contract',()=>{
  assert.ok(crms.options.address);  
  });
});
