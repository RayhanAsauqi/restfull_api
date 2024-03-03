import { Request } from "express";
import { User } from "@prisma/client";

export interface IUserRequest extends Request {
  user?: User;
}
