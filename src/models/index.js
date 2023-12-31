// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Room, Message, User, UserRoom } = initSchema(schema);

export {
  Room,
  Message,
  User,
  UserRoom
};