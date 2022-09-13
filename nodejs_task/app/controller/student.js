const { datasource } = require('/home/tectoro/Desktop/nodejs_task/database.js');
const { student } = require('/home/tectoro/Desktop/nodejs_task/app/entities/Student.js');
const studentRepo = datasource.getRepository('student');
const appConst = require('/home/tectoro/Desktop/nodejs_task/app/constants.js');

const add =  async(req, res) => {
  try {
    const resp =  await studentRepo
      .createQueryBuilder()
      .insert()
      .into(student)
      .values(req.body)
      .execute();
    res.status(201).json({
      status: appConst.status.success,
      response: resp.count,
      message: "done",
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

const getall =  async(req, res) => {
    try {
      const resp =  await studentRepo.find();
      res
      .status(201)
      .json({status: appConst.status.success, response: {resp}, message: "done"})
    }
    catch (err) {
      console.log(err.message);
      res.status(400).json({
        status: appConst.status.fail,
        response: null,
        message: err.message,
      });
    }
  };
  



module.exports = {add,getall}
