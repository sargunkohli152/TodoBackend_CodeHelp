const Todo = require("../models/Todo");

exports.getTodoById = async (req, res) => {
    try{
        //fetch all Todo items
        const {id} = req.params;
        const todos = await Todo.findById({_id:id});

        if(!todos){
            return res.status(404).json({
                success: false,
                message: "No data found with given id"
            })
        }

        res.status(200).json({
            success: true,
            data: todos,
            message: `Todo ${id} data successfully fetched`,
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error",
        })
    }
}