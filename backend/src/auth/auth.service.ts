
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  async hash(password: string) {
    return bcrypt.hash(password, 12);
  }
}
