import autoTKWarn from './auto-tk-warn/index.js';
import discordAdminBroadcast from './discord-admin-broadcast/index.js';
import discordAdminCamLogs from './discord-admin-cam-logs/index.js';
import discordChat from './discord-chat/index.js';
import discordChatAdminRequest from './discord-admin-request/index.js';
import discordDebug from './discord-debug/index.js';
import discordRCON from './discord-rcon/index.js';
import discordServerStatus from './discord-server-status/index.js';
import discordTeamkill from './discord-teamkill/index.js';
import mapvote123 from './mapvote/mapvote-123.js';
import mapvoteDidYouMean from './mapvote/mapvote-did-you-mean.js';
import mysqlLog from './mysql-log/index.js';
import seedingMessage from './seeding-message/index.js';
import teamRandomizer from './team-randomizer/index.js';

export {
  autoTKWarn,
  discordAdminBroadcast,
  discordAdminCamLogs,
  discordChat,
  discordChatAdminRequest,
  discordDebug,
  discordRCON,
  discordServerStatus,
  discordTeamkill,
  mapvote123,
  mapvoteDidYouMean,
  mysqlLog,
  seedingMessage,
  teamRandomizer
};

const plugins = [
  autoTKWarn,
  discordAdminBroadcast,
  discordAdminCamLogs,
  discordChat,
  discordChatAdminRequest,
  discordDebug,
  discordRCON,
  discordServerStatus,
  discordTeamkill,
  mapvote123,
  mapvoteDidYouMean,
  mysqlLog,
  seedingMessage,
  teamRandomizer
];

const namedPlugins = {};
for (const plugin of plugins) {
  namedPlugins[plugin.name] = plugin;
}
export default namedPlugins;
