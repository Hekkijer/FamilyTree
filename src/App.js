import React from 'react';
import Branch from './Branch';
import ScrollContainer from 'react-indiana-scroll';






function App() {

    return (      
        <ScrollContainer className="screen-outer">
            <div className="screen-inner">
                <div className="tree-container">
                    {people.map((peopleObject) =>(
                        <Branch branch={peopleObject}/>
                    ))}
                </div>
            </div>
        </ScrollContainer>

        // <React.Fragment>
        //     {people.map((person) => (
        //         <Branch branch={person}/>
        //     ))}
        // </React.Fragment>
    );
}

export default App;

const people = [{
    name: "Albert",
    hasChildren: true,
    hasParent: false,
    hasPartner: true,
    partner: {
        name: "Alice",
    },
    children: [
        {
            name: "Tomash",
            hasChildren: true,
            hasParent: true,
            hasPartner: true,
            partner: {
                name: "July",
            },
            children: [
                {
                    name: "Sergey",
                    hasChildren: false,
                    hasParent: true, 
                },
                {
                    name: "Martin",
                    hasChildren: true,
                    hasParent: true,
                    hasPartner: true,
                    partner: {
                        name: "Linn",
                    },
                    children: [
                        {
                            name: "Michael",
                            hasChildren: false,
                            hasParent: true, 
                        },
                        {
                            name: "George",
                            hasChildren: false,
                            hasParent: true, 
                        },
                        {
                            name: "Steve",
                            hasChildren: false,
                            hasParent: true, 
                        },
                    ]
                },
                {
                    name: "Carl",
                    hasChildren: false,
                    hasParent: true,
                },
                {
                    name: "Oskar",
                    hasChildren: false,
                    hasParent: true,
                }
            ]
        },
        {
            name: "James",
            hasChildren: true,
            hasParent: true,
            hasPartner: true,
            partner: {
                name: "Mandy",
            },
            children: [
                {
                    name: "Vergilio",
                    hasChildren: false,
                    hasParent: true,
                },
                {
                    name: "Huan",
                    hasChildren: false,
                    hasParent: true,
                },
                {
                    name: "Vasilissa",
                    hasChildren: false,
                    hasParent: true,
                }
            ]
        },
        {
            name: "Peter",
            hasChildren: true,
            hasParent: true,
            hasPartner: true,
            partner: {
                name: "Mary",
            },
            children: [
                {
                    name: "Avreli",
                    hasChildren: true,
                    hasParent: true,
                    hasPartner: true,
                    partner: {
                        name: "Sofiya",
                    },
                    children: [
                        {
                            name: "Frank",
                            hasChildren: true,
                            hasParent: true,
                            hasPartner: true,
                            partner: {
                                name: "Ann",
                            },
                            children: [
                                {
                                    name: "Lena",
                                    hasChildren: true,
                                    hasParent: true,
                                    children: [
                                        {
                                            name: "Kenny",
                                            hasChildren: false,
                                            hasParent: true,
                                        }
                                    ]
                                },
                                {
                                    name: "John",
                                    hasChildren: true,
                                    hasParent: true,
                                    children: [
                                        {
                                            name: "Sam",
                                            hasChildren: false,
                                            hasParent: true,
                                        }
                                    ]
                                },
                                {
                                    name: "Mary",
                                    hasChildren: false,
                                    hasParent: true,
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "George",
            hasChildren: true,
            hasParent: true,
            hasPartner: true,
            partner: {
                name: "Monika",
            },
            children: [
                {
                    name: "Sandy",
                    hasChildren: false,
                    hasParent: true,
                }
            ]
        },
        {
            name: "Konstantin",
            hasChildren: true,
            hasParent: true,
            hasPartner: true,
            partner: {
                name: "Marinet",
            },
            children: [
                {
                    name: "Emma",
                    hasChildren: false,
                    hasParent: true, 
                },
                {
                    name: "Valentina",
                    hasChildren: false,
                    hasParent: true, 
                },
                {
                    name: "Marko",
                    hasChildren: true,
                    hasParent: true,
                    hasPartner: true,
                    partner: {
                        name: "Sofiya",
                    },
                    children: [
                        {
                            name: "Bobby",
                            hasChildren: false,
                            hasParent: true,
                        }
                    ]
                },
            ] 
        }
    ]
}];