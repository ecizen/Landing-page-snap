import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { auth } from '../../../firebaseConfig';

export default NextAuth({
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.DATABASE_URL,
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async session(session, user) {
      session.user = user;
      return session;
    },
  },
});
