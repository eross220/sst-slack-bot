import { ApiHandler } from "sst/node/api";
import { App} from '@slack/bolt';
require("dotenv").config();

var Slack = require('node-slack');
var slack = new Slack("https://hooks.slack.com/services/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");

// app.command("/knowledge", async ({ command, ack, say }) => {
//     console.log(app);
//     try {
//       console.log("command",command.user_name);
//       await ack();
//       say("Hello.This is bot developed by Eric.That commnd works correctly!");
 
//     } catch (error) {
//       console.log("err")
//       console.error(error);
//     }
// });

// (async () => {
//     const port = 80
//     // Start your app
//     await app.start();
//     console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
  
// })();
// const app= new App({
//     token: process.env.SLACK_BOT_TOKEN,
//     signingSecret: process.env.SLACK_SIGNING_SECRET,
// });

export const hello = ApiHandler(async (_evt) => {
    //initalize the bot interface 
    
    console.log("event",_evt);
    
     slack.send({
      text:"Hello.This is the test of the node-slack.",
      channel:"directmessage",
      username:"Bot"
     });
      
    // console.log("Hello.Nice to meet you.")
    // return {
    //     statusCode: 200,
    //     body: `Hello world. The time is ${new Date().toISOString()}`,
    // };
});