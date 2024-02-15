export default function GridItemsData(){
    return [
        {
            id:1,
            type:"profile",
            title:"Hi I'm Najat And I'm a Developer",
            breif:"I'm a full stack developer mainly focused on front-end development with 4 years of experience in the tech field. I’ve developed and  maintained many projects in React/Next.js and other stacks. I also have a good grasp on project management, database and UX.",
            image:"../../images/myavatarpic.png",
            cols:"2",
            rows:"4"
        },        
        {
            id:2,
            type:"myapproach",
            title:"My Approach",
            breif:"I take pride in my craft and I give a 100%. I approach my projects with planning and strategy.",
            icon:"<svg class='w-8 h-8 text-purple-600' fill='none' viewBox='0 0 24 24'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z'></path></svg>",
            cols:"2",
            rows:"2"
        },
        {
            id:3,
            type:"whatido",
            title:"What I Do?",
            breif:"................",
            icon:"",
            cols:"2",
            rows:"2"
        },  
        {
            id:4,
            type:"project",
            cover_image: "/images/alray/image1.webp",
            images : [
                {src:"/images/alray/image1.webp"},
                {src:"/images/alray/image2.webp"},            
                {src:"/images/alray/image3.webp"},
                {src:"/images/alray/image4.webp"},            
            ],
            title: "Al Ray",
            brief: "A governmental platform for the Saudi Irrigation Organization so citizens can benifit from its services from right where they are.",
            link: "https://www.sio.gov.sa",
            github:"",
            stacks: ["Next.js"],
            cols:"2",
            rows:"4"
        },
        {
            id:5,
            type:"project",
            cover_image: "/images/mannasat/image1.webp",
            images : [
                {src:"/images/mannasat/image1.webp"},
                {src:"/images/mannasat/image2.webp"},            
                {src:"/images/mannasat/image3.webp"},
                {src:"/images/mannasat/image4.webp"},            
                {src:"/images/mannasat/image5.webp"},            
            ],
            title: "Mannasat",
            brief: "A SaaS solution for restaurants that branches, clients and drivers can use to accomplish their respective goals.",
            link: "https://www.mannasat.net",
            github:"",
            stacks: ["Next.js"],
            cols:"2",
            rows:"4"
        },
        {
            id:6,
            type:"project",
            cover_image: "/images/icedcoffeespot/image2.webp",
            images : [
                {src:"/images/icedcoffeespot/image1.webp"},
                {src:"/images/icedcoffeespot/image2.webp"},            
                {src:"/images/icedcoffeespot/image3.webp"},
                {src:"/images/icedcoffeespot/image4.webp"},            
                {src:"/images/icedcoffeespot/image5.webp"},
                {src:"/images/icedcoffeespot/image6.webp"},            
                {src:"/images/icedcoffeespot/image7.webp"},
                {src:"/images/icedcoffeespot/image8.webp"},
                {src:"/images/icedcoffeespot/image9.webp"},            
                {src:"/images/icedcoffeespot/image10.webp"},
                {src:"/images/icedcoffeespot/image11.webp"},
                {src:"/images/icedcoffeespot/image12.webp"},
                {src:"/images/icedcoffeespot/image13.webp"},
                {src:"/images/icedcoffeespot/image14.webp"},
                {src:"/images/icedcoffeespot/image15.webp"},
            ],
            title: "The Iced Coffee Spot",
            brief: "A coffee spot ordering and delivery system that an iced coffee lover can use to order his/her morning iced coffee online.",
            link: "",
            github: {
                frontend:"https://github.com/ninaismail/icedcoffeespotreactapp",
                backend:"https://github.com/ninaismail/icedcoffeespotnodeapi"
            },
            stacks: ["React","Vite","Node.js","Express","MongoDB"],
            cols:"2",
            rows:"4"
        }, 
        {
            id:7,
            type:"project",
            cover_image: "/images/bookabook/image1.webp",
            images : [
                {src:"/images/bookabook/image1.webp"},
                {src:"/images/bookabook/image2.webp"},            
                {src:"/images/bookabook/image3.webp"},
                {src:"/images/bookabook/image4.webp"},            
                {src:"/images/bookabook/image5.webp"},
            ],
            title: "Book a Book",
            brief: "A library book borrowing system that the reader can use to search and filter books, find available ones and request them for a specified time.",
            link: "",
            github: {
                frontend:"https://github.com/ninaismail/mylibrarynextapp",
                backend:"https://github.com/ninaismail/mylibrarylaravelapi"
            },
            stacks: ["Next.js","Laravel","MySQL"],
            cols:"2",
            rows:"4"
        },
        {
            id:8,
            type:"socials",
            title:"I'm Growing On",
            socials:[
                {
                    id:1,
                    link:"https://www.linkedin.com/in/najat-ismail",
                    brief:"I share stuff about web development...",
                    icon:'<svg fill="#2A2D32" className="w-[36px] h-[36px]" width="64px" height="64px" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <title>linkedin</title> <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"/> </g></svg>'
                },
                {
                    id:2,
                    link:"https://www.youtube.com/channel/UCgfkjD1cwCQZ5pDq4jK9bdw",
                    brief:"I try to post short videos on tech stuff...",
                    icon:'<svg fill="#2A2D32" className="w-[32px] h-[32px]" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <g id="XMLID_822_"> <path id="XMLID_823_" d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938 C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527 C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991 c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764 c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861 C204.394,157.263,202.325,160.684,199.021,162.41z"/> </g> </g></svg>'
                }
            ],
            cols:"4",
            rows:"3"
        },          
        {
            id:9,
            type:"contact",
            title:"Let's Work Together",
            icon:"<svg class='w-8 h-8 text-purple-600' fill='none' viewBox='0 0 24 24'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z'></path></svg>",
            link:"mailto:najatt.ismail@gmail.com?subject=Mail from Your Portfolio Website",
            cols:"4",
            rows:"2"
        }
    ];
}
