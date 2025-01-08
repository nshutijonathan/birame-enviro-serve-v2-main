import { createSlice  ,nanoid } from "@reduxjs/toolkit";
import { GiHummingbird } from "react-icons/gi";

export const initialState = [
    {
        id:nanoid() , 
        icon:"Lorem" ,
        heading:"Conservation of natural landscapes", 
        description :"We lead science-based restoration programs to address biodiversity loss and the climate break-down." ,
        image:"../resource/landscape.svg"
    },
    {
        id:nanoid() , 
        icon:"Lorem" ,
        heading:"Research on the response of wildlife to environmental changes" , 
        description :"We assess the efficiency of restoration programs after management interventions, such as the removal of invasive species." ,
        image:"../resource/bird.svg"
    },
    {
        id:nanoid() , 
        icon:"Lorem" ,
        heading:"Advocacy for threatened ecosystems" , 
        description :"We raise awareness via social media platforms to halt environmental degradation caused by unsustainable development activities." ,
        image:"../resource/ecosystem.svg"
    },
    {
        id:nanoid() , 
        icon:"Lorem" ,
        heading:"Environment education and training" , 
        description:"We provide professional training on eco-tourism and best conservation practices to various stakeholders, including tour guides associations, Universities and Primary schools." ,
        image:"../resource/education.svg"
    },
    {
        id:nanoid() , 
        icon:"Lorem" ,
        heading:"Youth empowerment" , 
        description :"We pay school fees and offer mentorship programs to socio-economically disadvantaged children with priority given to disabled children and girls" ,
        image:"../resource/empower.svg"
    },
    {
        id:nanoid() , 
        icon:"Lorem" ,
        heading:"Conservational Policy and Planning" , 
        description :"We contribute to policy dialogues and national strategic planning activities to advocate for species and sites in need of conservation prioritization" ,
        image:"../resource/trees.svg"
    },
]


export const resourceSlice = createSlice({
    name:"resource" , 
    initialState , 
    reducers:{}
})


export default resourceSlice.reducer