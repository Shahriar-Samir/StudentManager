const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()
const cors = require('cors');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

// middlewares

const allowedOrigin = process.env.NODE_ENV === 'production' ?
                      process.env.CORS_ORIGIN_PRODUCTION :
                      process.env.CORS_ORIGIN_DEVELOPMENT

app.use(cors({
    origin: [allowedOrigin],
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

// cookies config
const cookieConfig = {
  httpOnly:true,
  secure:process.env.NODE_ENV==='development',
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
}


// monogdb connection
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGO_URI
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection

    const db = client.db('StudentManger')
    const userCollection = db.collection('Users')
    const studentCollection = db.collection('Students')

    // JWT authentication

    app.post('/login',(req,res)=>{
        const {uid,email} = req.body
        const token = jwt.sign({uid,email},process.env.TOKEN_SECRET,{expiresIn: '6h'})
        return res.cookie('user_token',token,cookieConfig).send()
    })

    app.post('/logout',(req,res)=>{
        return res.clearCookie('user_token',{...cookieConfig,maxAge:0}).send()
    })

    
 

    app.get('/students',async (req,res)=>{
      const {value} = req.query
      if(value === 'noValue'){
        const students = await studentCollection.find().toArray()
        return res.status(200).send(students)
      }
      else{
        const searchFilter = [
              {  firstName: {$regex:new RegExp(value,'i')}},
               { lastName: {$regex: new RegExp(value,'i')}},
               {middleName: {$regex:new RegExp(value,'i')}}
        ]
        const students = await studentCollection.find({$or:searchFilter}).toArray()
        return res.status(200).send(students)
      }
      
    })

    app.post('/addUser', async (req,res)=>{
          const userInfo = req.body
          const {uid} = userInfo
          const findUser = await userCollection.findOne({uid})
          if(findUser){
              return res.send({acknowledged:true})
          }
          const savedData = await userCollection.insertOne(userInfo)
          return res.send(savedData)
    })

    app.post('/addStudent', async (req,res)=>{
          const studentInfo = req.body
          const {roll,classNum} = studentInfo
          const findStudent = await studentCollection.findOne({classNum,roll})
          if(findStudent){
              return res.send({acknowledged:false})
          }
          const savedData = await studentCollection.insertOne(studentInfo)
          return res.send(savedData)
    })

    app.put('/updateStudent', async (req,res)=>{
      const updateInfo = req.body
      const options = {upsert:true}
      const newInfo = {
        $set:{
            firstName: updateInfo.firstName,
            middleName: updateInfo.middleName,
            lastName: updateInfo.lastName,
            classNum: updateInfo.classNum,
            division: updateInfo.division,
            roll: updateInfo.roll,
            addressLine1: updateInfo.addressLine1,
            addressLine2: updateInfo.addressLine2,
            landmark: updateInfo.landmark,
            city: updateInfo.city,
            pinCode: updateInfo.pincode,
            image: updateInfo.image,
        }
      }

      const updatedData = await studentCollection.updateOne({_id:new ObjectId(updateInfo._id)},newInfo,options)
      return res.send(updatedData)
    })

    app.delete('/deleteStudent/:id', async (req,res)=>{
      const {id} = req.params
      const _id = new ObjectId(id)
      const deletedData = await studentCollection.deleteOne({_id})
      return res.send(deletedData)
})

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port,()=>{
    return `listening on port ${[port]}`
})