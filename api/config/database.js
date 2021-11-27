const {Sequelize}=require('sequelize');
const db=new Sequelize('codegig','sqlite','welcome123',{
    host:'localhost',
    dialect:'sqlite',
    storage:'assetdb.sqlite',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
});

module.exports=db;