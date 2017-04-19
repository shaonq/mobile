export const request = (url, method, body) => {
    let isOk;
    return new Promise((resolve, reject) => {
        fetch(getUrl(url), {
            method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body
        })
            .then((response) => {
                isOk = !!response.ok;
                return response.json();
            })
            .then((responseData) => {
                if (isOk) {
                    resolve(responseData);
                } else {
                    reject(responseData);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};