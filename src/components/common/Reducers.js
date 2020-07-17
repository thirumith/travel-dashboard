import traveler_json from '../data/travelers.json';

function travelDataReducer(state = traveler_json, action) {
    let travelData = '';
    switch (action.type) {
        case "add":
            travelData = [...state, action.payload];
            return travelData;
        case "delete":
            travelData = [...state];
            let pos = action.index;
            console.log("index before splice", action.index);
            travelData.splice(pos, 1);
            console.log("after splice", travelData);
            return travelData;
        default:
            travelData = [...state];
            console.log(travelData);
            return travelData;
    }
}

export default travelDataReducer;