import { User } from "@prisma/client";
import { Address } from "@prisma/client";
import { Contact } from "@prisma/client";

export type TUserResponse = {
  username: string;
  name: string;
  token?: string;
};

export type TCreateUserRequest = {
  username: string;
  name: string;
  password: string;
};


//helper
export function toUserResponse(user: User): TUserResponse {
  return {
    name: user.name,
    username: user.username,
  };
}
