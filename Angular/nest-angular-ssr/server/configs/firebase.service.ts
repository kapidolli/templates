import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as firebase from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private firebaseApp: firebase.app.App;
  firebaseConfig: any;

  constructor(private configService: ConfigService) {
    if (!firebase.apps.length) {
      this.firebaseConfig = {
        clientEmail: this.configService.get<string>('FIREBASE_CLIENT_EMAIL'),
        projectId: this.configService.get<string>('FIREBASE_PROJECT_ID'),
        privateKey: this.configService
          .get<string>('FIREBASE_PRIVATE_KEY')!
          .replace(/\\n/g, '\n'),
      };

      this.firebaseApp = firebase.initializeApp({
        credential: firebase.credential.cert({ ...this.firebaseConfig }),
      });
    }else{
      this.firebaseApp = firebase.apps[0]!;
    }
  }

  getAuth = (): firebase.auth.Auth => {
    return this.firebaseApp.auth();
  };

  firestore = (): firebase.firestore.Firestore => {
    return this.firebaseApp.firestore();
  };
}
