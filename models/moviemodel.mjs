import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    name: {
        type:String, 
        required:true
    },

    createdNewMovie: {
        type:String,
        required:true
    },
        
    // age: {
    //     type: Number,
    //     required: true,
    //     min: 0,

    // },
    // image: {
    //     type: String,
    //     required:false,
    // }
     
})


export default mongoose.model('Movies', movieSchema )