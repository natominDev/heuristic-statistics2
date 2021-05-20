import { render } from '@testing-library/react';
import React, { Component, useEffect, useState } from 'react';
import './App.css';

function InputForm (props) {

    const [inputName, setInputName] = useState("");
    
    const doChangeName = (event) => {
        setInputName(event.target.value);
    }

    const doSubmit = (event) => {
        if(inputName == '') inputName = 'User';
        props.setName(inputName);
        event.preventDefault();
    }

    useEffect(() => {
        let rating = -1;
        for(let i = 0; i < props.ratingData.length; ++i){
            if(props.ratingData[i].name == props.userName){
                rating = props.ratingData[i].performance;
            }
        }
        if(rating == -1) rating = 0;
        props.setRating(rating);
    })

    return (
        <div className="mb-3">
            <form onSubmit={doSubmit}>
                <div className="form-group">
                    <label>Account Name</label>
                    <input type="text" className="form-control" onChange={doChangeName} />
                </div>
                <input type="submit" className="btn btn-primary" value="Enter" />
            </form>
            <h3 className="alert alert-primary mt-3">
                <p>{props.userName} 's rating is {props.userRating}.</p>
            </h3>
        </div>
    )
}

export default InputForm;