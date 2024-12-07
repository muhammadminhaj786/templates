import { User } from "../models/user.model"


export const createUser = async (req,res)=> {
    try {

        //destructured email, password name and role in body
        const {email, password, name, role} = req.body;

        // checking user not give email and password field empty
        if(!email || !password){
            return res.status(400).json({
                message: "Email and Password are required fields"
            })
        }

        let existanceUser = await User.findOne({email})

        //checking given email is alreasy exist or not
        if(existanceUser){
            if(existanceUser==='verified'){
                return res.status(403).json({
                    message: "Email is already in use"
                })
            }
        }

        const user = new User();

        user.email = email
        user.name = name
        if(role){
            user.role = role
        }
        user.password = user.encryptPassword(password)
        user.status = 'pending'

        const result = user.save()

        return res.status(201).json({
            message: 'User Created Successfully',
            id: result._id
        })


        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while creating user",
            details: error.message
        })
    }
}