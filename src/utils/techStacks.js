import BootstrapIcon from "../components/icons/svg/bootstrap-svg";
import MongooseIcon from "../components/icons/svg/mongoose-svg";
import SpringIcon from "../components/icons/svg/spring-svg";
import TypeScriptIcon from "../components/icons/svg/typescript-svg";
import AdobeXDIcon from "./../components/icons/svg/adobe-xd-svg";
import CSS3Icon from "./../components/icons/svg/css3-svg";
import ExpressJSIcon from "./../components/icons/svg/express-svg";
import GitIcon from "./../components/icons/svg/git-svg";
import HTML5Icon from "./../components/icons/svg/html5-svg";
import IntelliJIcon from "./../components/icons/svg/intellij-svg";
import JavaIcon from "./../components/icons/svg/java-svg";
import JavaScriptIcon from "./../components/icons/svg/javascript-svg";
import MongoDBIcon from "./../components/icons/svg/mongodb-svg";
import MUIIcon from "./../components/icons/svg/mui-svg";
import MySQLIcon from "./../components/icons/svg/mysql-svg";
import NodeJSIcon from "./../components/icons/svg/nodejs-svg";
import PostmanIcon from "./../components/icons/svg/postman-svg";
import ReactJSIcon from "./../components/icons/svg/reactjs-svg";
import StyledComponentsIcon from "./../components/icons/svg/styled-components-svg";
import VirtualBoxIcon from "./../components/icons/svg/virtual-box-svg";
import VSCodeIcon from "./../components/icons/svg/vscode-svg";
import WindowsServerIcon from "./../components/icons/svg/windows-server-svg";
import DockerMarkWhite from "../components/icons/svg/docker-mark-white";

const techStacks = [
  {
    category: "Databases",
    stacks: [
      {
        name: "MySQL",
        icon: <MySQLIcon />,
      },
      {
        name: "MongoDB",
        icon: <MongoDBIcon />,
      },
    ],
    inLayout: 1,
    showPriority: 2,
  },
  {
    category: "Virtualization",
    stacks: [
      { name: "VirtualBox", icon: <VirtualBoxIcon /> },
      { name: "Windows Server", icon: <WindowsServerIcon /> },
    ],
    inLayout: 4,
    showPriority: 4,
  },
  {
    category: "CASE tools",
    stacks: [
      { name: "Git", icon: <GitIcon /> },
      { name: "VSCode", icon: <VSCodeIcon /> },
      { name: "Docker", icon: <DockerMarkWhite /> },
      { name: "Postman", icon: <PostmanIcon /> },
      { name: "Adobe XD", icon: <AdobeXDIcon /> },
      { name: "IntelliJ IDEA", icon: <IntelliJIcon /> },
      // { name: "Visual Paradigm", icon: <JavaIcon /> },
    ],
    inLayout: 3,
    showPriority: 5,
  },
  {
    category: "Programming languages",
    stacks: [
      { name: "JavaScript", icon: <JavaScriptIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      { name: "Java", icon: <JavaIcon /> },
    ],
    inLayout: 2,
    showPriority: 1,
  },
  {
    category: "Libraries and frameworks",
    stacks: [
      { name: "React", icon: <ReactJSIcon /> },
      { name: "Express", icon: <ExpressJSIcon /> },
      { name: "Mongoose", icon: <MongooseIcon /> },
      {
        name: "Spring (used in internship)",
        icon: <SpringIcon />,
      },
    ],
    inLayout: 5,
    showPriority: 3,
  },
  {
    category: "Others",
    stacks: [
      { name: "HTML5", icon: <HTML5Icon /> },
      { name: "CSS3", icon: <CSS3Icon /> },
      { name: "Bootstrap", icon: <BootstrapIcon /> },
      { name: "Material UI", icon: <MUIIcon /> },
      { name: "Styled components", icon: <StyledComponentsIcon /> },
      { name: "Node.js", icon: <NodeJSIcon /> },
    ],
    inLayout: 6,
    showPriority: 6,
  },
];

export function getTechStacks() {
  return techStacks.filter((stack) => stack);
}
