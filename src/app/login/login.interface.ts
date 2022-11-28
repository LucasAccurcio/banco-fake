import { User } from './../shared/interfaces/user.interface';

export interface LoginInterface {
  user: User;
  token: string;
}
