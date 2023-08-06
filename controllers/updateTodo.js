const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
    try{
        const {id} = req.params;
        const{title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id}, 
            {
                title: title, 
                description: description,
                updatedAt: Date.now(),
            }
        )

        if(!todo){
            return res.status(500).json({
                success: false,
                message: `Todo with id ${id} does not exist`
            })
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} Data updated successfully`
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal Server Error",
        })
    }
}