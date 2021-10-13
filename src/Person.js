


function Person(props) {
    const person = props.person;

    return (
       <div className="person-container">
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
       </div>
    );
}

export default Person;