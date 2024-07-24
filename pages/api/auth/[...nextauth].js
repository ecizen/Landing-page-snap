// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import  GoogleProvider from 'next-auth/providers/google'
import firebase from '../../../lib/firebase2';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === 'google') {
        const token = await firebase.auth().signInWithCredential(
          firebase.auth.GoogleAuthProvider.credential(account.idToken)
        );
        user.id = token.user.uid;
        return true;
      }
      return false;
    },
    async session(session, user) {
      session.user.uid = user.id;
      return session;
    },
  },
  
});
