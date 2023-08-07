const setUser = (userobj) => {
    return {
        type: 'SET_USER',
        payload: userobj
    }
};

const logout = () => {
    return {
        type: "LOG_OUT"
    }
};

export default {
    setUser,
    logout
}
