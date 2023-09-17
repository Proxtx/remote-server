import config from "@proxtx/config";

export const authClient = (key) => {
  return config.clientKey == key;
};
