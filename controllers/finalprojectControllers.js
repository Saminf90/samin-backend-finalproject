import finalprojectModel from "../models/finalprojectModel.js";

const getAllFinalproject = async (req, res)=> { 
    try { 
        const allFinalproject = await finalprojectModel.find();
        return res.json(allFinalproject)

    }catch(error)  { 
        return res.status(500).json({error: error.message})
    }
 }
 const getSingleFinalproject = async (req, res)=> { 
    try { 

    }catch(error)  { 
        return res.status(500).json({error: error.message})
    }
 }
 const createFinalproject = async (req, res)=> { 
    try { 
       if(!name || !description || !personalDeadliness || !influence || !image) return res.jason(400).jason({error: 'please provide all fields'})
       const {name, description, personalDeadliness, influence, image} = req.body;
       const newFinalproject = await finalprojectModel.create({name, description, personalDeadliness, influence, image})
       return res.json(newFinalproject)
    }catch(error)  { 
        return res.status(500).json({error: error.message})
    }
 }
 const updateFinalproject = async (req, res)=> { 
    try { 

    }catch(error)  { 
        return res.status(500).json({error: error.message})
    }
 }
 const defeatFinalproject = async (req, res)=> { 
    try { 

    }catch(error)  { 
        return res.status(500).json({error: error.message})
    }
 }

export {getAllFinalproject, getSingleFinalproject, createFinalproject, updateFinalproject, defeatFinalproject}