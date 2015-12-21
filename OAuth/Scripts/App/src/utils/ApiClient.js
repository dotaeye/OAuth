import superagent from 'superagent';
import clientConfig from '../configs';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
    let adjustedPath = path[0] !== '/' ? '/' + path : path;
    adjustedPath = clientConfig.virtualPath + clientConfig.apiRoot + adjustedPath;
    return adjustedPath;
}

class _ApiClient {
    constructor(req) {
        methods.forEach((method) =>
            this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
                const request = superagent[method](formatUrl(path));
                if (params) {
                    request.query(params);
                }
                if (data) {
                    request.send(data);
                }
                request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
            }));
    }
}

const ApiClient = _ApiClient;

export default ApiClient;
