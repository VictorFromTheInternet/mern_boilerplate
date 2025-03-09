import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI || ''
const client = new MongoClient(
    uri,
    {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    }
)
try{
    // connect the client to the server
    await client.connect()

    // send a ping to confirm a successful connection
    await client.db('admin').command({ping: 1}) 
    console.log("Pinged your deplyment. You successfully connected to Mongodb")
}catch(err){
    console.error(err)
}

let db = client.db('employees')