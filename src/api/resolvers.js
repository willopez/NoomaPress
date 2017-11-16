import WPAPI from 'wpapi';
import config from '~/server/config';
const wp = new WPAPI({ endpoint: config.get('wpapi_uri') });

const resolvers = {
  Query: {
    pageContent: async (_, args) => {
      let response = null;

      try {
        response = await wp.pages().slug(args.slug);
      } catch (error) {
        console.log('API ERROR: ', error);
      }

      response = response[0];

      return {
        id: response.id,
        title: response.title,
        content: response.content.rendered,
      };
    },
  },
};

export default resolvers;
