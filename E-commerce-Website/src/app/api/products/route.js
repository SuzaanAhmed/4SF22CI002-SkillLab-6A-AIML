export async function GET(request) {
    const products=[
        {
        id:1,
        title:"Headphones",
        desc:"Top quality headphones, the world could explode around you and you wouldn't hear a breeze.",
        image:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730264744/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/308502_0_rnuueq.png"
        },
        {
        id:2,
        title:"Microphone",
        desc:"Top quality microphones, the world will explode around you when you speak.",
        image:"https://png.pngtree.com/png-clipart/20240306/original/pngtree-microphone-png-image_14516732.png"
        },{
        id:3,
        title:"Laptop",
        desc:"Top quality laptops, the world could explode in HD.",
        image:"https://pngimg.com/d/laptop_PNG101816.png"
        },{
        id:4,
        title:"Video-Game Controller",
        desc:"Top quality controllers, explode the world around you while playing.",
        image:"https://pngimg.com/d/xbox_PNG17527.png"
        },{
        id:5,
        title:"Charger",
        desc:"Top quality chargers. Great chargers.",
        image:"https://png.pngtree.com/png-clipart/20211017/original/pngtree-mobile-phone-charger-stereo-black-png-image_6855506.png"
        },
    ]

    return new Response(JSON.stringify(products),{
        status:200
    })
}