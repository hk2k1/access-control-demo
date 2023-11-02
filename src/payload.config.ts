import { buildConfig } from 'payload/config';
import path from 'path';
import { Users } from './collections/Users';
import { Sites } from './collections/Sites';
import { Media } from './collections/Media';
import { ContactRequests } from './collections/ContactRequests';
import { Pages } from './collections/Pages';
import { seed } from './seed';
import { Projects } from './collections/Projects';
import { Violations } from './collections/Violations';

export default buildConfig({
  admin: {
    user: Users.slug,
    webpack: (config: any) => ({
      ...config,
      resolve: {
        ...config.resolve,
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        // alias: {
        //   ...config.resolve.alias,
        //   fs: mockModulePath,
        // }
      }
    })
  },
  collections: [
    ContactRequests,
    Media,
    Pages,
    Sites,
    Users,
    Projects,
    Violations,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  onInit: async (payload) => {
    // If the `env` var `PAYLOAD_SEED` is set, seed the db
    if (process.env.PAYLOAD_SEED) {
      await seed(payload);
    }
  }
});
