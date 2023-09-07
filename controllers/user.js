import { User } from "../models/user.js";

export const getAllUsers =  async(req, res) => {
    const users = await User.findBy({});

    const keyword = req.query.keyword;
    console.log(keyword);

    res.json({
        success: true,
        users,
    });
};

export const postAllUsers =  async(req, res) => {
    const {name,email,password} = req.body;
    
    await User.create({
        name,
        email,
        password,
    });

    res.status(201).cookie("tempi", "lol").json({
        success: true,
        massage: "Register Succesfully",
    });
};

export const specialFunc =  (req,res) => {
    res.json({
        success: true,
        message: "just joking",
    });
};

export const UserDetails = async(req,res) => {
    const {id} = req.params;
    const user = await User.findBy(id);

    res.json({
        success: true,
        user,
    });
};

export const updateUser = async(req,res) => {
    const {id} = req.params;
    const user = await User.findBy(id);

    res.json({
        success: true,
        message: "Updated",
    });
};

export const deleteUser = async(req,res) => {
    const {id} = req.params;
    const user = await User.findBy(id);

    res.json({
        success: true,
        message: "Deleted",
    });
}; 

