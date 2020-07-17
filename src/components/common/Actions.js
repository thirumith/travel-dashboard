export function addNewTravel(payload) {
    const action = {
        type: "add",
        payload
    }
    return action;
}

export function deleteTravel(index) {
    const action = {
        type: "delete",
        index
    }
    return action;
}