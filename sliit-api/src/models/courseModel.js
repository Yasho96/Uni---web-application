const mongoose = require ('mongoose');

const courseSchema = mongoose.Schema({
    name: {type:String, required: true, trim: true},
    code: {type:String, required: true, trim: true},
    passmark: { type: Number, required: true},
    lecturer: {type:String, required: true, trim: true},
    subjects: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'subjects'}] // many to many relationship
});

const Course = mongoose.model('courses', courseSchema ); //Create subject model in mongoDB
module.exports =  Course;