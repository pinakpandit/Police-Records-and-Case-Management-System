import web3 from './web3';
import crms from './build/crms.json';

  export default (address) => {
    return new web3.eth.Contract(JSON.parse(crms.interface),'0xcA73F3Db00d57ca4011D2CB5314e3A8e86536597');
  };

//04-04-2022 Contract Addr : 0xcA73F3Db00d57ca4011D2CB5314e3A8e86536597
//27-03-2022 Contract Address(Prev): 0x89858950E6f2F0eD32BeA991233e21EDFf4eF5F0
// 28-03-2022 Contract address :0x6a304c5834d7370c764a01DABE1736Da431D87F4

//Contract address 0xE4c4668443ae36fAbbeeb4dB89E4E385dF193747


//0x2783b68704eb082Fc9a67b9c0c8e9e2Af5BF4DfF



//0x4e6E93b229f4d4a9e184e6Aac6Ba6b8938A4Ef95


//0x89858950E6f2F0eD32BeA991233e21EDFf4eF5F0
