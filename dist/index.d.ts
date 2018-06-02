declare type LoggerArgs = {
    path: string;
    namespace: string;
};
interface ILogger {
    log({ text }: {
        text: string;
    }): void;
    log(text: string): void;
    toFile({ text }: {
        text: string;
    }): void;
    toFile(text: string): void;
}
declare class Logger implements ILogger {
    path: string;
    namespace: string;
    constructor({ path, namespace }: LoggerArgs);
    toFile(args: string | {
        text: string;
    }): void;
    log(args: string | {
        text: string;
    }): void;
}
export { Logger };
//# sourceMappingURL=index.d.ts.map