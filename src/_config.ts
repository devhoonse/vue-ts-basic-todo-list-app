interface IAppConfig {
  title: string;
  apiUrl: string;
}

type BUILD_MODE = "production" | "development" | "test";
type AppConfigTypes = { [type in BUILD_MODE]: IAppConfig };

const config: AppConfigTypes = {
  development: {
    title: "Todo List - dev",
    apiUrl: "http://127.0.0.1:3000/dev",
  },
  production: {
    title: "Todo List",
    apiUrl: "https://",
  },
  test: {
    title: "Todo List - test",
    apiUrl: "http://127.0.0.1:3000",
  },
};

function getConfig(): IAppConfig {
  return config[process.env.NODE_ENV as BUILD_MODE];
}

export default getConfig;
