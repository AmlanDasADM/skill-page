const express = require('express');
const router = express.Router();
const Form = require("../models/form-submit-model")



// get
router.get("/get", (req, res) =>
{
    Form.find()
        .then(form => res.json(form))
        .catch( err =>res.status(400).json(`Error:${err}`))
})
// post
router.post('/post/',  (req, res) =>
{
    const newForm = new Form({
        name: req.body.name,
        email: req.body.email,
        description: req.body.description,
    })
    newForm.save()
        .then(() => res.json('The form posted SUCCESFULLY!!!!!'))
        .catch((err)=> res.status(400).json(`error:${err}`))
})

// find by id
router.get("/:id", (req, res) =>
{
    Form.findById({ _id:req.params.id })
        .then(form => res.json(form))
        .catch((err)=> res.status(400).json(`error:${err}`))
})

// FIND BY ID AND UPDATE
router.put("/update/:id" ,(req, res) => {
    Form.findByIdAndUpdate(req.params.id)
        .then(form =>
        {
                form.name = req.body.name,
                form.email = req.body.email,
                form.description = req.body.description,
            
            form.save()
                .then(() => res.json('the artical updated succesfully'))
                .catch((err)=> res.status(400).json(`error:${err}`))

        })
        .catch((err)=> res.status(400).json(`error:${err}`))
    
})

// DELETE 
router.delete("/delete/:id", (req, res) =>
{
    Form.findByIdAndDelete(req.params.id)
        .then(() => res.json("The Article DELETED succesfully!!!"))
        .catch((err)=> res.status(400).json(`error:${err}`))
    
})



// // STORAGE
// const storage = multer.diskStorage({
//     destination: (req, file, cb) =>
//     {
//         cb(null,"../client/public/uploads")
//     },
//     filename: (req, file, cb) =>
//     {
//         cb(null,file.originalname)
//     }
// })

// const upload = multer({storage:storage})
module.exports = router;