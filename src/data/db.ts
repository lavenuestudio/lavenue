export type ProjectData = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export type shadowBanDataPants = {
  id: string;
  image: string;
};

export type shadowBanDataJersey = {
  id: string;
  image: string;
};

export const db: ProjectData[] = [
  {
    id: "columbineDrop",
    name: "Do you believe in God?",
    image: "columbine.png",
    description:
      "En el instituto Columbine, dos adolescentes iniciaron un tiroteo masivo, matando a 13 personas antes de volver las armas contra sí mismos y suicidarse. El tiroteo de Columbine fue, en ese momento, el peor tiroteo en una escuela secundaria en la historia de EE. UU. y provocó un debate nacional sobre el control de armas y la seguridad escolar, así como una importante investigación para determinar qué motivó a los atacantes ______, de 18 años, y ______, de 17. Crees en Dios?",
  },
  {
    id: "runDrop",
    name: "Don`t get caught",
    image: "run.png",
    description: "soon",
  },
  {
    id: "shadowBanDrop",
    name: "Shadow Ban",
    image: "shadowBan.png",
    description: "soon",
  },
];

export const dbShadowBan: shadowBanDataPants[] = [
  {
    id: "anabelle",
    image: "anabelle.webp",
  },
  {
    id: "shoot",
    image: "shoot.webp",
  },
  {
    id: "spider",
    image: "spider.webp",
  },
  {
    id: "woman",
    image: "woman.webp",
  },
  {
    id: "chair",
    image: "chair.webp",
  },
  {
    id: "colum",
    image: "colum.webp",
  },
  {
    id: "payaso1",
    image: "payaso1.webp",
  },
];

export const dbShadowBanJersey: shadowBanDataJersey[] = [
  {
    id: "woman",
    image: "woman.webp",
  },
  {
    id: "lavenuePatch2",
    image: "lavenuePatch2.webp",
  },
  {
    id: "payaso3",
    image: "payaso3.webp",
  },
  {
    id: "chair",
    image: "chair.webp",
  },
];
