const routes = require('next-routes')();

routes
.add("/stations/new", "/stations/new")
.add("/stations/viewAllStations", "/stations/viewAllStations")
.add("/stations/:address", "/stations/show")
.add("/stations/:address/requests", "/stations/requests/index")
.add("/stations/:address/requests/new", "/stations/requests/new")
.add('/criminal/addCriminal','/criminal/addCriminal')
.add('/criminal/showCriminal','/criminal/showCriminal')
.add('/FIR/addFIR','/FIR/addFIR')
.add('/FIR/showFIR','/FIR/showFIR')
.add('/SHR/addSHR','/SHR/addSHR')
.add('/SHR/showSHR','/SHR/showSHR');





module.exports = routes;
