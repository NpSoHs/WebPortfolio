import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import Picture  from "../assets/epay.png"
import DataPicture  from "../assets/dataProject.png"
import TodoPicture  from "../assets/todoPig.png"
import CoWorkPicture  from "../assets/coworkPic.png"
export const data = [
    {
        date:"2022-2023",
        picture:Picture,
        titleLink:{
            title:"E-pay Servicess",
            link:"/"
        },
        material:[
            {link:"https://github.com/NpSoHs", icon:faGithub},
            {link:"https://www.facebook.com/profile.php?id=100017634035806", icon:faFacebook}
        ],
        description:"เป็นระบบที่เกี่ยวกับการชำระเงินออนไลน์ เพื่อไปเชื่อมกับ payment gateway ของบริษัท แต่ไม่สามารถเปิดเผยได้คับ",
        skill:[["React","Mui"]]
    },{
        date:"2022-2023",
        picture:CoWorkPicture,
        titleLink:{
            title:"Co-working Space Reservation",
            link:"https://cedt-se-project-mewing-komkom.vercel.app/"
        },
        material:[
            {link:"https://github.com/2110503TACEDT66/cedt-se-project-mewing-komkom", icon:faGithub},
            {link:"https://www.facebook.com/profile.php?id=100017634035806", icon:faFacebook}
        ],
        description:"เป็นระบบจองco-working space ",
        skill:[
            ["Next","TailwindCSS"],
            ["NodeJS","MongoDB","ExpressJS"]
        ]
    }
]

export const projectData = [
    {
        date:"",
        picture:TodoPicture,
        titleLink:{
            title:"Todo List App", 
            link:"https://todo-list-next-js-delta.vercel.app/"
        },
        material:[
            {link:"https://github.com/NpSoHs/TodoList-Next.js-", icon:faGithub},
        ],
        description:"เป็นtodo list โดยใช้nextjs react redux",
        skill:[["typescript","redux","nextjs"]]
    },
    {
        date:"2024-2025",
        picture:DataPicture,
        titleLink:{
            title:"Geospatial Analysis of Author Location",
            link:"https://kwinboss-dsde-project-visualize-cobfyc.streamlit.app/"
        },
        material:[
            {link:"https://github.com/NpSoHs/dsdeProject", icon:faGithub},
        ],
        description:"เป็นVisualization ของข้อมูลที่เกี่ยวกับการวิเคราะห์พิกัดของผู้เขียน",
        skill:[["Streamlit","python"]]
    }
    
]