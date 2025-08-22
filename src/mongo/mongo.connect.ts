import { MongoClient } from 'mongodb';

// -------------------------------

function connectToMongoDB(): Promise<MongoClient> {
  return new Promise((resolve, reject) => {
  // ... (MongoDB connection setup) ...
    MongoClient.connect(process.env.MONGO_URI || '')
    .then(client => {
      resolve(client);
    })
    .catch(err => {
      reject(err); // Exit if initial connection fails
    });
  });
}

// ---

export async function mongoConnect() {

  try {
    console.log('🔌 Connecting to Mongo...');
    const mongoClient = await connectToMongoDB();
    console.log('✅ Connected to Mongo');
    return mongoClient;
  } catch(err) {
    console.error('❌ Mongo connection error:', err);
    process.exit(1); // Exit if initial connection fails
  }

}
