import { createConnection, BaseEntity } from 'typeorm';
import localOption from '../ormconfig.local';

export default async function() {
  const connectOption = process.env.NODE_ENV ? localOption : localOption;

  const connection = await createConnection(connectOption);
  BaseEntity.useConnection(connection);
  console.log('end db connection');
}
