import { createSlice , nanoid } from "@reduxjs/toolkit"; 

export const initialState = [
    {
         id:nanoid(),
         image:"../ProjectsFiles/mashyoza1.jpeg" ,
         heading:"Conserving remnant ecosystems" ,
         description :"We monitor the biodiversity of remnant ecosystems, such as the rainforest of Busaga, the gallery forest of Mashyoza and the riparian forest of protected lakes."
    },
    {
        id:nanoid(),
        image:"../ProjectsFiles/restoration3.svg" ,
        heading:"Restoring landscapes" ,
        description : "We contribute to national goals of forest landscape restoration, and we lay emphasis on growing indigenous trees due to their crucial roles of supporting biodiversity and carbon sequestration"
   },
   {
    id:nanoid(),
    image:"../ProjectsFiles/lantana2.jpeg" ,
    heading:"Managing invasive species" ,
    description : "We raise public awareness on the invasion of Lantana camara in native and exotic woodlands and advocate for its removal from the flower market" 
    },
    {
        id:nanoid(),
        image:"../ProjectsFiles/hello.png" ,
        heading:"Bird naming protocol" ,
        description : "We lead the monumental project of documenting and assigning Kinyarwanda names of all bird species of Rwanda (Slightly over 700) in a bid to ignite the human-nature connection and to safeguard associated traditions" 
        },
        {
            id:nanoid(),
            image:"../ProjectsFiles/mashyoza1.jpeg" ,
            heading:"Farmers first" ,
            description :"Using a ONE health approach, we collaborate with farmers in Ngoma district to promote environmentally-friendly agricultural practices, such as food forests in order to ensure food security, public and environmental health." 
            },
            {
                id:nanoid(),
                image:"../ProjectsFiles/bio.jpeg" ,
                heading:"Biodiversity monitoring" ,
                description : "We conduct biodiversity inventories, particularly threatened plants, birds and primates, and we monitor regularly the status of key habitats and species to inform conservation and management plans" 
                },

]



export const projects = createSlice({
    name:"projects" , 
    initialState  ,
    reducers:{}
})

export default projects.reducer