import React from "react";


const Boxes = (props) => {
    return (       
        <div className="card">
            <h1> {props.name} </h1>
            <div className="data">
                <div className="keys">
                    <p>Title: </p>
                    <p>Age: </p>           
                </div>
                <div className="values">
                    <p> {props.title} </p>
                    <p> {props.age} </p> 
                </div>
                <div className="langs">
                <ul>{props.langs}</ul>
                </div>
            </div>
        </div>
    )
};

export default Boxes;