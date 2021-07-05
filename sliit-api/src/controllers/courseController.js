const Course = require('../models/courseModel');
const createCourse = async (req, res) => {
    if (req.body) {
        const course = new Course(req.body);
        await course.save()
        .then(data => {
            res.status(200).send({data: data})  //pass data as the response to the frontend
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

const getAllCourses = async (req, res) => {
    if (req.body) {        
        await Course.find({}).populate('subjects', 'name description amount')
        .then(data => {
            res.status(200).send({data: data})  //pass data as the response to the frontend
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

const getSubjectsForCourse = async (req, res) => {
    if (req.params && req.params.id) {        
        const course = await Course.findById(req.params.id).populate('subjects', 'name description amount')
        .then(data => {
            res.status(200).send({subjects: data.subjects})  //pass data as the response to the frontend
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

const calculateAmount = async (req, res) => {
    if (req.params && req.params.id) {        
        const course = await Course.findById(req.params.id).populate('subjects', 'amount')
        let totalAmount = 0;
        if(course.subjects.length > 0) {
            course.subjects.map((subject) => {
                totalAmount += subject.amount;
            });
        }       
            res.status(200).send({totalAmount: totalAmount})  //pass data as the response to the frontend
        
    }
}

module.exports = {
    createCourse,
    getAllCourses,
    getSubjectsForCourse,
    calculateAmount
};