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
            title:"E-pay Services",
            link:"/"
        },
        material:[
            {link:"https://github.com/NpSoHs", icon:faGithub},
            {link:"https://www.facebook.com/profile.php?id=100017634035806", icon:faFacebook}
        ],
        description:"ระบบชำระเงินออนไลน์ที่เชื่อมต่อกับ Payment Gateway ของบริษัท โดยเนื้อหารายละเอียดเพิ่มเติมไม่สามารถเปิดเผยได้เนื่องจากข้อกำหนดด้านความลับ",
        skill:[["React","Mui"]]
    },
    {
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
        description:"ระบบจองพื้นที่ Co-working Space ที่ช่วยอำนวยความสะดวกในกระบวนการจองพื้นที่ใช้งาน",
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
        description:"แอปพลิเคชัน Todo List ที่พัฒนาด้วย Next.js, React, Redux และ TypeScript เพื่อการจัดการสถานะอย่างมีประสิทธิภาพ",
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
        description:"โปรเจกต์การแสดงผลข้อมูลเชิงภาพ (Visualization) ที่วิเคราะห์พิกัดทางภูมิศาสตร์ของผู้เขียนโดยใช้ Python และ Streamlit",
        skill:[["Streamlit","python"]]
    }
]
