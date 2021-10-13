import React from "react";



function Person(props) {
    const person = props.person;

    return (
        <React.Fragment>
            {!person.hasPartner && <div className="person-container">
                {person.hasParent && <div className="vertical-line has-parent"></div> }
                <div className="person">
                    <div className="person-icon"></div>
                    <div className="person-name-container">
                        <p className="person-name">
                            {person.name}
                        </p>
                    </div>
                </div>
                {person.hasChildren && <div className="vertical-line"></div> }
            </div>}
            {person.hasPartner && <div className="person-outer">
                {person.hasParent && <div className="vertical-line has-parent"></div> }
                <div className="person-inner">
                    <div className="person-container partner">
                        <div className="person partner">
                            <div className="person-icon partner"></div>
                            <div className="person-name-container">
                                <p className="person-name">
                                    {person.partner.name}
                                </p>
                            </div>
                        </div>
                    </div>                  
                    <div className="person-container">
                        <div className="person">
                            <div className="person-icon"></div>
                            <div className="person-name-container">
                                <p className="person-name">
                                    {person.name}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="person-container">
                        
                    </div>
                </div>
                {person.hasChildren && <div className="vertical-line"></div> }
            </div> }
       </ React.Fragment>
    );
}

export default Person;