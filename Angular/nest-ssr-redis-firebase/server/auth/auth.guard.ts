import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { FirebaseService } from 'server/configs/firebase.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private auth: firebase.auth.Auth;

  constructor(private firebaseService: FirebaseService) {
    this.auth = firebaseService.getAuth();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.getArgByIndex(0);
    const res = context.getArgByIndex(1);
    const token = req.headers.authorization;
    if (token != null && token != '') {
      return this.auth
        .verifyIdToken(token.replace('Bearer ', ''))
        .then((decodedToken) => {
          req['user'] = {
            email: decodedToken.email,
            uid: decodedToken['user_id'],
          };
          return true;
        })
        .catch((error) => {
          throw new UnauthorizedException(error);
        });
    } else {
      throw new UnauthorizedException('ACCESS DENIED');
    }
  }
}
