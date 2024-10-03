const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()
const cors = require('cors');


// middlewares

const allowedOrigin = process.env.NODE_ENV === 'production' ?
                      process.env.CORS_ORIGIN_PRODUCTION :
                      process.env.CORS_ORIGIN_DEVELOPMENT

app.use(express.json())
app.use(cors({
    origins: [allowedOrigin]
}))

// monogdb connection
const { MongoClient, ServerApiVersion } = require('mongodb');
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

    app.get('/devcluster',(req,res)=>{
        return res.send('Dev Cluster ')
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