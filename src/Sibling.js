
function Sibling(props) {
    const person = props.person;
    const hasChild = person.hasChild;
    const hasParent = person.hasParent;

    let linesType;
    if (hasChild) {
        if (hasParent) linesType = "has-child has-parent";
        else linesType = "has-child"
    }
    if (hasParent) {
        if (hasChild) linesType = "has-child has-parent";
        else linesType = "has-parent";
    }

    return (
        <div>
            <div className={"person-container " + linesType}>
                <div className="horizontal-line up"></div>   
                <div className="person">
                    <div className="person-icon"></div>
                    <div className="person-name-container">
                        <p className="person-name">
                            {person.name}
                        </p>
                    </div>
                </div>
                {hasChild && <div className="horizontal-line"></div>}
            </div>
        </div>
    );
}

export default Sibling;