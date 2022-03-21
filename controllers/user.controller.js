const express = require("express")
const user = require("../models/Users.model")

const router = express.router();

router.post("/user", async(req, res)=>{
    const sec = await user.create(req.body)

    return res.status(201).send({sec});

})

router.get("/user", async(req, res)=>{
    const sec = await user.find().lean().exec()

    res.status(200).send({sec});
})