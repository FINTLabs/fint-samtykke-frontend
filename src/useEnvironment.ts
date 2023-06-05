import { envConfig, AppConfig } from './envConfig';
const UseEnvConfig = (): AppConfig => {
   //TODO handle value not in envConfig
   if ((process.env.REACT_APP_ENV !== undefined) /*&& (process.env.REACT_APP_ENV in envConfig)*/) {
      return envConfig[process.env.REACT_APP_ENV.toLowerCase()];
   }
   return envConfig['dev'];
};
export default UseEnvConfig;