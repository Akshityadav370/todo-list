const Task = require("../models/task");


module.exports.home = async function(req, res){
    let task_data = await Task.find({});

    return res.render('home', {
                title: "TODO App", 
                task_list: task_data
            });
}

module.exports.createTask = async function(req,res){
    let newTask  = await Task.create({
        task : req.body.task,
        category : req.body.category,
        ddate : req.body.ddate
    })
    // console.log(req.body.ddate);
    if(newTask){
        console.log(newTask);
        return res.redirect('back');
    }
}

module.exports.deleteTask = async function(req, res){
    //get the id from query in ul
    let id = req.query.id;

    // find the task in the DB using id & delete
    await Task.findByIdAndDelete(id);
    return res.redirect('back');
}

module.exports.updateTask = async function(req, res){
    let id = req.query.id;

    await Task.findOneAndUpdate(
        // Selection_Criteria
        {_id: id},
        // Updating
        { $set: {
            task: req.body.task,
            category: req.body.category,
            ddate: req.body.ddate
        }}
    )

    return res.redirect('back');
}