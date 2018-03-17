import axios from 'axios';

import * as CONSTANTS from './constants';

const method_types = {
    get: "GET",
    post: "POST",
    delete: "DELETE",
    put: "PUT"
};

function getHeaders() {
    let user = localStorage.getItem('user');
    user = user && (user !='undefined') ? JSON.parse(localStorage.getItem('user')) : null;
    let headers = {
        'Content-Type': 'application/json'
    };
    if (user && (user.uid || user._id) && user.hash) {
        headers.user_token = user.token;
    }
    return headers;
}

function fetchDataAndProceed(url, method, data) {
    return axios({
        method: method,
        params: method === 'GET' ? data : {},
        data: method !== 'GET' ? data : {},
        url: url,
        baseURL: CONSTANTS.base_url,
        headers: getHeaders()
    });
}

/*--------------------------- APIS ------------------------ */
export const getLocationFromIp = (data, callback) => {
    fetchDataAndProceed('https://freegeoip.net/json/', method_types.get).then(function (response) {
        callback(false, response);
    }).catch(function (error) {
        callback(true, error);
    });
};

export const getHomePageData = () => {
    return fetchDataAndProceed('/pages/home.json', method_types.get);
};

export const getHomePage = () => {
    //this function can be replaced with your backend API
    const pageData = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve({ text: "Your awesome Home Page" });
            } else {
                reject({ text: "Sorry Error occured" });
            }
        }, 3000);
    });
    return pageData;
};

