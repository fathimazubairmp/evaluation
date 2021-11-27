//const { findAll, create } = require('../models/Gig');
const Gig=require('../models/Gig');
var gigDao={
    findAll:findAll,
    create:create,
    findById: findById,
    deleteById: deleteById,
    updateGig:updateGig
}

function findAll(){
    return Gig.findAll();
}

function findById(id){
    return Gig.findByPk(id);
}

function deleteById(id){
    return Gig.destroy({where:{id:id}});
}

function create(gig){
    var newGig=new Gig(gig);
    return newGig.save();
}

function updateGig(gig,id){
    var updateGig={
        am_model:gig.am_model,
        am_snumber:gig.am_snumber,
        am_myyear:gig.am_myyear,
        am_pdate:gig.am_pdate,
        am_warranty:gig.am_warranty,
        am_to:gig.am_to
    };
    return Gig.update(updateGig,{where:{id:id}});
}

module.exports=gigDao