import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    name: {
        type:String, 
        required:[true, "Enter the name of the movie"]
    },

    price: {
        type:Number,
        required:true,
    },
        
    age: {
        type: Number,
        required: true,
        min: 0,

    },
    image: {
        type:string,
        required:false,
    }
     
})


export default mongoose.model('Movies', movieSchema )