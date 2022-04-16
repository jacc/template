import { ChatCommand, MessageCommand, UserCommand } from "../types/command";
import { gas } from "./util/gas";

import { ping } from "./util/ping";
import { hotnfts } from "./util/nansen/hot";
import { nansen_tx } from "./util/nansen/transactions";
import { nansen_wallet } from "./util/nansen/wallet";
import { nansen_volume } from "./util/nansen/volume";
import { nansen_activity } from "./util/nansen/activity";
import { nansen_liquidity } from "./util/nansen/liquidity";

export const chatCommands: ChatCommand[] = [
  ping,
  gas,
  hotnfts,
  nansen_tx,
  nansen_wallet,
  nansen_volume,
  nansen_activity,
  nansen_liquidity,
];

export const messageCommands: MessageCommand[] = [];

export const userCommands: UserCommand[] = [];

export const chatCommandsMap = new Map<string, ChatCommand>(
  Object.entries(
    chatCommands.reduce((all, command) => {
      return { ...all, [command.name]: command };
    }, {} as Record<string, ChatCommand>)
  )
);

export const messageCommandsMap = new Map<string, MessageCommand>(
  Object.entries(
    messageCommands.reduce((all, command) => {
      return { ...all, [command.name]: command };
    }, {} as Record<string, MessageCommand>)
  )
);

export const userCommandsMap = new Map<string, UserCommand>(
  Object.entries(
    userCommands.reduce((all, command) => {
      return { ...all, [command.name]: command };
    }, {} as Record<string, UserCommand>)
  )
);
