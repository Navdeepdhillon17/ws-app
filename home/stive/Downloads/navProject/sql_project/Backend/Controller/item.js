const db = require('../db')

exports.add =  function(req, res){
    if(req.body){
        db.none('insert into items(name, description) values(${name}, ${description})', {name:req.body.name, description:req.body.description})
        .then(()=>{res.status(201).json({data:req.body}); console.log('successful insertion', req.body);})
        .catch(error =>{res.status(500).json({message:'An error occured while inserting.'}); console.log('An error occured during insertion', error)})
    }
}

 

exports.get =  function(req, res){
    db.query('select * from items')
    .then((data) =>{res.status(200).json({data:data})})
    .catch(error => res.status(500).json({message:`An error occured, ${error}`}))
}


exports.update = function(req, res){
    db.query('update items set name = ${name} , description = ${description} where id = ${id}',{
        name:req.body.name,
        description:req.body.description,
        id:req.params.id
    })
    .then((data) => {res.status(204).json({message: data}); console.log('item updated')})
    .catch((error) => res.status(500).json({message:error}))
}


exports.delete = function(req , res){
    db.none('delete from items  where id = ${id}', {id:req.params.id})
    .then(() =>{res.status(204).json({message:'Item deleted'}); console.log('item deleted.')})
}