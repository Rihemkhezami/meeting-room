import jwt from 'jsonwebtoken';


export function authenticateUser(req,res,next){
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({message:'Access denied. No token provided.'});
    }
    try{
        const decoded = jwt.verify(token,process.env.PRIVATE_KEY);
        req.user=decoded;
        next();
    }catch(error){
        res.status(401).json({message:'Invalid token.'})
    }
}

export  function authenticateAdmin  (req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    try {
      const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
      if (decoded.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied. Admin privileges required.' });
      }
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token.' });
    }
  };