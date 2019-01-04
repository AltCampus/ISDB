const Startup = require('./../models/Startup');

module.exports = {
  update: (req, res) => {
    console.log(req.params.id, "before")
    const { id } = req.params;
    Startup.findOne({ _id: id }, (err, data) => {
      // console.log(req.params.id, "after")
      // if (err) throw err;
      // else res.json('data updated');
      
    });
  },

};
