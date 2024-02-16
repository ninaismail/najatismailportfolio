export default function GridItemsData(){
    return [
        {
            id:1,
            type:"profile",
            title:"Hi I'm Najat And I'm a Developer",
            brief:"I'm a full stack developer mainly focused on front-end development with 4 years of experience in the tech field. I’ve developed and  maintained many projects in React/Next.js and other stacks. I also have a good grasp on project management, database and UX.",
            image:"/images/myavatarpic.png",
        },        
        {
            id:2,
            type:"myapproach",
            title:"My Approach",
            brief:"I take pride in my craft and I give a 100%. I approach my projects with planning and strategy.",
            icon:<svg className='w-24 h-24 text-green' fill='none' viewBox='0 0 24 24'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z'></path></svg>
        }, 
        {
            id:3,
            type:"socials",
            title:"I'm Growing On",
            socials:[
                {
                    id:1,
                    title:"My Linkedin",
                    link:"https://www.linkedin.com/in/najat-ismail",
                    brief:"I share stuff about web development...",
                    icon:<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 48 48">
                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                    </svg>
                },
                {
                    id:2,
                    title:"My Youtube",
                    link:"https://www.youtube.com/channel/UCgfkjD1cwCQZ5pDq4jK9bdw",
                    brief:"I try to post short videos on tech stuff...",
                    icon:<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 48 48">
                    <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                    </svg>
                }
            ]
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
            stacks: ["Next.js"]
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
            stacks: ["Next.js"]
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
            stacks: ["React","Vite","Node.js","Express","MongoDB"]
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
            stacks: ["Next.js","Laravel","MySQL"]
        },      
        {
            id:8,
            type:"contact",
            title:"Let's Work Together",
            link:"mailto:najatt.ismail@gmail.com?subject=Mail from Your Portfolio Website",
            brief:"Interested in working together? reach out and let's discuss your project ideas!",
            gif:"/gifs/icons8-email.gif"
        }
    ];
}
