import web3 from './web3';
import StationFactory from './build/StationFactory.json';


const instance = new web3.eth.Contract(
  JSON.parse(StationFactory.interface),
  '0x9B9507F8d7818724979C7A931a567827c031AB63'
);


export default instance;
