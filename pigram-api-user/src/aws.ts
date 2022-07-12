import AWS = require('aws-sdk');
import {config} from './config/config';

const AWS_PROFILE = config.aws_profile.trim();
const AWS_MEDIA_BUCKET = config.aws_media_bucket.trim();
const AWS_REGION = config.aws_region.trim();

// Configure AWS
const credentials = new AWS.SharedIniFileCredentials({profile: AWS_PROFILE});
AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: AWS_REGION,
  params: {Bucket: AWS_MEDIA_BUCKET},
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl( key: string ): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl('getObject', {
    Bucket: AWS_MEDIA_BUCKET,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl( key: string ): string {
  const signedUrlExpireSeconds = 60 * 5;
  return s3.getSignedUrl('putObject', {
    Bucket: AWS_MEDIA_BUCKET,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}
