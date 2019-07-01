var mongoose = require('mongoose');
var schema=require('./schema');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});


var Blog=mongoose.model('Blog',schema,'blog');
function insert(title,author,body) {
    var blog1 = new Blog({
        title: title,
        author: author,
        body: body
    });

    Blog.create(blog1, err => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log("Guardado!");
        process.exit(0);
    });
}

function find(author) {
    Blog.find({author:author}, (err, docs) => {
        if (err) {
            console.log(err);
            process.exit(1);
        } else {
            console.log("Autor encontrado!");
            console.log(docs);
            process.exit(0);
        }
    });
}

function put(id,body){
    Blog.updateOne({_id:id},{$set:{body:body}},err=>{
        if (err){
            console.log(err);
            process.exit(1);
        }
        console.log("Body actualizado!");
        process.exit(0);
    });
}

function del(id){
    Blog.deleteOne({_id:id},(error)=>{
        if (error){
            console.log(error);
            process.exit(1);
        }
        else{
            console.log("Eliminacion exitosa!");
            process.exit(0);
        }
    });
}

//Metodos

//insert("Futuro del universo2","Angel Guardian","La luna y sus fases");
find("Angel Guardian");
//put('5d1977d01cdbbe1aa82acfec',"La luna y sus fases 3");
//del('5d1977d01cdbbe1aa82acfec');