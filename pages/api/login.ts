import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import api from '../../lib/api';

const COOKIE_PASSWORD: string = process.env.COOKIE_PASSWORD!;

const loginRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  try {
    const response = await api.post(
      '/auth/login',
      JSON.stringify({ email, password })
    );

    const { token, user } = response.data;

    req.session.auth = {
      token,
      user,
    };
    await req.session.save();

    return res.json({ email, password });
  } catch (err) {
    return res.status(401).json({ msg: 'incorrect credentials' });
  }
};

export default withIronSessionApiRoute(loginRoute, {
  cookieName: 'session',
  password: COOKIE_PASSWORD,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
