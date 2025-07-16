import { MongoClient } from "mongodb";
import dotenv from "dotenv/config";

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

if(await client.connect()){
    console.log("Connected to MongoDB");
}else{
    console.log("Failed to connect to MongoDB");
}

const db = client.db("reports");

const Collection = db.collection("agents");

export default Collection;