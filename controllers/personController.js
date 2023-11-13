const persontest  = (req, res) => {
    const bla = req.query.bla;
    const meat = req.query.meat;
  res.send(`Hello World! this ${bla} is eating ${meat}`)
};

export default { persontest, };