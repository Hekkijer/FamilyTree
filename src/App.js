import Person from './Person';

// const peopleObject = {
//         id: 1,
//         name: "Albert",
//         hasChild: true,
//         hasManyChildren: false,
//         hasParent: false,
//         child: {
//             id: 2,
//             name: 'Tom',
//             hasChild: true,
//             hasManyChildren: false,
//             hasParent: true,
//             child: {
//                 id: 3,
//                 name: 'Tom',
//                 hasChild: false,
//                 hasParent: true
//             }
//         }
// }

const peopleObject = {
    id: 1,
    name: "Albert",
    hasChild: true,
    hasManyChildren: true,
    children: [
        {
            id: 2,
            name: "Tomash",
            hasChild: true,
            hasManyChildren: false,
            hasParent: true,
            child: {
                name: "Papio",
                hasChild: false,
                hasParent: true
            }
        },
        {
            id: 3,
            name: "James",
            hasChild: true,
            hasManyChildren: true,
            hasParent: true,
            children: [
                {
                    name: "Vergilio",
                    hasChild: false,
                    hasParent: true,
                },
                {
                    name: "Huan",
                    hasChild: false,
                    hasParent: true,
                },
                {
                    name: "Vasilissa",
                    hasChild: false,
                    hasParent: true,
                }
            ]
        },
        {
            id: 4,
            name: "Anna",
            hasChild: false,
            hasParent: true
        }
    ]
}





function App() {

    let peopleArray = [];

    // Convert peopleObject to peopleArray & render
    function peopleObjectToPeopleArray(peopleObject) {

        // If array
        if (Array.isArray(peopleObject)) {

            // Clone array of objects
            let array = [];

            for (let i = 0; i < peopleObject.length; i++) {
                let person =  {}
                
                for (let key in peopleObject[i]) {
                    if (key !== 'child' && key !== 'children') {
                        person[key] = peopleObject[i][key]
                    }
                }
                array.push(person)
            }

            peopleArray.push(array)


            // Cant start function again before define their children into one generation
            for (let i = 0; i < peopleObject.length; i++) {
                console.log("hey")
                if (peopleObject[i].hasChild) {
                    console.log("hey2")
                    if (peopleObject[i].hasManyChildren) {
                        console.log("hey3")
                        peopleObjectToPeopleArray(peopleObject[i].children)
                    }
        
                    peopleObjectToPeopleArray(peopleObject[i].child)
                }
            }
        } 

        // If object
        else if (typeof(peopleObject) === 'object'){

            // Clone object 
            let person = {};

            for (let key in peopleObject) {
                if (key !== 'child' && key !== 'children') {
                    person[key] = peopleObject[key];
                }
            }
    
            peopleArray.push(person)

            if (peopleObject.hasChild) {
                if (peopleObject.hasManyChildren) {
                    peopleObjectToPeopleArray(peopleObject.children)
                }
    
                peopleObjectToPeopleArray(peopleObject.child)
            }
        }
    }

    peopleObjectToPeopleArray(peopleObject)

    console.log(peopleArray)

    return (
        <div className="branch-container">
            {peopleArray.map((person) => (
                <Person person={person} key={person.id}/>
            ))}
        </div>
    );
}

export default App;