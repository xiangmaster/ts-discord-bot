import config from '../config';
import { log } from './logger';

export const verifyDeploymentFingerprint = (): boolean => {
  const expected = config.deploymentFingerprintExpected.trim();
  const actual = config.deploymentFingerprint.trim();

  if (!expected) {
    if (actual) {
      log(`Deployment fingerprint set (${actual}).`);
    }
    return true;
  }

  if (!actual) {
    console.error('DEPLOYMENT_FINGERPRINT is missing but required.');
    return false;
  }

  if (actual !== expected) {
    console.error(`Deployment fingerprint mismatch. Expected ${expected}, got ${actual}.`);
    return false;
  }

  log(`Deployment fingerprint verified (${actual}).`);
  return true;
};
