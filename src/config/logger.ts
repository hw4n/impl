import chalk from 'chalk';

function timestamp() {
    const d = new Date();
    return `[${d.toLocaleDateString()} ${d.toLocaleTimeString()}]`;
}

export function info(message: string) {
    console.log(chalk.blue(`${timestamp()} [INFO] ${message}`));
}

export function warning(message: string) {
    console.log(chalk.yellow(`${timestamp()} [WARN] ${message}`));
}

export function error(message: string) {
    console.error(chalk.red(`${timestamp()} [ERROR] ${message}`));
}

export function success(message: string) {
    console.log(chalk.green(`${timestamp()} [DONE] ${message}`));
}

export function debug(message: string) {
    console.log(chalk.bgCyan(`${timestamp()} [DEBUG] ${message}`));
}

export default {
    info,
    warning,
    error,
    success,
    debug
};
