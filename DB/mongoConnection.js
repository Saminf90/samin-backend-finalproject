import mongoose from 'mongoose';


export default () => mongoose.connect (process.env.MONGODB_URI) .then(() => console.log('connected to MongoDB')) .catch(() => console.log('could not connect to MongoDB') )