const router = require("express").Router();
const Message = require("../models/Message");

//add message

router.post("/",async(req,res)=>{
    const newMessage = new Message(req.body);

    try
    {
        const saveMessage = await newMessage.save();
        res.status(200).json(saveMessage);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get("/:conversationId",async(req,res)=>{
    try{
        const message = await Message.find({
            conversationId:req.params.conversationId,
        });
        res.status(200).json(message);
    }catch(err){
        res.status(500).json(err);
    }
});

//get message

module.exports = router;