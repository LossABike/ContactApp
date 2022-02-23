const express = require('express');

const contacts = require('../controllers/contact.controller');

const router = express.Router();

    
    //create new contact
    router.post("/", contacts.create);

    //retrieve all contacts 
    router.get("/", contacts.findAll);
    
    //retrieve all favorite contact
    router.get("/favorite", contacts.findAllFavorite);

    //retrieve single with id
    router.get("/:id", contacts.findOne);
    
    //update single with id
    router.put("/:id", contacts.update);

     
    //dalete single with id
    router.put("/:id", contacts.delete);
    
    //delete all with id
    router.delete("/:id", contacts.deleteAll);

    //app.use("api/contacts", router);


module.exports = router;





