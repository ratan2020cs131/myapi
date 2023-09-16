const homeRoute = (req, res) =>{
    res.send({message:"this is home route"});
}

module.exports = { homeRoute };