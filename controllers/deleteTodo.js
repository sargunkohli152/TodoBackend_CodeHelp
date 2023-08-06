const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try{
        const {id} = req.params;

        const todo = await Todo.findByIdAndDelete({_id : id});
        
        if(!todo){
            return res.status(500).json({
                success: false,
                message: `Todo with id ${id} does not exist`
            })
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo with id ${id} deleted successfully`
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            error: error.message,
            message: "Internal Server Error"
        })
    }
}