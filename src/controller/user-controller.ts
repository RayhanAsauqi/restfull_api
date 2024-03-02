import { NextFunction, Request, Response } from "express";
import {
  TCreateUserRequest,
  TLoginUserRequest,
  TUpdateUserRequest,
} from "../model/user-model";
import { UserService } from "../service/user-service";
import { IUserRequest } from "../type/user-request";

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
  static async get(req: IUserRequest, res: Response, next: NextFunction) {
    try {
      const response = await UserService.get(req.user!);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const request: TLoginUserRequest = req.body as TLoginUserRequest;
      const response = await UserService.login(request);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req: IUserRequest, res: Response, next: NextFunction) {
    try {
      const request: TUpdateUserRequest = req.body as TUpdateUserRequest;
      const response = await UserService.update(req.user!, request);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }
}
