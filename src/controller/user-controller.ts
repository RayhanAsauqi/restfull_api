import { NextFunction, Request, Response } from "express";
import { TCreateUserRequest } from "../model/user-model";
import { UserService } from "../service/user-service";

export class UserController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const request: TCreateUserRequest = req.body as TCreateUserRequest;
      const response = await UserService.register(request);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }
}
