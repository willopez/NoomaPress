import Nconf from 'nconf';
import path from 'path';
const env = process.env.NODE_ENV || 'development';
const CONFIG_PATH = 'src/server/config/env';

const loadConfig = function() {
  const basePath = process.cwd(),
    nconf = new Nconf.Provider();

  nconf.file('config', path.join(CONFIG_PATH, `config.${env}.json`));

  // Override port if provided as an argument
  let port = nconf.get('port');
  if (process.env.PORT) {
    port = parseInt(process.env.PORT, 10);
    nconf.set('port', port);
  }

  nconf.set('env', env);
  nconf.set('api_uri', `http://${nconf.get('host')}:${port}/graphql`);

  // TODO: Perform configuration validation

  return nconf;
};

export default loadConfig();
