import {EDIT_PROPOSAL} from '../actions/conferenceActions.';


const initialState = {
    conferences: [
        {
            abstract: "abstract1.pdf",
            file: "file1.pdf",
            keywords: "hello,ce,face"
        },
        {
            abstract: "abstract2.pdf",
            file: "file2.pdf",
            keywords: "hello,ce,face"
        }],
        editProposal: null
}


export default function(state = initialState, action)
{
    let new_state = {};
    switch (action.type)
    {
        case EDIT_PROPOSAL:
            new_state = {...state};
            new_state.editProposal = action.proposal;
            return new_state;
        default:
            return state;
    }
}
