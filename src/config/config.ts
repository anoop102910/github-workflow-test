export const config = {
    port: process.env['PORT'] ? process.env['PORT'] : (() => { throw new Error('PORT is not defined'); })(),
} as const;
