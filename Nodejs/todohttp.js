let seneca=require('seneca')()
let entity=require('seneca-entity')

seneca.quiet();
seneca.use(entity);

seneca.use('mongo-store',{
    name:'cloudnativedb',
    host:'127.0.0.1',
    port:'27017'
})

seneca.use(require('./todoms.js'))

seneca.ready((err) => {
    if (err) throw err
    console.log('Server is Ready')
    seneca.listen({type:'web',port:'2020',path:'/todo'})
})
