
export function get(key: string): string {
    let dict = document.cookie.split(";").reduce((prev: Map<string, string>, current) => {
        const [k, v] = current.split("=", 2);
        prev.set(k.trim(), v);
        return prev;
    }, new Map());

    return dict.get(key);
}

export function setObject(objectVal: Record<string, any>) {
    Object.keys(objectVal).forEach((k: string) => {
        document.cookie = `${k}=${objectVal[k]};`;
    });
}