const express = require('express');
const cors = require('cors');
const port =process.env.PORT || 5000;

const app = express();
 app.use(cors())


 
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://track_myself:bw4Cw5IQATPRC7Aq@thelaststand.sh6jy.mongodb.net/?appName=thelaststand";

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

    const skillsCollection = client.db("track_myself").collection("skills")

app.get('/skills',async(req,res)=>{

    const result = await skillsCollection.find().toArray()
    res.send(result) 

})

app.post('skills',async(req,res)=>{
    const skill = req.body;
    const result = await skillsCollection.insertOne(skill)
    res.send(result)
})




    await client.connect();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);



app.get('/',(req,res)=>{
    res.send("Track Is On")
    })


app.listen(port,()=>{
console.log(`Track Is On ${port}`);
})





//bw4Cw5IQATPRC7Aq
//track_myself