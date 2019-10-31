import { ConnectionOptions } from 'typeorm';
import { Tags } from './src/model/entities/Tags';

const localOption: ConnectionOptions = {
  type: 'sqlite',
  database: './database.sql',
  entities: [Tags],
  synchronize: true,
  logging: true,
};

// const localOption: ConnectionOptions = {
//   type: 'postgres',
//   host: '',
//   port: 5432,
//   ssl: true,
//   username: '',
//   password: '',
//   database: '',
//   entities: [Tags],
//   synchronize: false,
//   logging: true,
// };

export default localOption;
