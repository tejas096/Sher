import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/user";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
      callbackURL: `${process.env.CLIENT_URL}/api/auth/google/callback`,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({
          email: profile.emails && profile.emails?.[0]?.value,
        });
        if (existingUser) return done(null, existingUser);

        const newUser = await User.create({
          name: profile.displayName,
          email: profile.emails && profile.emails?.[0]?.value,
          password: "xmewguh5876389#$%^&*:{}<>HUWEH",
        });
        done(null, newUser);
      } catch (err) {
        done(err as any);
      }
    }
  )
);
