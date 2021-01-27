import * as auth from "../auth.blocks/auth";

interface IRpcResponse<T> {
    result: T
}

export interface IRpcErrorObject {
    code?: number
    message?: string
    data?: string
}

export interface IRpcError {
    error: IRpcErrorObject
}

function download(data: Response): Promise<void> {
    return data.blob().then((blob: Blob) => {
        let fileName = undefined;
        if (data.headers.has('Content-Disposition')) {
            const searchName = data.headers.get('Content-Disposition').match(/filename=\"(.+)\"/);
            fileName = searchName.length > 1 ? searchName[1] : undefined;
        }

        const file = new File([blob], fileName, { type: data.headers.get('Content-Type') });
        const link = document.createElement('a');
        if (fileName) {
            link.setAttribute('download', file.name);
        }
        link.href = URL.createObjectURL(file);
        link.click();
        URL.revokeObjectURL(link.href);
    }).then(() => undefined);
}

export default function Request<T>(params: Record<string, unknown>, noCache: boolean = false): Promise<T> {
    const url = noCache ? '/rpc' : '/rpc?r=' + Math.random();
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
    }).then((response: Response) => {
        if (response.status === 401) {
            auth.logout();
            window.location.reload();
        }
        return response.json();
    }).then<T>((data: IRpcResponse<T> | IRpcError) => {
        if ("result" in data) {
            return data.result;
        }

        return Promise.reject(data.error);
    });
}

export function Download(params: Record<string, unknown>): Promise<void> {
    params['__download'] = true;

    return fetch('/rpc', {
        method: 'POST',
        body: JSON.stringify(params)
    }).then(download);
}
