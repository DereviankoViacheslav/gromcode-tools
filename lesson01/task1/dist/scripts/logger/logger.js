function createLogger(name) {
    const logs = [];

    return {
        log(message) {
            logs.push(`log - ${name} - ${message}`);
        },
        error(errorText) {
            logs.push(`log - ${name} - ${errorText}`);
        },
        getLogs() {
            return logs;
        },
    };
};

export { createLogger };
