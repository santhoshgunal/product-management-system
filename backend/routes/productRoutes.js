const express = require("express");
const router = express.Router();

const Product = require("../models/Product");


// Create

router.post("/",async(req,res)=>{

    try{

        const product=await Product.create(req.body);

        res.json(product);

    }

    catch(err){

        res.status(500).json(err);

    }

});


// Get

router.get("/",async(req,res)=>{

    try{

        const products=await Product.find();

        res.json(products);

    }

    catch(err){

        res.status(500).json(err);

    }

});


// Update

router.put("/:id",async(req,res)=>{

    try{

        const product=await Product.findByIdAndUpdate(

            req.params.id,
            req.body,
            {new:true}

        );

        res.json(product);

    }

    catch(err){

        res.status(500).json(err);

    }

});


// Delete

router.delete("/:id",async(req,res)=>{

    try{

        await Product.findByIdAndDelete(req.params.id);

        res.json({message:"Deleted"});

    }

    catch(err){

        res.status(500).json(err);

    }

});

module.exports=router;