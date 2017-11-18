import WPAPI from 'wpapi';
import config from '~/server/config';
const wp = new WPAPI({ endpoint: config.get('wpapi_uri') });

const resolvers = {
  Query: {
    pageContent: async (_, args) => {
      let response = null;

      try {
        response = await wp.pages().slug(args.slug);

        // Attempt to lookup a post, if no page was found.
        if (!response.length) {
          response = await wp.posts().slug(args.slug);
        }
      } catch (error) {
        console.log('API ERROR: ', error);
      }

      if (!response) {
        return {};
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
