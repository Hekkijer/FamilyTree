import React from "react";
import Partner from './Partner';



export default function Person(props) {
    const person = props.person;

    if (person.partner) {
        return (
            <Partner person={person}/>
        );
    }

    else {
        return(
            <div className="person-outer">
                {person.hasParent && <div className="vertical-line-has-parent"></div> }
                <div className="person-inner">
                    <div className="person">
                        <div className="person-icon"></div>
                        <div className="person-name-container">
                            <p className="person-name">
                                {person.name}
                            </p>
                        </div>
                    </div>
                </div>
                {person.hasChildren && <div className="vertical-line"></div> }
            </div>
        );
    }
}