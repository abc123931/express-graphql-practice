import { QueryResolvers, Resolvers } from '../types';
import Container from '../container';

const container = new Container();

const Query: QueryResolvers = {
  // async movie(_parent, _args, _context, _info) {
  //   throw new AuthenticationError('testmessage');
  // },
  // async user(_parent, args, _context, _info) {
  //   return container.userResolver.user(args.id);
  // },
  async tags(_parent, _args, _context, _info) {
    return container.tagResolver.tags();
  },
};

// const Mutation: MutationResolvers = {
//   async addUser(_parent, args, _context, _info) {
//     return container.userResolver.addUser(args.name);
//   },
// };

export const resolvers: Resolvers = {
  Query,
};
