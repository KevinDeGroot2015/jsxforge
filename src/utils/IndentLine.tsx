export const indentLine = (line: string, level: number = 1) => {
    return `${" ".repeat(4 * level)}${line}`;
};
