//CRUD operation
const mongodb=require('mongodb');
//const MongoClient=mongodb.MongoClient
const {MongoClient,ObjectID}=require('mongodb');
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager1'
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>
{
if(error)
{
   return console.log("unable to connect")
}
console.log("connected");
 const db=client.db(databaseName)
// db.collection('users').findOne({name:'DILIP'},(error,user)=>
// {
//     if(error)
// {
//     return console.log('unable to fetch')
// }
// console.log(user);
// })
// db.collection('tasks').find({completed:true}).toArray((error,tasks)=>{
//     console.log(tasks)
// })
// const updatePromise=db.collection('users').updateOne({
//     _id: new ObjectID("5d034467f955580d9c11a4ac")
// },{
//     $set:{
//         name:"Mike"
//     }
// })
// updatePromise.then((result)=>
// {
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })
const newPromise=db.collection('tasks').updateMany({
    completed:false
},{
    $set:{
        completed:true
    }
})
newPromise.then((result)=>{
    console.log(result);
}).catch((error)=>
{
    console.log(error);
})
})