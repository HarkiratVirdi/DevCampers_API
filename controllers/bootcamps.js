const Bootcamps = require("../models/Bootcamps");

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamps.find();
    res.status(200).json({
      success: true,
      data: bootcamps,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamps.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

exports.createBootcamp = async (req, res, next) => {
  console.log(req.body);
  try {
    const bootcamp = await Bootcamps.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete Bootcamp ${req.params.id}` });
};

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update Bootcamp ${req.params.id}` });
};
