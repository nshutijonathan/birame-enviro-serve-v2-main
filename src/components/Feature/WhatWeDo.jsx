import {createSlice , nanoid} from "@reduxjs/toolkit"


export const initialState = [
    {
        id:nanoid() ,
        image:"../what-we-do-files/conservation2.JPG",
        heading:"Conservation of natural landscapes",
        paragraph:"Landscape & Conservation",
        description:"We assess restoration needs of indigenous forests, and key wetlands and document existing biodiversity and eminent threats.We lead science-based restoration programs to address biodiversity loss and the climate break-down.", 

    },
    {
        id:nanoid() ,
        image:"../../what-we-do-files/research1.jpeg",
        heading:"Research on the response of wildlife to environmental changes",
        paragraph:"Wildlife & Research",
        description:"We conduct biodiversity inventories, particularly threatened plants, birds and primates, and we monitor regularly the status of key habitats using the mentioned taxa as indicators.  We assess the efficiency of restoration programs after management interventions, such as the removal of invasive species.", 

    },
    {
        id:nanoid() ,
        image:"../what-we-do-files/education1.jpeg",
        heading:"Conservation education through story-telling and Arts",
        paragraph:"Arts & Education",
        description:"We conduct public educational activities on the conservation of birds and their habitats through story-telling and Art.We document and disseminate traditional ecological knowledge and practices to guide contemporary conservation learning.", 

    },
    {
        id:nanoid() ,
        image:"../what-we-do-files/youth_training.jpeg",
        heading:"Hide Community livelihoods improvement",
        paragraph:"Livelihoods & Community",
        description:"We collaborate with farmers’ cooperatives in implementing agro-ecological practices for sustainable food systems and environmental health.We develop ecotourism products and offer guiding training for young professionals as a tool to build their skills and generate jobs.", 

    },
    {
        id:nanoid() ,
        image:"../what-we-do-files/advocacy2.jpeg",
        heading:"Hide Advocacy for threatened ecosystems",
        paragraph:"Ecosystems & Advocacy",
        description:"We contribute to policy dialogues and national strategic planning activities to advocate for species and sites in need of conservation prioritization.We raise awareness via social media platforms to halt environmental degradation caused by unsustainable development activities.", 

    }
]

export const whatSlice = createSlice({
    name:"what " , 
    initialState ,
    reducers:{}
})


export default whatSlice.reducer