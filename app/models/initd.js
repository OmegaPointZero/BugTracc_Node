/* file for populating sample data in the /initialize route */

const genRecentStamp = (function(daysPrev,hour,minute,second){
    var n = new Date().getTime()
    var newDate = new Date(n-(86400000*daysPrev))
    var dateSplit = newDate.toString().split(' ')
    dateSplit[4] = hour.toString() + ":" + minute.toString() + ":" + second.toString()
    return new Date(dateSplit.join(' ')).getTime()
})

module.exports = [
        /* findusers */
    { "db" : "Users",
      "collection": [
        {
            "date" : genRecentStamp(16,8,2,15),
            "employeeID": "0811c",
            "email": "terry@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Terry",
            "lastName": "Davis",
            "submittedPRs": [],
            "role": "Project Manager",
            "avatar": "av12.png",
            "assignedBugs": [],
            "resolvedBugs": [],
            "messages": {
                unreadMessages: 0, 
                unreadThreads: 0, 
                threads: [
                    {
                        senderName: "Joshua",
                        senderID: "5613",
                        avatar: "av3.png",
                        lastMessage: genRecentStamp(0,16,00,00),
                        unread: 0,
                        messages: [
                            {   
                                type: "OUT",
                                time: genRecentStamp(0,16,00,00),
                                message: "Nevermind, reassigned",
                                read: true
                            }, {
                                type: "OUT",
                                time: genRecentStamp(0,15,55,02),
                                message: "Can you jump on that Critical bug right now?",
                                read: true
                            }                
                        ]
                    },
                ]
            },
            "alerts": [
                {
                    time: genRecentStamp(0,8,1,01),
                    message: "You have an alert!",
                    icon: "" /* Icon to display with alert */
                }
            ]
        },{
            "date" : genRecentStamp(16,8,2,15),
            "employeeID": "0369",
            "email": "nikola@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Nikola",
            "lastName": "Tesla",
            "submittedPRs": ["16ba53bf3"],
            "role": "Developer",
            "avatar": "av9.png",
            "assignedBugs": ["44ef33c79"],
            "resolvedBugs": ["f81194e16"],
            "messages": {
                unreadMessages: 0, 
                unreadThreads: 0, 
                threads: [
                    {
                        senderName: "John",
                        senderID: "3169",
                        avatar: "av6.png",
                        lastMessage: genRecentStamp(0,16,00,00),
                        unread: 0,
                        messages: [
                            {   
                                type: "OUT",
                                time: genRecentStamp(1,11,11,11),
                                message: "Done!",
                                read: true
                            }, {
                                type: "IN",
                                time: genRecentStamp(1,9,35,18),
                                message: "Can you do the cabling for the new server?",
                                read: true
                            }                
                        ]
                    },
                ]
            },
            "alerts": [
                {
                    time: genRecentStamp(0,8,1,01),
                    message: "You have an alert!",
                    icon: "" /* Icon to display with alert */
                }
            ]
        },{
            "date" : genRecentStamp(16,8,2,15),
            "employeeID": "5613",
            "email": "josh@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Joshua",
            "lastName": "Campbell",
            "submittedPRs": ["15663263b"],
            "role": "Developer",
            "avatar": "av3.png",
            "assignedBugs": ["f17dce974"],
            "resolvedBugs": ["3ec13b959"],
            "messages": {
                unreadMessages: 3, 
                unreadThreads: 2, 
                threads: [
                    {
                        senderName: "Terry",
                        senderID: "0811c",
                        avatar: "av12.png",
                        lastMessage: genRecentStamp(0,16,00,00),
                        unread: 2,
                        messages: [
                            {   
                                type: "IN",
                                time: genRecentStamp(0,16,00,00),
                                message: "Nevermind, reassigned",
                                read: false
                            }, {
                                type: "IN",
                                time: genRecentStamp(0,15,55,02),
                                message: "Can you jump on that Critical bug right now?",
                                read: false
                            }                
                        ]
                    },
                    {
                        senderName: "Kayla",
                        senderID: "0999",
                        avatar: "av10.png",
                        lastMessage: genRecentStamp(2,9,04,27),
                        unread: 1,
                        messages: [
                            {   
                                type: "OUT",
                                time: genRecentStamp(2,9,04,27),
                                message: "Thank you!",
                                read: true
                            },{
                                type: "IN",
                                time: genRecentStamp(2,8,44,59),
                                message: "Here's the stuff you requested!",
                                read: true
                            },{   
                                type: "OUT",
                                time: genRecentStamp(2,5,04,27),
                                message: "Guess what!",
                                read: true
                            },{
                                type: "IN",
                                time: genRecentStamp(2,1,44,59),
                                message: "We are trapped in a demo!",
                                read: true
                            },{   
                                type: "OUT",
                                time: genRecentStamp(1,18,04,27),
                                message: "This is a message!",
                                read: true
                            },{
                                type: "IN",
                                time: genRecentStamp(1,17,44,59),
                                message: "Just need more data!",
                                read: true
                            },{   
                                type: "OUT",
                                time: genRecentStamp(1,14,04,27),
                                message: "Have you taken a lunch yet?",
                                read: true
                            },{
                                type: "IN",
                                time: genRecentStamp(1,13,44,59),
                                message: "I just got back from lunch",
                                read: true
                            },{   
                                type: "OUT",
                                time: genRecentStamp(0,4,34,97),
                                message: "Test text message?",
                                read: true
                            }, {
                                type: "IN",
                                time: genRecentStamp(0,5,44,59),
                                message: "The chat is working",
                                read: false
                            }    
                        ]
                    } 
                ] 
            },
            "alerts": [
                {
                    time: genRecentStamp(0,8,1,01),
                    message: "You have an alert!",
                    icon: "" /* Icon to display with alert */
                }
            ]
        },{
            "date" : genRecentStamp(16,8,2,15),
            "employeeID": "0999",
            "email": "kayla@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Kayla",
            "lastName": "Smith",
            "submittedPRs": ["7de0dc374"],
            "role": "Developer",
            "avatar": "av10.png",
            "assignedBugs": [],
            "resolvedBugs": ["10db168eb"],
            "messages": {
                unreadMessages: 0, 
                unreadThreads: 0, 
                threads: [
                    {
                        senderName: "Joshua",
                        senderID: "5613",
                        avatar: "av3.png",
                        lastMessage: genRecentStamp(2,9,04,27),
                        unread: 0,
                        messages: [
                            {   
                                type: "IN",
                                time: genRecentStamp(2,9,04,27),
                                message: "Thank you!",
                                read: true
                            }, {
                                type: "OUT",
                                time: genRecentStamp(2,8,44,59),
                                message: "Here's the stuff you requested!",
                                read: true
                            }                
                        ]
                    },
                ]
            },
            "alerts": [
                {
                    time: genRecentStamp(0,8,1,01),
                    message: "You have an alert!",
                    icon: "" /* Icon to display with alert */
                }
            ]
        },{
            "date" : genRecentStamp(16,8,2,15),
            "employeeID": "3169",
            "email": "john@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "John",
            "lastName": "McClane",
            "submittedPRs": [],
            "role": "Developer",
            "avatar": "av6.png",
            "assignedBugs": ["ad59dec99", "96a0bfb77"],
            "resolvedBugs": [],
            "messages": {
                unreadMessages: 1, 
                unreadThreads: 1, 
                threads: [
                    {
                        senderName: "Nikola",
                        senderID: "0369",
                        avatar: "av9.png",
                        lastMessage: genRecentStamp(1,11,11,11),
                        unread: 1,
                        messages: [
                            {   
                                type: "IN",
                                time: genRecentStamp(1,11,11,11),
                                message: "Done!",
                                read: false
                            }, {
                                type: "OUT",
                                time: genRecentStamp(1,9,35,18),
                                message: "Can you do the cabling for the new server?",
                                read: true
                            }                
                        ]
                    },  
                ]
            },
            "alerts": [
                {
                    time: genRecentStamp(0,8,1,01),
                    message: "You have an alert!",
                    icon: "" /* Icon to display with alert */
                }
            ]
        },{
            "date" : genRecentStamp(16,8,2,15),
            "employeeID": "c137",
            "email": "rick@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Rick",
            "lastName": "Sanchez",
            "submittedPRs": [],
            "role": "Developer",
            "avatar": "rick.jpg",
            "assignedBugs": [],
            "resolvedBugs": [],
            "alerts": [
                {
                    time: genRecentStamp(0,8,1,01),
                    message: "You have an alert!",
                    icon: "" /* Icon to display with alert */
                }
            ]
        },{
            "date" : genRecentStamp(16,8,2,15),
            "employeeID": "1011",
            "email": "bender@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Bender",
            "lastName": "Rodriguez",
            "submittedPRs": [],
            "role": "Developer",
            "avatar": "bender.jpg",
            "assignedBugs": ["6a9293a24"],
            "resolvedBugs": [],
            "alerts": [
                {
                    time: genRecentStamp(0,8,1,01),
                    message: "You have an alert!",
                    icon: "" /* Icon to display with alert */
                }
            ]
        },{
            "date" : genRecentStamp(16,8,2,15),
            "employeeID": "3144",
            "email": "captain@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Captain",
            "lastName": "Crunch",
            "submittedPRs": ["52b0df3cb","1e9a5fbb2","d68926019"],
            "role": "Developer",
            "avatar": "av9.png",
            "assignedBugs": [],
            "resolvedBugs": ["f176ce974"],
            "alerts": [
                {
                    time: genRecentStamp(0,8,1,01),
                    message: "You have an alert!",
                    icon: "" /* Icon to display with alert */
                }
            ]
        },{
            "date" : genRecentStamp(16,8,2,15),
            "employeeID": "c371",
            "email": "morty@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Morty",
            "lastName": "Smith",
            "submittedPRs": ["d60de5073", "63af28149", "b3bd63f21"],
            "role": "Intern",
            "avatar": "morty.png",
            "assignedBugs": ["1deadbeef"],
            "resolvedBugs": ["147971f66"],
            "alerts": [
                {
                    time: genRecentStamp(0,8,1,01),
                    message: "You have an alert!",
                    icon: "" /* Icon to display with alert */
                }
            ]
        }
    /* findprs */
    ]},{ "db" : "PRs",
      "collection": [
        {
            "date" : genRecentStamp(3,9,15,0),
            "employeeID": "3144",
            "prID": "52b0df3cb",
            "prURL": "https://github.com/OmegaPointZero/example/pull/1",
            "bugID": "f176ce974",
            "resolvedIssue": true,
            "notes": "Refactored the save() function to prevent duplicate entries with multiple \"employee_role\" objects.",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : genRecentStamp(3,9,52,8),
                "notes": "Passes all test cases that triggered issue"
            }
        },{
            "date" : genRecentStamp(3,12,13,55),
            "employeeID": "3144",
            "prID": "1e9a5fbb2",
            "prURL": "https://github.com/OmegaPointZero/example/pull/2",
            "bugID": "869b7e0a5",
            "resolvedIssue": false,
            "notes": "Added function to validate login IDs",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : genRecentStamp(3,12,27,35),
                "notes": "Still causes problems if ID is null instead of just invalid"
            }
        },{
            "date" : genRecentStamp(3,12,54,42),
            "employeeID": "3144",
            "prID": "d68926019",
            "prURL": "https://github.com/OmegaPointZero/example/pull/3",
            "bugID": "869b7e0a5",
            "resolvedIssue": true,
            "notes": "Validates login ID and handles all possible inputs",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : genRecentStamp(3,13,04,28),
                "notes": "Server no longer crashing upon invalid inputs"
            }
        },{
            "date" : genRecentStamp(3,12,55,37),
            "employeeID": "0369",
            "prID": "16ba53bf3",
            "prURL": "https://github.com/OmegaPointZero/example/pull/4",
            "bugID": "f81194e16",
            "resolvedIssue": true,
            "notes": "Altered vibrations to create wireless tx",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : genRecentStamp(3,13,24,18),
                "notes": "Power successfully programmed to transmit wirelessly"
            }
        },{
            "date" : genRecentStamp(3,13,30,29),
            "employeeID": "c371",
            "prID": "d60de5073",
            "prURL": "https://github.com/OmegaPointZero/example/pull/5",
            "bugID": "147971f66",
            "resolvedIssue": false,
            "notes": "Documented all endpoints and their purposes",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : genRecentStamp(3,13,36,29),
                "notes": "Needs to be reformatted to follow standards, all endpoints and request types need to be included"
            }
        },{
            "date" : genRecentStamp(3,13,38,40),
            "employeeID": "c371",
            "prID": "63af28149",
            "prURL": "https://github.com/OmegaPointZero/example/pull/6",
            "bugID": "147971f66",
            "resolvedIssue": false,
            "notes": "Documented all endpoints, added request types, formatted to standards",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : genRecentStamp(3,13,45,29),
                "notes": "Example data needs to be present for POST requests"
            }
        },{
            "date" : genRecentStamp(3,14,45,27),
            "employeeID": "0999",
            "prID": "7de0dc374",
            "prURL": "https://github.com/OmegaPointZero/example/pull/7",
            "bugID": "10db168eb",
            "resolvedIssue": true,
            "notes": "updated role_handler() route to always return an object containing the results rather than the raw results",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : genRecentStamp(3,14,50,58),
                "notes": ""
            }
        },{
            "date" : genRecentStamp(3,14,47,8),
            "employeeID": "5613",
            "prID": "15663263b",
            "prURL": "https://github.com/OmegaPointZero/example/pull/8",
            "bugID": "3ec13b959",
            "resolvedIssue": true,
            "notes": "implemented input sanitations to prevent SQL injection attacks against the server",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : genRecentStamp(3,15,15,03),
                "notes": ""
            }
        },{
            "date" : genRecentStamp(3,15,22,43),
            "employeeID": "c371",
            "prID": "b3bd63f21",
            "prURL": "https://github.com/OmegaPointZero/example/pull/9",
            "bugID": "147971f66",
            "resolvedIssue": true,
            "notes": "Documented everything to standards with example POST data and accurate request responses for each endpoint",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : genRecentStamp(3,15,25,00),
                "notes": "Documentation accepted"
            }
        },{
            "date" : genRecentStamp(3,15,25,56),
            "employeeID": "1011",
            "prID": "3735dd7f2",
            "prURL": "https://github.com/OmegaPointZero/example/pull/10",
            "bugID": "6a9293a24",
            "resolvedIssue": false,
            "notes": "Piping much faster",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : genRecentStamp(3,15,25,00),
                "notes": "While faster, we need to reduce to O(log(n)) complexity"
            }
        },{
            "date" : genRecentStamp(3,15,42,38),
            "employeeID": "c137",
            "prID": "12204085c",
            "prURL": "https://github.com/OmegaPointZero/example/pull/11",
            "bugID": "c1e542079",
            "resolvedIssue": false,
            "notes": "Got child threads to be killed reliably",
            "reviewedBy": {}
        },
    ]},
    /* findbugs */
    {"db" : "Bugs",
    "collection": [
        {
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "f176ce974",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Saving records of employees with multiple roles results in multiple employee profiles being saved.",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(3,8,2,17),
            "assignedTo":"3144",
            "assignedName": "Captain",
            "status": "Resolved",
            "type": "Low",
            "active": false,
            "submittedPRs": ["52b0df3cb"],
            "fixedOn": genRecentStamp(3,9,52,8),
            "finalPR": "52b0df3cb"
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "f17dce974",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Saving records of employees with multiple roles results in multiple employee profiles being saved.",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(1,8,2,17),
            "assignedTo":"5613",
            "assignedName": "Josh",
            "status": "Assigned",
            "type": "Medium",
            "active": true,
            "submittedPRs": [],
            "fixedOn": "",
            "finalPR": ""
        },
        {
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "869b7e0a5",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Invalid employee ID being passed to login causes server crash.",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(3,8,2,17),
            "assignedTo":"3144",
            "assignedName": "Captain",
            "status": "Resolved",
            "type": "High",
            "active": false,
            "submittedPRs": ["1e9a5fbb2", "d68926019"],
            "fixedOn": genRecentStamp(3,13,04,28),
            "finalPR": "d68926019"
        },
        {
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "f81194e16",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Power still transmitted via cables, not wirelessly.",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(3,8,2,17),
            "assignedTo":"0369",
            "assignedName": "Nikola",
            "status": "Resolved",
            "type": "Medium",
            "active": false,
            "submittedPRs": ["16ba53bf3"],
            "fixedOn": genRecentStamp(3,13,24,18),
            "finalPR": "16ba53bf3"
        },
        {
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "147971f66",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "API needs to be documented.",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(3,8,2,17),
            "assignedTo":"c371",
            "assignedName": "Morty",
            "status": "Resolved",
            "type": "Documentation",
            "active": false,
            "submittedPRs": ["d60de5073", "63af28149", "b3bd63f21"],
            "fixedOn": genRecentStamp(3,15,25,00),
            "finalPR": "b3bd63f21"
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "3ec13b959",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Login form vulnerable to SQL injection attacks",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(3,8,2,17),
            "assignedTo":"5613",
            "assignedName": "Josh",
            "status": "Resolved",
            "type": "Critical",
            "active": false,
            "submittedPRs": ["15663263b"],
            "fixedOn": genRecentStamp(3,15,15,03),
            "finalPR": "15663263b"
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "10db168eb",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Server crashes when employee tasks are updated with anything other than the default task type",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(3,8,2,17),
            "assignedTo":"0999",
            "assignedName": "Kayla",
            "status": "Resolved",
            "type": "High",
            "active": false,
            "submittedPRs": ["7de0dc374"],
            "fixedOn": genRecentStamp(3,14,50,58),
            "finalPR": "7de0dc374"
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "1deadbeef",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Manually create a ton of mock database entries to populate the DB with for testing and demo purposes",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(3,8,2,17),
            "assignedTo":"c371",
            "assignedName": "Morty",
            "status": "In Progress",
            "type": "Low",
            "active": true,
            "submittedPRs": [],
            "fixedOn": 0,
            "finalPR": ""
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "ad59dec99",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Test sandbox escape vulnerability and create fix",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(3,8,2,17),
            "assignedTo":"3169",
            "assignedName": "John",
            "status": "In Progress",
            "type": "Medium",
            "active": true,
            "submittedPRs": [],
            "fixedOn": 0,
            "finalPR": ""
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "96a0bfb77",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Test sandbox escape vulnerability and create fix",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(3,8,2,17),
            "assignedTo":"3169",
            "assignedName": "John",
            "status": "Assigned",
            "type": "Low",
            "active": true,
            "submittedPRs": [],
            "fixedOn": 0,
            "finalPR": ""
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "44ef33c79",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Add wireless electricity to the entire building",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(3,8,2,17),
            "assignedTo":"0369",
            "assignedName": "Nikola",
            "status": "In Progress",
            "type": "Feature Request",
            "active": true,
            "submittedPRs": [],
            "fixedOn": 0,
            "finalPR": ""
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "6a9293a24",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Refactor of all pipe functions",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(3,8,2,17),
            "assignedTo":"1011",
            "assignedName": "Bender",
            "status": "PR Rejected",
            "type": "Low",
            "active": true,
            "submittedPRs": ["3735dd7f2"],
            "fixedOn": 0,
            "finalPR": ""
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "c1e542079",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Child threads not being killed correctly in cleanup()",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(3,8,2,17),
            "assignedTo":"c137",
            "assignedName": "Rick",
            "status": "Under Review",
            "type": "Low",
            "active": true,
            "submittedPRs": ["12204085c"],
            "fixedOn": 0,
            "finalPR": ""
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "c154207e9",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "This app's developer is still looking for full-time employment.",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "dateFiled": genRecentStamp(3,8,2,17),
            "assignedTo": "",
            "assignedName": "",
            "status": "Unassigned",
            "type": "High",
            "active": true,
            "submittedPRs": [],
            "fixedOn": 0,
            "finalPR": ""
        }
    ]}
]

