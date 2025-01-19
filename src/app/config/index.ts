import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_pass: process.env.DEFAULT_PASS,
  bcrypt_salt: process.env.BCRYPT_SALT_ROUNDS,
  access_secret_token: process.env.ACCESS_SECRET,
  refresh_secret_token: process.env.REFRESH_SECRET,
  access_expires_in: process.env.ACCESS_EXPIRESIN,
  refresh_expires_in: process.env.REFRESH_EXPIRESIN,
};
