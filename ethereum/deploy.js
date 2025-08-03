
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledCRMS = require('./build/crms.json');
const compiledStationFactory = require('./build/StationFactory.json');

const provider = new HDWalletProvider(
  'case opera shed oppose rug story inquiry ceiling defense keep phrase swim',
  'https://rinkeby.infura.io/v3/63d181def55c495091bbe4543e2c2d8a'
);

const web3 = new Web3(provider);


const deploy = async()=>{
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);
const result =  await new web3.eth.Contract(JSON.parse(compiledCRMS.interface))
  .deploy({data:compiledCRMS.bytecode })
  .send({gas:'10000000',from:accounts[0]});

const result_1 = await new web3.eth.Contract(JSON.parse(compiledStationFactory.interface))
.deploy({data:compiledStationFactory.bytecode})
.send({gas:'10000000',from:accounts[0]});


console.log('CRMS Contract deployed to',result.options.address);
console.log('Station Factory Contract deployed to',result_1.options.address);
provider.engine.stop();
};
deploy();


///Contract deployed to 0xf0Aee96e0442353554141061FECd21f2f80e75A5
