var express=require('express');
var router = express.Router();
var axios=require('axios')


router.get('/',function ( req , res , next ) {
    axios.get("http://localhost:2020/todo" , {
        params: {
            component: "todo",
            by: "task"
        },
    }) .then(response => {console.log(response),res.send(response.data)})
    .catch(err => res.send(err))
})
router.post('/:task/:status',function(req,res,next){
    axios.get("http://localhost:2020/todo",{
      params:{
        component: "todo",
        by: "task",
        action: "add",
        task : req.params.task,
        status : req.params.status
      },
    }).then(response=>res.send(response.data))
    .catch(err => res.send(err))
  });
  router.put('/:id/:task/:status',function(req,res,next){
    axios.get("http://localhost:2020/todo",{
      params:{
        component: "todo",
        by: "task",
        action: "update",
        id : req.params.id,
        task : req.params.task,
        status : req.params.status
      },
    }).then(response=>res.send(response.data))
    .catch(err => res.send(err))
  });

  router.delete('/:id',function(req,res,next){
    axios.get("http://localhost:2020/todo",{
      params:{
        component: "todo",
        by: "task",
        action : "remove",
        id: req.params.id
      },
    }).then(response=>res.send(response.data))
      .catch(err => res.send(err))
  });

module.exports = router;
