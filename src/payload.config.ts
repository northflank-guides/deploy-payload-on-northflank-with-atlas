import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
// import Examples from './collections/Examples';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
  rateLimit: {
    trustProxy: true,
  },
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
});
