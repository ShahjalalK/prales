const { v4: uuidv4 } = require('uuid');
const User = require('../models/user.model')
const userPost = (req, res) => {
    const newUser = new User({
        id: uuidv4(),
        name: req.body.name,
        age: req.body.age
    })
     newUser.save()
    res.status(200).send({
        message: 'Sucessfully Post'
    })
}
const userGet = async (req, res) => {
    try{
        const user = await User.find()
        res.status(200).send(user)
    }
    catch(error){
        res.status(500).send(error)
    }
}
const userFind = async (req, res) => {
    try{
        const user = await User.find({id: req.params.id})
        res.status(200).send(user)
    }
    catch(error){
        res.status(500).send(error)
    }
}
const userUpdate = async (req, res) => {
    try{
        const user = await User.updateOne({id: req.params.id}, {
            $set: {
                name: req.body.name,
                age: Number(req.body.age)
            }
        })
        res.status(200).send(user)
    }
    catch(error){
        res.status(500).send(error)
    }
}
const userDelete = async (req, res) => {
    try{
        const id = req.params.id
        if(id){
            await User.deleteOne({id: id})       
            res.status(200).send({
               message: 'User is Deleted'
            })
        }else{
            res.status(400).send({
                message: 'User Not Found'
             })
        }
       
    }
    catch(error){
        res.status(500).send(error)
    }
}




module.exports = {userPost, userGet, userUpdate, userDelete, userFind}