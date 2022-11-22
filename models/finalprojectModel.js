import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const Users = new Schema({ 
    name: { 
        type: String,
        required: true,
        minlength: 1,
        maxlength: 25,
        unique: true,
    } ,
    email: { 
        type: String,
        required: true,
        unique: true,
    } ,
    password: { 
        type: String,
        required: true,
    },
    image: String,
});

const Posts = new Schema({
    createdAt: { 
        type: Date, 
        required: true 
    },
    text: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 550,
    },
    image: String,
});

const Comments = new Schema({
    createdBy: { 
        type: Users, 
    },
    postId: { 
        type: mongoose.Types.ObjectId    
    },
    createdAt: { 
        type: Date, 
        required: true,  
    },
    userComment: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 550,
    },
});
const Likes = new Schema({
    createdBy: { 
        type: Users, 
    },
    postId: { 
        type: mongoose.Types.ObjectId, 
    },
});

const Events = new Schema({
    createdBy: { 
        type: Users, 
    },
    title: { 
        type: String,
        required: true,
        minlength: 10,
        maxlength: 80,
    },
    description: { 
        type: String,
        required: true,
        minlength: 10,
        maxlength: 550,
    },
    eventDateType: { 
         type: Date, 
         required: true, 
    },
   
    eventLocation: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 100,
    },
});
const EventInterests = new Schema({
    createdBy: { 
        type: Users, 
    },
    eventInterestsId: { 
        type: mongoose.Types.ObjectId, 
    },
});



const User = model("user", Users)
const Post = model("post", Posts)
const Comment = model("comment", Comments)
const Like= model ("like", Likes)
const Event =model ("event", Events)
const EventInterest = model("eventInterest", EventInterests)


export {User, Post, Comment, Like, Event, EventInterest}