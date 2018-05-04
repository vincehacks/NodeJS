let express = require('express');
let router = express.Router();
const data = require('./lab12_data-models');


router.put('/:id' , (request,resp) => {

  // Retrieving the plates in an object, require parses the json already!
  let plates = require('./data/plates.json');
  // Gets the id from the URL
  let id = request.params.id;
  // Looks if the plate id is in the data from plates.json
  let foundPlate = plates.find((item) => item._id == id);

  // Messages if found
  if(foundPlate){
    data.cart.push(foundPlate);
    resp.send(`Plate ${id} was added to the cart`);
  }
  else{
    throw new Error(`Plate with ${id} was not found`);
  }
});


// Sends the cart to the client
router.get('/',(req,res) => {
  res.send(data.cart);
});

// Deletes Item from cart
router.delete('/:id' , (request,resp) => {

  let id = request.params.id;
  data.cart = data.cart.filter((item) => item._id != id);
  resp.send(`Plate ${id} removed from the cart`);

});

module.exports = router;