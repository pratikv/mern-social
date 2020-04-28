const create = async (params, credentials, post) => {
    try {
        let res = await fetch("/api/posts/new/" + params.userId, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + credentials.t
            },
            body: post
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

const listNewsFeed = async (params, credentials, signal) => {
    try {
        let res = await fetch("/api/posts/feed/" + params.userId, {
            method: "GET",
            signal: signal,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + credentials.t
            }
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

const listByUser = async (params, credentials) => {
    try {
        let res = await fetch("/api/posts/by/" + params.userId, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + credentials.t
            }
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

const remove = async (params, credentials) => {
    try {
        let res = await fetch("/api/posts/" + params.postId, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + credentials.t
            }
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}
const like = async (params, credentials, postId) => {
    try {
        let res = await fetch("/api/posts/like/", {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + credentials.t
            },
            body: JSON.stringify({ userId: params.userId, postId: postId })
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}
const unlike = async (params, credentials, postId) => {
    try {
        let res = await fetch("/api/posts/unlike/", {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + credentials.t
            },
            body: JSON.stringify({ userId: params.userId, postId: postId })
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

const comment = async (params, credentials, postId, comment) => {
    try {
        let res = await fetch("/api/posts/comment/", {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + credentials.t
            },
            body: JSON.stringify({ userId: params.userId, postId: postId, comment: comment })
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

const uncomment = async (params, credentials, postId, comment) => {
    try {
        let res = await fetch("/api/posts/uncomment/", {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + credentials.t
            },
            body: JSON.stringify({ userId: params.userId, postId: postId, comment: comment })
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

export { listNewsFeed, listByUser, create, remove, like, unlike, comment, uncomment };