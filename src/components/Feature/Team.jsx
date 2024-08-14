import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = [
  {
    id: nanoid(),
    image: "../Team/Rurangwa_photo.jpg",
    name: "Dr Rurangwa Laure",
    title: "Executive Director",
    details:
      "Laure’s research and conservation interest lies in the responses of the Rwandan biodiversity to human-induced habitat modification, particularly forest conversions, intensive agriculture and invasive species. Some of her empirical research works have been published in reputable scholarly journals, such as Diversity and Distribution, and Forest Ecology and Management (https://doi.org/10.1016/j.foreco.2020.118765). Laure holds a PhD and a Master’s degree in Biodiversity, Conservation and Management from the School of Geography and Environment, University of Oxford, and a Bachelor’s degree in Zoology and Conservation from the National University of Rwanda. Laure heads the bird-naming committee whose main responsibility is to develop a protocol to document and assign Kinyarwanda names of birds in Rwanda.",
  },
  {
    id: nanoid(),
    image: "../Team/Eric-Kayirangwa2.jpg",
    name: "Kayiranga Eric",
    title: "Tourism Development Lead",
    details:
      "Eric Kayiranga is a licensed and dedicated nature tour guide, with a broad knowledge of the Rwandan fauna and flora. He holds a diploma in Tourism and Travel Management obtained from the University of Tourism and Business studies, and a Silver medal in birding activities awarded by Rwanda Development Board. Eric’s professional experience in the tourism industry spans 15 years, with a special interest in the Rwandan National Parks, and remnant natural ecosystems. Eric is the Chairperson of Rwanda Safari Guides Association (RSGA), the official organization representing Rwandan tourist guides, and a member of the chamber of Tourism. While not guiding, Eric devotes his time to birding, wildlife photography and hiking in tropical rain forests of Rwanda and the East African region.",
  },

  {
    id: nanoid(),
    image: "../Team/Yves PP.jpg",
    name: "Tuyishime Yves",
    title: "Communication and Media Lead",
    details:
      "Yves works in the field of Graphic design and Motion at Rwanda Television (RTV), and he has previously worked as an Audio-Visual technician at the National University of Rwanda, where he also obtained a bachelor’s degree in Zoology and Conservation. He has participated in various research projects including studies on plant-pollinator networks of Ruhande Arboretum, inventories of small mammals in Nyungwe National Park, the status of indigenous trees in Nyamagabe and Bugesera. Yves is a determined and highly organized person who applies wise and responsible approaches to various tasks at hand.",
  },
  {
    id: nanoid(),
    image: "../Team/Protais.jpg",
    name: "Niyigaba Protais",
    title: "Reaserch and Restoration Advisor",
    details:
      "Protais is skilled and experienced in nature interpretation, protected areas management, biodiversity monitoring methods, and Environmental and Social Impact Assessment Studies. He holds a Master’s Degree in Biodiversity Conservation from the University of Rwanda. Protais is the current Park Manager of Nyungwe National Park, and has previously worked as the Biodiversity Monitoring Officer at Wildlife Conservation Society – Nyungwe Conservation Project. He is currently an active member of the Rwanda Association of Professional Environmental Practitioners (RAPEP) and a co-trainer for the development of local bird guides in the Kivu Belt Tourism Destination Management Unit. Protais is a passionate birder and eco-tourism enthusiast.",
  },
  {
    id: nanoid(),
    image: "../Team/Valentine_Dushimiyimana.jpeg",
    name: "Valentine Dushimiyimana",
    title: "ONE Health Coordination",
    details:
      " I have more than 10 years of experience in the health sector and more than 5 years in research ,I am currently undertaking a Ph.D. in Health Sciences at Ghent University and Cape Town University. Prior to my Ph.D., I have been working at Rwanda Biomedical Centre, Research Innovation and Data Sciences Division as Ag. Strategic Information Specialist, and occasionally as the grant administrator.",
  },
  {
    id: nanoid(),
    image: "../Team/Bisangwa_Nganji.jpg",
    name: "Bisangwa Benjamin",
    title: "Conservation Education Lead",
    details:
      "Ben heads the Creative department where he designs Environmental awareness campaigns using community engagement techniques, such as plays, story-telling, Radio drama to mention but a few. Ben is a renown journalist, comedian, musician and actor, and some of his environmental plays have been broadcasted at the National Television in partnership with the Rwanda Environment Management Authority.",
  },
];

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
});

export default teamSlice.reducer;
