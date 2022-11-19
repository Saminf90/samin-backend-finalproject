import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const Users = new Schema({ 
    id: {
        type: Number,
    },
    name: { 
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
    } ,
    email: { 
        type: String,
        required: true,
    } ,
/*     media_location: { 
        type: String,
        required: true,
    } , */
    password: { 
        type: String,
        required: true,
        min: 5,
        max: 15,
    },
    image: String,
});

const Posts = new Schema({
    id: {
        type: Number,
    },
    timestamps: true,
    text: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 550,
    },
    location: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 100,
    },

});

export default model('Users', Users, 'Posts', Posts )
