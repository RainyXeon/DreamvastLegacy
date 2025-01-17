const { VoiceState } = require("discord.js");
const { MainClient } = require("../../manager.js")

module.exports = async (client, oldState, newState) => {

  let guildId = newState.guild.id;
  const player = client.manager.get(guildId);

  if (!player || player.state !== "CONNECTED") return;

  const stateChange = {};

  if (oldState.channel === null && newState.channel !== null)
    stateChange.type = "JOIN";
  if (oldState.channel !== null && newState.channel === null)
    stateChange.type = "LEAVE";
  if (oldState.channel !== null && newState.channel !== null)
    stateChange.type = "MOVE";
  if (oldState.channel === null && newState.channel === null) return;
  if (newState.serverMute == true && oldState.serverMute == false)
    return player.destroy(true);
  if (newState.serverMute == false && oldState.serverMute == true)
    return player.destroy(false);

  if (stateChange.type === "MOVE") {
    if (oldState.channel.id === player.voiceChannel) stateChange.type = "LEAVE";
    if (newState.channel.id === player.voiceChannel) stateChange.type = "JOIN";
  }

  if (stateChange.type === "JOIN") stateChange.channel = newState.channel;
  if (stateChange.type === "LEAVE") stateChange.channel = oldState.channel;

  if (!stateChange.channel || stateChange.channel.id !== player.voiceChannel)
    return;

  stateChange.members = stateChange.channel.members.filter(
    (member) => !member.user.bot
  );

  switch (stateChange.type) {
    case "JOIN":
      if (stateChange.members.size === 1 && player.paused) {
        player.destroy(false);
      }
      break;
    case "LEAVE":
      if (stateChange.members.size === 0 && !player.paused && player.playing) {
        player.destroy(true)
      }
      break;
  }
};