import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Hi :)");

  next();
});

module.exports = router;
