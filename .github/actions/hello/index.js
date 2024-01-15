import { debug, warning, error as _error, getInput, setOutput, exportVariable, startGroup, endGroup, setFailed } from "@actions/core";
import { context } from "@actions/github";

try {
    debug('Debug Message');
    warning('Warning Message');
    _error('Error Message');

    const name = getInput('who-to-greet');

    console.log(`Hello ${name}`);

    const time = new Date();
    setOutput("time", time.toTimeString());

    exportVariable("HELLO_TIME", time);

    startGroup("Logging github context");
    console.log(JSON.stringify(context, null, 2))
    endGroup();
    
} catch (error) {
    setFailed(error.message)
}


