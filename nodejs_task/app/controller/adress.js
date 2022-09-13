const { datasource } = require('/home/tectoro/Desktop/nodejs_task/database.js');
const { address } = require('/home/tectoro/Desktop/nodejs_task/app/entities/Adress.js');
const addressRepo = datasource.getRepository('adress');
const appConst=require('/home/tectoro/Desktop/nodejs_task/app/constants.js');
 
const add= async (req, res) => {
    try {
        const resp = await addressRepo.save(
          
            req.body
      )
    res.status(201).json({
        status: appConst.status.success,
        response: resp.count,
        message: null,
    });
} catch (err) {
    console.log(err.message);
    res.status(400).json({
        status: appConst.status.fail,
        response: null,
        message: err.message,
    });
}
};
module.exports = { add };