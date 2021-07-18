const mongoose = require('mongoose');
const { ObjectId} = mongoose.Schema.Types;
const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    isPublished:Boolean,
});

mongoose.model('Course',courseSchema);