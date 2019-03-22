const fs = require('fs');


module.exports.run = async (bot, message, args) => {

    if (args.length === 0){
        message.channel.send("A role is necessary for the command: !add-roles @Moderator");
    }else if (args.length > 0){
        let roles_raw = fs.readFileSync('./roles.json');
        let roles_array = JSON.parse(roles_raw);

        let role = args[0];
        let found = false;

        for (var i = 0; i < roles_array.roles.length; i++){
            if (role === roles_array.roles[i]){
                found = true
                message.channel.send(role + "role is already allowed.");
                return;
            }
        }

        if (!found){
            roles_array.roles.push(role);
            let roles_write = JSON.stringify(roles_array)
            fs.writeFileSync('./roles.json', roles_write);
			message.channel.send(role + "role added successfully.");
        }
    } 

}



module.exports.help = {
    name: "addrole"
}