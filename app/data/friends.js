var friends= [
        
        {
            name: "Mario",
            photo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/MarioSMBW.png/220px-MarioSMBW.png",
            scores:[
            1,
            4,
            3,
            5,
            2,
            3,
            1,
            2,
            3,
            3
        ]
        
    },
    {
        name:"Toadette",
        photo:"https://www.mariowiki.com/images/thumb/f/f1/Toadette_-_Mario_Party_10.png/220px-Toadette_-_Mario_Party_10.png",
        scores:[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        name:"Bowser",
        photo:"https://www.mariowiki.com/images/thumb/e/ea/SMO_Art_-_Bowser.png/220px-SMO_Art_-_Bowser.png",
        scores:[
           5,
           1,
           5,
           5,
           1,
           3,
           5,
           5,
           4,
           5,

        ]
    },
    {
        name:"Toadette",
        photo:"https://www.mariowiki.com/images/thumb/f/f1/Toadette_-_Mario_Party_10.png/220px-Toadette_-_Mario_Party_10.png",
        scores:[
            1,
            5,
            2,
            4,
            5,
            1,
            2,
            5,
            2,
            1
        ]
    },
    {
        name:"Luigi",
        photo:"https://compote.slate.com/images/684727da-1858-4456-acc8-20da65028cff.png?width=780&height=520&rect=1080x720&offset=0x0",
        scores:[
            5,
            5,
            2,
            2,
            5,
            1,
            4,
            3,
            4,
            1
        ]
    },
    {
        name:"Donkey Kong",
        photo:"https://vignette.wikia.nocookie.net/mariokart/images/2/28/Donkey_Kong.jpg/revision/latest?cb=20170711023705",
        scores:[
            5,
            1,
            5,
            3,
            2,
            4,
            5,
            4,
            5,
            1
        ]
    },
]
 module.exports.friends = friends;
 module.exports.push2friends = function (val) {
    module.exports.friends.push(val)
 };