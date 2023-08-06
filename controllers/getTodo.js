const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
    try{
        //fetch all Todo items
        const todos = await Todo.find({});

        res.status(200).json({
            success: true,
            data: todos,
            message: "Enitre Todo data is fetched",
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