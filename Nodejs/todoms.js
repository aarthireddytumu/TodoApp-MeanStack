function init(args,respond){
    console.log('Plugin is initialized...')
    respond();
}

module.exports=function todoapp(options){
    this.add({component:'todo',by:'task'},(args,respond) => {
        let collection=this.make('todo')
        collection.list$({},(err,list) => {
            if (err) throw err;
            respond(null,list)
        })
    })
    this.add({component:'todo',by:'task',action:'add'},(args,respond)=>{
        let collection=this.make('todo')
        collection.task=args.task
        collection.status=args.status
        collection.save$((err,Task)=>{
            if (err){
                respond(null, {message:"ToDo Task is Not Added"});
            }else{
                respond(null,{message:"Todo is Added"});
            }
        })
    })
    this.add({component:'todo',by:'task',action:'update'},(args,respond)=>{
        let collection=this.make('todo');
        collection.id=args.id
        collection.task=args.task
        if (args.status=="Not Completed"){
            args.status="Completed"
        }
        else{
            args.status="Not Completed"
        }
        collection.status=args.status
        collection.save$((err,Task)=>{
            if (err){
                respond(null, {message:"ToDo Task is Not Updated"});
            }else{
                respond(null,{message:"Todo is Updated"});
            }
        })
    })
    this.add({component:'todo',by:'task',action:'remove'},(args,respond)=>{
        let collection=this.make('todo');
        collection.remove$(args.id,(err)=>{
            respond(err,{message:"ToDo Task is Removed"})
        })
    })
    this.add({init:"todoapp"},init)
}