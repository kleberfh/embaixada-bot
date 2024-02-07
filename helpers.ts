import {REST, Routes} from "discord.js";
import config from "./config.json";
import {commands} from "./commands";

const rest = new REST({ version: '10' }).setToken(config.token)

export const registerCommands = async () => {
  try {
    console.log('Started refreshing application (/) commands.')

    await rest.put(Routes.applicationCommands(config.client_id), { body: commands })

    console.log('Successfully reloaded application (/) commands.')
  } catch (error) {
    console.error(error);
  }
}

export const getMessage = (userId: string, message: string) => {
  return message.replace('{USER}', `<@${userId}>`)
}

export const getUserById = async (id: string) => {
  try {
    return await rest.get(Routes.user(id))
  } catch (error) {
    console.error(error)
  }
}

export const sendMessage = async (channelId: string, content: string) => {
  try {
    await rest.post(Routes.channelMessages(channelId), { body: { content } })
  } catch (error) {
    console.error(error)
  }
}

export const addRoleToUser = async (userId: string) => {
  const roleID = config.role_id

  try {
    await rest.put(Routes.guildMemberRole(config.guild_id, userId, roleID))
  } catch (error) {
    console.error(error)
  }
}
