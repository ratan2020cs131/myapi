const homeRouteGet = (req, res) =>{
    res.send({message:"this is home get route"});
}

const homeRoutePost = (req, res) =>{
    res.send({message:"this is home post route"});
}

const homeRouteParam = (req, res) =>{
    res.send({message:`The Id provided is: ${req.params['id']}`});
}

const apiError = (req, res) =>{
    res.send({message:"Invalid"});
}

module.exports = { homeRouteGet, homeRouteParam, homeRoutePost, apiError };