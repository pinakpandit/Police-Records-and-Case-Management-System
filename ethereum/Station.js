import web3 from './web3';
import Station from './build/Station.json';



  const station = (address) => {
    return new web3.eth.Contract(JSON.parse(Station.interface), address);
  };

export default station;
