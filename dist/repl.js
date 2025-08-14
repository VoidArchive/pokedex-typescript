import * as readline from 'readline';
import { getCommands } from './command.js';
export function cleanInput(input) {
    return input.trim().toLowerCase().split(/\s+/);
}
export function startREPL() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > '
    });
    const commands = getCommands();
    rl.prompt();
    rl.on('line', (input) => {
        const words = cleanInput(input);
        if (words.length === 0 || words[0] === '') {
            rl.prompt();
            return;
        }
        const commandName = words[0];
        const command = commands[commandName];
        if (command) {
            try {
                command.callback(commands);
            }
            catch (error) {
                console.error(`Error executing command: ${error}`);
            }
        }
        else {
            console.log("Unknown command");
        }
        rl.prompt();
    });
}
