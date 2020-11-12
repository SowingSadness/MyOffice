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

export default function Request<T>(params: Record<string, unknown>) {
    return fetch('/rpc', {
        method: 'POST',
        body: JSON.stringify(params)
    }).then((response) => {
        return response.json();
    }).then<T>((data) => {
        if ("result" in data) {
            return data.result;
        }

        return Promise.reject(data.error);
    });
}
