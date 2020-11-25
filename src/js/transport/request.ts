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
        const file = new File([blob], 'file.xlsx', { type: data.headers.get('Content-Type') });

        const link = document.createElement('a');
        // link.setAttribute('download', undefined);
        link.href = URL.createObjectURL(file);
        link.click();
        URL.revokeObjectURL(link.href);
    }).then(() => undefined);
}

export default function Request<T>(params: Record<string, unknown>): Promise<T> {
    return fetch('/rpc', {
        method: 'POST',
        body: JSON.stringify(params)
    }).then((response: Response) => {
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
