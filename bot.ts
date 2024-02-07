import { Client, GatewayIntentBits } from 'discord.js'
import {addRoleToUser, getMessage, getUserById, registerCommands, sendMessage} from "./helpers"

import config from './config.json'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.on('ready', async () => {
  await registerCommands()
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return

  if (interaction.commandName === 'aprovar' || interaction.commandName === 'recusar') {
    const userID: string = interaction.options.get('user')?.value as string

    if (userID) {
      const user = await getUserById(userID)

      const isApprove = interaction.commandName === 'aprovar'

      if (user) {
        try {
          await interaction.reply(isApprove ? `Aprovando ${userID}...` : `Avisando usuário ${userID}...`)

          if (isApprove) await addRoleToUser(userID)

          const message = getMessage(userID, isApprove ? config.approve_message : config.deny_message)

          await sendMessage(config.channel_id, message)
        } catch (e) {
          console.error(e)
        } finally {
          await interaction.deleteReply()
        }
      } else {
        await interaction.reply(`Usuário ${userID} não encontrado.`)
      }
    }
  }
})

client.login(config.token)
