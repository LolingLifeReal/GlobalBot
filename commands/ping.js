  module.exports={
    name:'ping',
    description: "Command ini digunakan untuk Ping",
    execute(message, args){
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms`);
        }
      };