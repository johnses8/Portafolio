import { IconBrandGithub, IconWorld } from "@tabler/icons";
import Image from "next/image";

const projectsInfo = [
  {
    id: 1,
    proyecto_title: "Telolimpio Antofa",
    proyecto_description:
      "Permite hacer compras de la empresa telolimpio antofa la cual ofrece servicios de limpieza integral para residencias y oficinas en la ciudad de antofagasta, Chile.",
    proyecto_url_web: "https://www.telolimpioantofa.cl/",
    proyecto_url_github:"https://github.com/johnses8",
    proyecto_tecnologias: [
      "Wix",
      "TypeScript",
      "Frontend",
      "Diseño UX",
      "Diseño UI"
    ],
  },
  {
    id: 2,
    proyecto_title: "Homecenter App",
    proyecto_description:
      "Permite buscar productos de la tienda homecenter y hacer compras desde la misma pagina un proyecto personal que replica el funcionamiento de la tienda homecenter.",
    proyecto_url_github:
      "https://github.com/johnses8/Ing-software-2.git",
    proyecto_url_web: "",
    proyecto_tecnologias: [
      "Laravel",
      "Blade",
      "Html",
      "CSS",
      "JavaScript",
      "PhP",
      "MySQL",
    ],
  },
  {
    id: 3,
    proyecto_title: "Proyecto Pauli y Zulu",
    proyecto_description:
      "Permite la visualizacion de un e-commerce de video juegos el cual tiene un crud para los productos y tambien informacion variada.",
    proyecto_url_github:
      "https://github.com/johnses8/proyectopauli.git",
    proyecto_url_web: "",
    proyecto_tecnologias: ["Html", "JavaScryot", "TypeScript", "CSS"],
  },
  {
    
    id: 4,
    proyecto_title: "CRUD",
    proyecto_description:
      "Crud que calcula el promedio acomulado de la universidad nacional sede manizales. ",
    proyecto_url_github:
      "https://github.com/johnses8/progamwebnativo.git",
    proyecto_url_web: "/",
    proyecto_tecnologias: ["PhP", "Html", "TypeScript"],
  },
];

export const ProjectCard = () => {
  return (
    <section id="projects">
      {projectsInfo.map((project, index) => (
        <div
          key={project.id}
          className="flex flex-col items-center mt-10 justify-center border-2 border-[var(--bg-hover)]
          rounded-lg shadow-lg md:flex-row md:border-none md:shadow-none md:relative md:h-96"
        >
          
          <Image
            src={`/images/project-${project.id}.webp`}
            alt={project.proyecto_title}
            className={`rounded-t md:w-3/5 w-auto object-cover md:absolute ${
              index % 2 === 0 ? "md:right-0" : "md:left-0"
            }  md:rounded`}
            priority
            width={1000}
            height={1000}
          />
          <div
            className={`flex flex-col items-center mt-2 md:absolute md:left-0 md:w-full ${
              index % 2 === 0
                ? "md:items-start md:text-start"
                : "md:items-end md:text-end"
            } last:border-red-500`}
          >
            <h1
              className={`text-3xl font-bold text-start md:w-2/5 md:text-4xl ${
                index % 2 === 0 ? "md:text-start" : "md:text-end"
              } 
            `}
            >
              {project.proyecto_title}
            </h1>
            <p
              className={`p-4 md:bg-[var(--bg-buttons)] md:rounded-lg md:text-lg md:w-1/2 md:mt-3 font-bold md:text-white md:shadow-xl md:shadow-[var(--nav-shadow)] 
             ${index % 2 === 0 ? "md:text-start" : "md:text-end"} 
            
            `}
            >
              {project.proyecto_description}
            </p>
            <ul
              className={`flex flex-wrap gap-2 mt-3 md:w-2/5 md:mt-3 justify-center p-2
            ${index % 2 === 0 ? "md:justify-start md:pl-0" : "md:justify-end md:pr-0"}
            `}
            >
              {project.proyecto_tecnologias.map((tecnologia) => (
                <li
                  key={tecnologia}
                  className="bg-gray-500 p-1 rounded font-bold text-white text-sm"
                >
                  {tecnologia}
                </li>
              ))}
            </ul>
            <div
              className={`flex justify-center gap-5 pt-4  md:w-2/5  mb-5 md:mb-0
            ${
              index % 2 === 0
                ? "md:justify-start md:pr-5"
                : "md:justify-end md:pl-5"
            }
            `}
            >
              <a
                href={project.proyecto_url_github}
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <IconBrandGithub className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
              </a>
              <a
                href={project.proyecto_url_web}
                target="_blank"
                rel="noreferrer"
                aria-label="web"
              >
                <IconWorld className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default ProjectCard;
