import WPAPI from 'wpapi';
import config from '~/server/config';
const wp = new WPAPI({ endpoint: config.get('wpapi_uri') });

const resolvers = {
  Query: {
    pageContent: (_, args) => {
      return wp
        .pages()
        .slug(args.slug)
        .then(data => {
          const page = data[0];

          return {
            id: page.id,
            title: page.title.rendered,
            slug: page.slug,
            content: page.content.rendered,
          };
        })
        .catch(err => {
          // Handle errrors
        });
    },
  },
};

export default resolvers;
