import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  token: process.env.DISCORD_TOKEN || '',
  prefix: process.env.PREFIX || '!',
  deploymentFingerprint: process.env.DEPLOYMENT_FINGERPRINT || '',
  deploymentFingerprintExpected: process.env.DEPLOYMENT_FINGERPRINT_EXPECTED || ''
};

export default config;
