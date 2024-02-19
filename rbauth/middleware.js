const authStaff = (permit) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    if (permit.includes(userRole)) {
      next();
    }else{
        return res.status(401).json("Not Allowed");
    }
  };
};
module.exports = authStaff;