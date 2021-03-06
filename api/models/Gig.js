const Sequelize = require('sequelize');
const db=require('../config/database');

const Gig=db.define('gig',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    am_model:{
        type:Sequelize.STRING,
        allowNull:false
    },
    am_snumber:{
        type:Sequelize.STRING,
        allowNull:false
    },
    am_myyear:{
        type:Sequelize.STRING,
        allowNull:false
    },
    am_pdate:{
        type:Sequelize.DATEONLY,
        allowNull:false
    },
    am_warranty:{
        type:Sequelize.STRING,
        allowNull:false
    },
    am_from:{
        type:Sequelize.STRING,
        allowNull:false
    },
    am_to:{
        type:Sequelize.DATEONLY,
        allowNull:false
    }
});

module.exports=Gig;