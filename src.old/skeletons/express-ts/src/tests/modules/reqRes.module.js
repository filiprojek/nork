module.exports.getReq = () => {
  const req = {};
  req.body = {};
  return req;
};

module.exports.getRes = () => {
  const res = {};
  res.locals = {};
  res.status = () => res;
  res.json = () => res;
  res.send = () => res;
  res.render = () => res;

  return res;
};
