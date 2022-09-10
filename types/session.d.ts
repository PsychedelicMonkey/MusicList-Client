import * as IronSessionData from 'iron-session';

declare module 'iron-session' {
  interface IronSessionData {
    auth?: {
      token: string;
      user?: {
        _id: string;
        firstName: string;
        lastName: string;
      };
    };
  }
}
