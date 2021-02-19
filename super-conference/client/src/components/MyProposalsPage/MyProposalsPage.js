import React from 'react';
import './MyProposalsPage.css';
import {
    ListItem,
    ListItemLabel,
    ARTWORK_SIZES
  } from "baseui/list";
import {
    Card,
    StyledBody,
    StyledAction
} from "baseui/card";
import { Button } from "baseui/button";
import PropTypes from "prop-types";
import {proposalType} from "../../propTypes";
import {useDispatch} from "react-redux";
import { EDIT_PROPOSAL } from '../../actions/types';


export default function MyProposalsPage(props){
    
    const dispatch = useDispatch();

    return (
        <div className={"MyProposalsPage"}>
            <Card>
                <StyledBody>
                    <div class="container">
                        <ul>
                            <li><h3>Abstract: </h3> {props.proposal.abstract} </li>
                            <li><h3>File: </h3> {props.proposal.file} </li>
                            <li><h3>Keywords</h3> {props.proposal.keywords} </li>
                        </ul>
                    </div>
                </StyledBody>
                <StyledAction>
                    <Button
                        overrides={{
                        BaseButton: { style: { width: "100%" } }}}
                        onClick = {() => {
                        dispatch({
                            type: EDIT_PROPOSAL,
                            conference: props.proposal
                        });
                        props.setOpen(true);} }>
                        Edit Proposal
                    </Button>
                </StyledAction>
             </Card>
        </div>
    )
};


MyProposalsPage.propTypes = {
    proposal: proposalType.isRequired,
    EDIT_PROPOSAL: PropTypes.func.isRequired,
    setOpen: PropTypes.func.isRequired
  };