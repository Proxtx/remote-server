import { authClient } from "./auth.js";
import { clients, initClient } from "../private/clients.js";

export const fetchCommands = (clientId, authKey) => {
  let struct = {
    success: false,
    commands: [],
  };

  if (!authClient(authKey)) {
    struct.error = 1;
    return struct;
  }

  if (!clients[clientId]) initClient();

  struct.success = true;
  //struct.commands = clients[clientId].commands;
  struct.commands = [];

  return struct;
};

export const runFunction = (clientId, authKey, ...args) => {
  let struct = {
    success: false,
  };

  if (!authClient(authKey)) {
    struct.error = 1;
    return struct;
  }

  struct.success = true;

  return struct;
};
