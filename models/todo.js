const mongodb=require('mongodb');

const getDb= require('../util/database').getDb;

class ToDo{
    constructor(id,title,description,date,list){
        this._id= id ? new mongodb.ObjectID(id) :null;
        this.title=title;
        this.description=description;
        this.date=new Date(date);
        this.list=list;
    }
    
    save(){
        const db=getDb();
        let dbOp;
        dbOp=db.collection('todos').insertOne(this);

        return dbOp
        .then(result=>{
            console.log('Saved');
        })
        .catch(err=>{
            console.log(err);
        });
    }

    static fetchAll(){
        const db=getDb();
        return db.collection('todos')
        .find()
        .toArray()
        .then(todos=>{
            console.log(todos);
            return todos;
        })
        .catch(err=>{
            console.log(err);
        });
    }
    static deleteById(prodId) {
        const db = getDb();
        return db
          .collection('todos')
          .deleteOne({ _id: new mongodb.ObjectId(prodId) })
          .then(result => {
            console.log('Deleted');
          })
          .catch(err => {
            console.log(err);
          });
      }
}

module.exports=ToDo;