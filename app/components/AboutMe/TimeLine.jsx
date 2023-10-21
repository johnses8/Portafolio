import {  IconSchool, IconBriefcase } from "@tabler/icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const educationHistory = [
  {
    id: 1,
    title: "Universidad Nacional de Colombia",
    text: "Administracion de Sistemas Informaticos",
    date: "Enero 2020 - Actualidad",
  },
  {
    id: 2,
    title: "Universidad Catolica de Manizales",
    text: "Communicative English",
    date: "Enero 2018 - diciembre 2019",
  },
];
const workHistory = [
  {
    id: 1,
    title: "Telolimpio Antofa",
    text: "Frontend Software Development",
    date: "Agosto 2023 - Actualidad",
    description: "Desarrollador Frontend Pagina Wix",
  },

  {
    id: 2,
    title: "Grupo ASD",
    text: "Technical Support",
    date: "Enero 2020 - Actualidad",
    description: "",
  },
  {
    id: 3,
    title: "Maderas Algarrobo",
    text: "Technical assistant in the company's systems",
    date: "Enero 2020 - Enero 2021",
    description: "",
  },
];

export const TimeLine = ({ showEducation }) => {
  return (
    <VerticalTimeline>
      {(showEducation ? educationHistory : workHistory).map((item) => (
        <VerticalTimelineElement
          key={item.id}
          date={item.date}
          iconStyle={{
            background: "var(--bg-buttons)",
            color: "#fff",
            border: "none"
           }}
          icon={showEducation ? <IconSchool /> : <IconBriefcase />}
          contentStyle={{
            background: "transparent",
            color: "var(--foreground)",
            border: "1px solid var(--socials-buttons)",
            boxShadow: "unset"
          }}
          contentArrowStyle={{
            borderRight: "7px solid  var(--socials-buttons)",
          }}
           
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <p>{item.text}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
