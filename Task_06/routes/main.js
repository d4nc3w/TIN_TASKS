const repo = require('../public/javascripts/database/repository');

repo.getAllData(
    (err, result) => {
        if(err){
            console.log("ERROR: " + err);
        } else {
            console.log(result);
        }
    }
)