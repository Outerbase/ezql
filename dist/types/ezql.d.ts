export type EZQLOpts = {
    token: string;
    host?: string;
};
export declare enum Prompt {
    sql = "sql",
    data = "data"
}
export declare const DEFAULT_HOST = "api.outerbase.com";
export declare class EZQL {
    token: string;
    host: string | undefined;
    constructor({ token, host }: EZQLOpts);
    get baseUrl(): string;
    prompt(phrase: string, type: Prompt): Promise<string>;
}
//# sourceMappingURL=ezql.d.ts.map