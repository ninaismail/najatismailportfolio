export default function GridItemsData(){
    return [
        {
            id:1,
            type:"profile",
            title:"Full Stack Web Developer",
            name:"Najat Ismail",
            brief:"I'm a full stack developer with 2 years of experience in the tech field. I’ve developed and maintained many projects using React and other stacks. I take pride in my craft and I give a 100%. I approach my projects with planning and strategy.",
            image:"/images/myavatarpic.webp",
            location:"🌍 Tripoli, Lebanon",
            resume:"📥 Resume",
            resumelink:"https://drive.google.com/file/d/1VNTjgP7LHcdrlIjGdJOj44bdfoD0bDI-/view?usp=drive_link",
            contact:"✉️ Contact Me",
            contactlink:"mailto:najatt.ismail@gmail.com?subject=Mail from Your Portfolio Website",
        },         
        {
            id:2,
            title:"Github",
            type:"social",
            name:"@ninaismail",
            link:"https://github.com/ninaismail",
            brief:"Find all the projects mentioned in this portfolio and more on my github profile.",
            icon:<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 30 30">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>,            
            visit:"Follow",
            brandingcolor:"#000000"
        },        
        {
            id:3,
            title:"Linkedin",
            type:"social",
            name:"@najat-ismail",
            link:"https://www.linkedin.com/in/najat-ismail",
            brief:"I write on the various topics of web development.",
            icon:<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 48 48">
            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>,
            visit:"Connect",
            brandingcolor:"#0288D1"
        },
        {
            id:5,
            title:"Youtube",
            type:"social",
            name:"@najatismail",
            link:"https://www.youtube.com/channel/UCgfkjD1cwCQZ5pDq4jK9bdw",
            brief:"I try to post short tutorial videos on web development concepts.",
            icon:<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 48 48">
            <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
            </svg>,
            visit:"Subscribe",
            brandingcolor:"#FF3D00"
        },
        {
            id:7,
            type:"project",
            cover_image: "/images/alray/image1.webp",
            images : [
                "/images/alray/image1.webp",
                "/images/alray/image2.webp",            
                "/images/alray/image3.webp",
                "/images/alray/image4.webp",            
            ],
            title: "Al Ray",
            brief: "A governmental platform for the Saudi Irrigation Organization so citizens can benifit from its services from right where they are.",
            link: "https://www.sio.gov.sa",
            github:"",
            stacks: ["Next.js"]
        },
        {
            id:8,
            type:"project",
            cover_image: "/images/mannasat/image1.webp",
            images : [
                "/images/mannasat/image1.webp",
                "/images/mannasat/image2.webp",            
                "/images/mannasat/image3.webp",
                "/images/mannasat/image4.webp",            
                "/images/mannasat/image5.webp",            
            ],
            title: "Mannasat",
            brief: "A SaaS solution for restaurants that branches, clients and drivers can use to accomplish their respective goals.",
            link: "https://www.mannasat.net",
            github:"",
            stacks: ["Next.js"]
        },
        {
            id:9,
            type:"project",
            cover_image: "/images/icedcoffeespot/image2.webp",
            images : [
                "/images/icedcoffeespot/image1.webp",
                "/images/icedcoffeespot/image2.webp",            
                "/images/icedcoffeespot/image3.webp",
                "/images/icedcoffeespot/image4.webp",            
                "/images/icedcoffeespot/image5.webp",
                "/images/icedcoffeespot/image6.webp",            
                "/images/icedcoffeespot/image7.webp",
                "/images/icedcoffeespot/image8.webp",
                "/images/icedcoffeespot/image9.webp",            
                "/images/icedcoffeespot/image10.webp",
                "/images/icedcoffeespot/image11.webp",
                "/images/icedcoffeespot/image12.webp",
                "/images/icedcoffeespot/image13.webp",
                "/images/icedcoffeespot/image14.webp",
                "/images/icedcoffeespot/image15.webp",
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
            id:10,
            type:"project",
            cover_image: "/images/bookabook/image1.webp",
            images : [
                "/images/bookabook/image1.webp",
                "/images/bookabook/image2.webp",            
                "/images/bookabook/image3.webp",
                "/images/bookabook/image4.webp",            
                "/images/bookabook/image5.webp",
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
    ];
}
