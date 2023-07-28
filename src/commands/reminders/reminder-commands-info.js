const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'reminders-info',
  description: 'Get information about reminder commands.',
  callback: (client, interaction) => {
    const embed = new EmbedBuilder()
      .setColor('#3498db')
      .setTitle('Reminder Commands')
      .setDescription(
        'Here is information about the different reminder commands:'
      )
      .addFields(
        {
          name: '1. Remind Once',
          value:
            'Command: remind-once\nDescription: Will create a one-time reminder which will run after the time-period the user enters is over.',
        },
        {
          name: '2. Time-based Reminder',
          value:
            'Command: time-based-reminder\nDescription: Will schedule a reminder with precise time settings for specific times every day or on selected days of the week.\nExamples: 4 minutes: Every 4th minute of the hour, 2 hours: Every 2nd hour of the day, Thursday: Every Thursday of the week etc...',
        },
        {
          name: '3. Recurring Reminder',
          value:
            'Command: recurring-reminder\nDescription: Will create a new recurring reminder with customizable intervals. Different from Time-based-reminder as it will execute the reminder starting from when the user creates it.',
        }
      )
      .setTimestamp();

    interaction.reply({ embeds: [embed], ephemeral: false });
  },
};
