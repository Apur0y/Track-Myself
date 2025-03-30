require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@thelaststand.sh6jy.mongodb.net/?appName=thelaststand`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const skillsCollection = client.db("track_myself").collection("skills");
    const targetCollection = client.db("track_myself").collection("target");
    const myskillsCollection = client
      .db("track_myself")
      .collection("my_skills");

    app.get("/skills", async (req, res) => {
      const result = await skillsCollection.find().toArray();
      res.send(result);
    });
    app.get("/myskills", async (req, res) => {
      const result = await myskillsCollection.find().toArray();
      res.send(result);
    });

    app.post("/skills", async (req, res) => {
      const skill = req.body;
      const result = await skillsCollection.insertOne(skill);
      res.send(result);
    });

    app.post("/myskills", async (req, res) => {
      const task = req.body;
      const result = await myskillsCollection.insertOne(task);
      res.send(result);
    });

    app.put("/myskills/:id", async (req, res) => {
      const { id } = req.params;
      const result = await myskillsCollection.updateOne(
        { _id: new ObjectId(id) },
        {
          $set: {
            type: "done",
          },
        }
      );
      res.send(result);
    });

    app.delete("/myskills/:id", async (req, res) => {
      const { id } = req.params;
      const result = await myskillsCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });


    app.get('/target',async(req,res)=>{
      const result= await targetCollection.find().toArray();
      res.send(result);
    })

    app.post('/target',async(req,res)=>{
      const target = req.body;
      const result = await targetCollection.insertOne(target)
      res.send(result);
    })

    app.delete('/target/:id',async(req,res)=>{
      const {id} =req.params;
      const result = await targetCollection.deleteOne({_id : new ObjectId(id)})
      res.send(result)
    })

    await client.connect();
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Track Is On");
});

app.listen(port, () => {
  console.log(`Track Is On ${port}`);
});
