export interface TeamsItem {
  id: string;
  title: string;
  imgName: string;
  altText: string;
}

 export const TEAMS_DATA: TeamsItem[] = [
  {
    id: "therapy",
    title: "Врач стоматолог-терапевт",
    imgName: "preventive-care",
    altText: "Врач стоматолог-терапевт в клинике К+32",
  },
  {
    id: "therapy",
    title: "Врач стоматолог-терапевт",
    imgName: "therapy",
    altText: "Ортопедическая стоматология в клинике К+32",
  },
  {
    id: "surgery",
    title: "Врач стоматолог-хирург",
    imgName: "surgery",
    altText: "Врач стоматолог-хирург в клинике К+32",
  },
  
];