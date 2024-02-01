# Discord Push Notification OBS Tool

## Introduction
This project is a simple Sveltekit webapp designed to integrate Discord push notifications with OBS (Open Broadcaster Software). It aims to enhance live streaming experiences by seamlessly displaying Discord notifications.

## Features
- Manual Discord notifications right from OBS
- Easy integration with existing OBS setups
- Customizable notification display


## QUICK GUIDE
Add this Custom Browser Dock in OBS [https://discord-push-notification-tool.vercel.app/] (https://discord-push-notification-tool.vercel.app/). 

## 1. Setting Up a Discord Bot and Enabling Developer Mode
### Creating a Discord Bot
1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Create a new application and give it a name.
3. Go to the "Bot" tab and click "Add Bot".
4. Customize your bot (name, profile picture).
5. Copy the bot token (keep this secure).

### 2. Enabling Developer Mode in Discord
1. Open Discord settings.
2. Navigate to 'Advanced' settings.
3. Toggle 'Developer Mode' to enabled.

### 3. Getting Channel IDs
1. Right-click on the text channel in Discord with Developer Mode enabled.
2. Click 'Copy ID' to get the channel's unique identifier.

### 4. Configuring the Bot in Your Project
- Use the bot token and channel IDs in your project configuration as needed in the settings panel of the widget

## Using the Deployed Frontend in Your OBS Project
### Adding as a Custom Browser Source
1. Open OBS (Open Broadcaster Software).
2. Navigate to the scene where you want to display Discord notifications.
3. Click on the 'Docks' > 'Custom Browser Docks...' menu option.
4. Create a new source. Give it a name.
5. In the 'URL' field, enter the following URL: [https://discord-push-notification-tool.vercel.app/](https://discord-push-notification-tool.vercel.app/).
6. Click 'OK' to add the browser source.
7. Click on the gear icon in the dock panel titled to open the settings.
8. Fill in the 'Bot Secret' field with your Discord bot's token.
9. Enter the desired 'Text Channel ID' where you want the notifications to appear.
10. Type your notification 'Message' which might include custom text or commands like @everyone.
11. Include a 'Twitch URL' if you want to send a link with your notifications.
12. Click 'Save' to store your settings.

## Contributing
Contributions to enhance or expand the functionality of this project are welcome. Please follow the standard fork-pull request workflow.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
- Project created by [Matthew Paquette](https://github.com/Paquette1111)
