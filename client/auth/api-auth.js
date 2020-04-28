const signin = async (user) => {
    try {
        let res = await fetch("/auth/signin", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(user)
        });
        return await res.json();

    } catch (err) {
        console.error(err);
    }
}

const signout = async () => {
    try {
        let res = await fetch("/auth/signout", {
            method: "GET"
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

export { signin, signout };