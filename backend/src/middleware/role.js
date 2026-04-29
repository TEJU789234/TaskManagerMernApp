export const authorizedRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const role = req.user.role;
    if (!role) {
      const err = new Error("Forbidden: Role not found");
      err.status = 403;
      return next(err);
    }
    if (!allowedRoles.includes(role)) {
      const err = new Error("Forbidden: Insufficient access");
      err.status = 403;
      return next(err);
    }
    next();
  };
};