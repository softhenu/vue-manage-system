import request from '../utils/request';

export const fetchA02Data = () => {
    return request({
        url: '/api/app01/list/A02/',
        method: 'get',
        headers: {
            Authorization: `Basic ${localStorage.getItem("auth_str")}`,
        }
    });
};

export const fetchA04Data  = () => {
    return request({
        url: '/api/app01/list/A04/',
        method: 'get',
        headers: {
            Authorization: `Basic ${localStorage.getItem("auth_str")}`,
        }
    });
};
export const fetchB01Data  = () => {
    return request({
        url: '/api/app01/list/B01/',
        method: 'get',
        headers: {
            Authorization: `Basic ${localStorage.getItem("auth_str")}`,
        }
    });
};

export const fetchA03Data  = () => {
    return request({
        url: '/api/app01/list/A03/',
        method: 'get',
        headers: {
            Authorization: `Basic ${localStorage.getItem("auth_str")}`,
        }
    });
};

export const fetchUserData = () => {
    return request({
        url: './mock/user.json',
        method: 'get'
    });
};

export const fetchRoleData = () => {
    return request({
        url: './mock/role.json',
        method: 'get'
    });
};

export const fetchlanguage1Data = () => {
    return request({
        url: './mock/language1.json',
        method: 'get'
    });
};

export const fetchMetricDetail = () => {
    return  request({
        url: '/api/app01/list/A01_defi/',
        method: 'get',
        headers: {
            Authorization: `Basic ${localStorage.getItem("auth_str")}`,
        }
    });
}

export const fetchTerms = () => {
    return  request({
        url: '/api/app01/list/Defi/',
        method: 'get',
        headers: {
            Authorization: `Basic ${localStorage.getItem("auth_str")}`,
        }
    });
}

export const postDetail = (json) => {
    return  request({
        url: '/api/app01/list/seond_defi/',
        method: 'post',
        headers: {
            Authorization: `Basic ${localStorage.getItem("auth_str")}`,
            "Content-Type": "application/json"
        },
        data: json
    });
}

export const editDetail = (json, id) => {
    return  request({
        url: `/api/app01/list/A01_defi/detail/${id}`,
        method: 'post',
        headers: {
            Authorization: `Basic ${localStorage.getItem("auth_str")}`,
            "Content-Type": "application/json"
        },
        data: json
    });
}

export const editTerm = (json, id) => {
    return  request({
        url: `/app01/list/Defi/detail/${id}`,
        method: 'post',
        headers: {
            Authorization: `Basic ${localStorage.getItem("auth_str")}`,
            "Content-Type": "application/json"
        },
        data: json
    });
}