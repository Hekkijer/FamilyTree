import Sibling from './Sibling';

function Person(props) {
    const person = props.person;
    const hasChild = person.hasChild;
    const hasParent = person.hasParent
    const name = person.name;
    const isArray = Array.isArray(person);

    let linesType;
    if (hasChild) {
        if (hasParent) linesType = "has-child has-parent";
        else linesType = "has-child"
    }
    if (hasParent) {
        if (hasChild) linesType = "has-child has-parent";
        else linesType = "has-parent";
    }

    // If not array
    if (!isArray) {
        return(
            <div className="generation-container">
                <div className={"person-container " + linesType}>
                    {hasParent && <div className="horizontal-line"></div> }
                    <div className="person">
                        <div className="person-icon"></div>
                        <div className="person-name-container">
                            <p className="person-name">
                                {name}
                            </p>
                        </div>
                    </div>
                    {hasChild && <div className="horizontal-line"></div>}
                </div>
            </div>
        );
    }

    // If array
    else if (isArray) {
        return (
            <div className="generation-container">
                <div className="siblings-generation-outer">
                    <div className="vertical-line"></div>
                    <div className="siblings-generation-inner">
                        {person.map((person) => (
                            <Sibling person={person} key={person.id}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Person;