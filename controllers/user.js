const Product= require('../models/todo');

exports.getAddTodo = (req,res,next) =>{
    res.render('user/edit-todo',{
        pageTitle:'Add ToDo',
        path:'user/add-product',
        editing:false
    });
};

exports.postAddTodo= (req,res,next)=>{
    //console.log(req.body.title,req.body.description,req.body.datetime);
    const title=req.body.title;
    const description=req.body.description;
    const date=req.body.date;
    //const time=req.body.time;
    const list= req.body.list;
    const product=new Product(null,title,description,date,list);
    product.save()
    .then(()=>{
        console.log("Todo added!");
        res.redirect('/user/todos');
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.getTodos = (req,res,next) =>{
    Product.fetchAll()
    .then(
        alltodos=>{
            res.render('user/todo',{
                todos: alltodos,
                pageTitle: 'All Todos',
                path:'/user/todos'
            });

        }
    )
    .catch();
}

exports.postDeleteTodo = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId)
      .then(() => {
        console.log('DESTROYED TODO');
        res.redirect('/user/todos');
      })
      .catch(err => console.log(err));
  };