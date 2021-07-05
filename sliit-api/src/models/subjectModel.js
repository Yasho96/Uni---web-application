const mongoose = require ('mongoose');

const SubjectSchema = new mongoose.Schema({
    name: {type:String, required: true, trim: true},
    description: {type:String, required: true, trim: true},
    amount: { type: Number, required: true},
    courses: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'courses'}] // many to many relationship
});

const Subject = mongoose.model('subjects', SubjectSchema ); //Create subject model in mongoDB
module.exports =  Subject;
