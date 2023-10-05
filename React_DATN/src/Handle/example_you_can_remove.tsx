import { produce } from "immer";

const Initial = {
    dataCategories: [],
} as any;

const example_you_can_remove = (state = Initial, action:any) => {
    return produce(state, draff => {
        switch (action.type) {
            case "API_Category":
                draff.dataCategories = action.payload;
                return;
            case "add_Category":
                draff.dataCategories.push(action.payload);
                return;
            case "update_Category":
                draff.dataCategories = draff.dataCategories.map((items:any) => items._id == action.payload._id ? action.payload : items);
                return;
            case "remove_Category":
                draff.dataCategories = draff.dataCategories.filter((items:any) => items._id != action.payload);
                return;
            default:
                return state;
        };
    });
};

export default example_you_can_remove
