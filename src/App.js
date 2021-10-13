import Branch from './Branch';

const peopleObject = {
    name: "Albert",
    hasChildren: true,
    hasParent: false,
    children: [
        {
            name: "Tomash",
            hasChildren: true,
            hasParent: true,
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
            children: [
                {
                    name: "Avreli",
                    hasChildren: true,
                    hasParent: true,
                    children: [
                        {
                            name: "Frank",
                            hasChildren: true,
                            hasParent: true,
                            children: [
                                {
                                    name: "Lena",
                                    hasChildren: false,
                                    hasParent: true,
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
            name: "Anna",
            hasChildren: true,
            hasParent: true,
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
                    name: "Sofiya",
                    hasChildren: false,
                    hasParent: true, 
                },
            ] 
        }
    ]
}


function App() {

    return (
        <Branch branch={peopleObject}/>
    );
}

export default App;