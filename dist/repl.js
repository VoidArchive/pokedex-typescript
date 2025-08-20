export function cleanInput(input) {
    return input.trim().toLowerCase().split(/\s+/);
}
export function startREPL(state) {
    state.rl.prompt();
    state.rl.on('line', (input) => {
        const words = cleanInput(input);
        if (words.length === 0 || words[0] === '') {
            state.rl.prompt();
            return;
        }
        const commandName = words[0];
        const command = state.commands[commandName];
        if (command) {
            try {
                command.callback(state);
            }
            catch (error) {
                console.error(`Error executing command: ${error}`);
            }
        }
        else {
            console.log("Unknown command");
        }
        state.rl.prompt();
    });
}
