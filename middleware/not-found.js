const notFound = (req, res) => {
  res.status(404).send("route doesnot exist");
};

module.exports = notFound;
