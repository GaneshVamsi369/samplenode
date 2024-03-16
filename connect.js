const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://ganeshvamsi05:ejxCKXwugynuud4a@cluster0.a9ff9ol.mongodb.net/GaneshCrud"; // Replace with your actual connection string
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");
    // Your code to interact with the database goes here
    
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  } finally {
    // Close the connection when your application finishes (optional)
    // client.close();
  }
}

connectDB();
const db = client.db("GaneshCrud");  // Replace with your actual database name
const collection = db.collection("Test");  // Replace with your collection name

async function retrieveData() {
  try {
    const cursor = collection.find({});  // Find all documents (empty query)
    const results = await cursor.toArray();  // Convert cursor to an array

    console.log("Retrieved Data:", results);
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
}

// Call the function after successful connection
retrieveData();


module.exports = connectDB; 