const express = require('express');

const router = express.Router();

const Post = require('./Post');

router.get('/',async (req, res) => {
    const posts = await Post.find()
    res.json(posts);
});

router.get('/:id',async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.json(post);
});

router.post('/',(req,res) =>{
   const post = new Post({
    title: req.body.title,
    price: req.body.price
   });
   post.save()

   .then(data => {
        res.json(data);
   })
   .catch(err => {
    res.json({message: err});
   });
});

router.delete("/:id",async (req,res)=>{
    const post = await Post.findById(req.params.id)
    post.remove();
    res.send("Record deleted")
})

module.exports = router;
