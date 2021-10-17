export default function Partner(props) {
    const person = props.person;
    const partner = props.partner;

    return (
        <div className="person-outer">
            {person.hasParent && <div className="vertical-line-has-parent"></div> }
            <div className="partners-container">
                <div className="person-inner partner">
                    <div className="person partner">
                        <div className="person-icon partner"></div>
                        <div className="person-name-container">
                            <p className="person-name">
                                {person.partner.name}
                            </p>
                        </div>
                    </div>
                </div>                  
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
                <div className="person-inner">
                        
                </div>
            </div>
            {person.hasChildren && <div className="vertical-line"></div> }
        </div>
    );
}