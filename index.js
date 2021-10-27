const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1100;


let user = {
    username: "jtiemens",
    password: "itsasecret",
    email: "jtiemens@madeupdomain.com",
    courses: {
        course: {
            classId: "CMSC1212",
            courseName: "Web-Markup",
            startDate: "08/23/2021",
            endDate: "12/20/2021"
        },
        course1: {
            classId: "CMSC1255",
            courseName: "Server-side Programming",
            startDate: "08/23/2021",
            endDate: "12/20/2021"
        },
        course2: {
            classId: "CMSC2203",
            courseName: "Database Modeling II",
            startDate: "08/23/2021",
            endDate: "12/20/2021"
        }
    }
}

app.get('/getUser', (req, res) => {
    try{
        return req.status(200).json(user);
    }
    catch{
        return res.status(500);
    }
});

app.post('/addUser', (req,res) =>{
    try{
        let newUserX = req.body.user;

        console.log(newUserX);
        
        return res.status(200).json("Added user " + req.body.user.username + " successfully.");
    }
    catch
    {
        return res.status(500);
    }
})

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});
