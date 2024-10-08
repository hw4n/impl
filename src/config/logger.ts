// import chalk from 'chalk';

function timestamp() {
    const d = new Date();
    return `[${d.toLocaleDateString()} ${d.toLocaleTimeString()}]`;
}

export function info(message: string) {
    console.log(`${timestamp()} [INFO] ${message}`);
}

export function warning(message: string) {
    console.log(`${timestamp()} [WARN] ${message}`);
}

export function error(message: string) {
    console.error(`${timestamp()} [ERROR] ${message}`);
}

export function success(message: string) {
    console.log(`${timestamp()} [DONE] ${message}`);
}

export function debug(message: string) {
    console.log(`${timestamp()} [DEBUG] ${message}`);
}

export default {
    info,
    warning,
    error,
    success,
    debug
};
