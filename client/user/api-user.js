const create = async (user) => {
    try {
        let res = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return await res.json()
    } catch (err) {
        console.log(err);
    }
}

const list = async (signal) => {
    try {
        let res = await fetch("/api/users/", {
            method: "GET",
            signal: signal
        })
        return await res.json()
    } catch (err) {
        console.error(err);
    }
}

const read = (params, credentials, signal) => {
    return fetch("/api/users/" + params.userId, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + credentials.t
        },
        signal: signal
    }).then(res => {
        return res.json();
    }).catch(err => {
        console.error(err);
    });
};

const update = async (params, credentials, user) => {
    try {
        let res = await fetch("/api/users/" + params.userId, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + credentials.t
            },
            body: user
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

const remove = (params, credentials) => {
    return fetch("/api/users/" + params.userId, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + credentials.t
        }
    }).then(res => {
        return res.json();
    }).catch(err => {
        console.error(err);
    });
};

const follow = async (params, credentials, followId) => {
    try {
        let res = await fetch("/api/users/follow/", {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + credentials.t
            },
            body: JSON.stringify({ userId: params.userId, followId })
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

const unfollow = async (params, credentials, unfollowId) => {
    try {
        let res = await fetch("/api/users/unfollow/", {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + credentials.t
            },
            body: JSON.stringify({ userId: params.userId, unfollowId })
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

const findPeople = async(params, credentials, signal)=>{
    try {
        let res = await fetch("/api/users/findpeople/"+params.userId, {
            method: "GET",
            signal: signal,
            headers:{
                "Accept" : "application/json",
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + credentials.t 
            }
        });
        return res.json();
    } catch (err) {
        console.error(err);
    }
}

export { read, remove, list, create, update, follow, unfollow, findPeople };
