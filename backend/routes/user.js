const User = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const express = require('express');
const router = express.Router();
const isEmail = require('../validators/validator');
const Blog = require('../models/blog');
const multer = require('multer');
const uuidv4 = require('uuid/v4');

//Multer Configuration

const DIR = '../public/BlogImages/';
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, DIR);
        },
        filename: (req, file, cb) => {
            const filename = file.originalname.toLowerCase().split(' ').join('-');
            cb(null, uuidv4() + '-' + filename);
        }
    });

    const upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            if (file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/gif') {
                 return cb(null, true);
            } else {
                 cb("Error: Images Only!");
            }
        }
    });

//Register User of App

router.route('/register').post( async (req, res) => {
   const { fname, lname, email, phone, sex, school, mode } = req.body;

    try {

        if(!fname || !lname || !email || !phone || !sex || !school || !mode) return  res.status(400).json({
            message: 'Please fill in all details'
        });
    
        if(!isEmail(email)) return res.status(400).json({ message: "Must be a valid email address" });
    
        const isFound = await User.findOne({email});
        if(isFound) return res.status(400).json({ message: "User with email already exists" });
    
    
        const newUser = new User({
            fname,
            lname,
            email,
            phone,
            school,
            mode,
            sex
        });
        const data = await newUser.save();
        return res.json({ 
            message: "Registration Successful!",
            data
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Something went wrong!" });
    }

});

//Login User of App

router.route('/login').post( async (req, res) => {
    const {  email, password } = req.body;

    try {

        if( !email  || !password ) return res.status(400).json({
            message: 'Please fill in all details'
        });

        const data = await User.findOne({email});
        if(!data) return res.status(400).json({ message: "User with email does not exists" });

        const isMatched = await bcrypt.compare(password, data.password);
        if (!isMatched) res.status(400).json({ message: "Invalid Credentials" });
      

        jwt.sign(
            {id: data._id, email: data.email},
            config.get("JWT_SECRET"),
            {expiresIn: 3600},
            (error, token) => {
                if(error) throw error;
                res.json({
                    token,
                    userDetails: {
                        FirstName: data.fname,
                        LastName: data.lname,
                        Email: data.email,
                        School: data.email,
                        Mode: data.mode,
                        Sex: data.sex,
                        Phone: data.phone
                    }
                })
            }
        );
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Something went wrong.." });
    }
   
});

router.post('/blog', upload.single('blogImage'), async (req, res) => {

    const blogImage = req.file.filename;
    const { title, author, body } = req.body;
    if(!title || !author || !body) return res.json(400).json({ message: "All fields are required" });

    const newBlogPost = new Blog({
        title,
        author,
        body,
        blogImage
    });

    try {
        const data = await newBlogPost.save();
        return res.status(200).json({
            message: "Uploaded Successfully",
            data
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Something went wrong.." });
    }
   
});

module.exports = router;