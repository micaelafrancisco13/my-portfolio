import Bella_Olonje from '../images/project-screenshots/bella-olonje.png'
import Get_Done from '../images/project-screenshots/get-done.png'
import Lucky_Prints from '../images/project-screenshots/lucky-prints.png'
import Login_UI from '../images/project-screenshots/login-ui.png'
import Sample_portfolio from '../images/project-screenshots/sample-portfolio.png'
import useForm_hook from '../images/project-screenshots/useForm-hook.png'

export const projectDetails = [
    {
        name: 'Bella Olonje',
        screenshot: Bella_Olonje,
        description: 'First time creating a landing page',
        techStacks: ['Vanilla HTML', 'Vanilla CSS'],
        videoId: 'CwVRfTM6KmI',
        live: 'https://bella-olonje-ela.vercel.app/',
        github: 'https://github.com/micaelafrancisco13/IT-304-midterm/tree/main',
    },
    {
        name: 'Get Done',
        screenshot: Get_Done,
        description: 'Front-end only to-do list web app inspired by Todoist',
        techStacks: ['React', 'Material UI'],
        videoId: 'xdLHRdQl1JU',
        live: 'https://get-done-ela.vercel.app/',
        github: 'https://github.com/micaelafrancisco13/get-done/tree/main',
    },
    {
        name: 'Lucky Prints',
        screenshot: Lucky_Prints,
        description: 'Full-stack online shop',
        techStacks: [
            'MongoDB',
            'Express',
            'React',
            'Node.js',
            // "Joi",
            // "JWTs",
            'Material UI',
            // "Multer",
            'Paypal APIs',
        ],
        videoId: 'aCqTLipiQso',
        live: 'https://luckyprints.vercel.app/',
    },
]

// doesn't need preview
const otherProjects = [
    {
        name: 'Simple login page',
        screenshot: Login_UI,
        description: 'DOM manipulated authentication validation',
        techStacks: ['Vanilla HTML', 'Vanilla CSS', 'Vanilla JavaScript'],
        live: 'https://ela304login-interface.vercel.app/',
        github: 'https://github.com/micaelafrancisco13/IT-304-final-exam-login-interface/tree/main',
    },
    {
        name: "Simple portfolio's landing page",
        screenshot: Sample_portfolio,
        description: 'Yet another landing page',
        techStacks: ['Vanilla HTML', 'Vanilla CSS'],
        live: 'https://ela304portfolio.vercel.app/',
        github: 'https://github.com/micaelafrancisco13/IT-304-final-exam-portfolio/tree/main',
    },
    {
        name: 'useForm custom hook',
        screenshot: useForm_hook,
        description: 'Reusable custom hook for forms',
        techStacks: ['React', 'Material UI', 'Joi'],
        live: 'https://use-form-ela.vercel.app/',
        github: 'https://github.com/micaelafrancisco13/useForm-custom-hook/tree/main',
    },
    {
        name: 'Java swing desktop ordering app',
        description: 'Final requirement for our Java subject',
        techStacks: ['Java', 'Java Swing', 'MySQL'],
        github: 'https://github.com/micaelafrancisco13/Java-swing-web-like-ordering-app',
    },
]

const INITIAL_TIMEOUT = 900

export function getProjectDetails() {
    let timeout = INITIAL_TIMEOUT
    return projectDetails.map((project) => {
        project.timeout = timeout
        timeout += INITIAL_TIMEOUT
        return project
    })
}

export function getOtherProjects() {
    let timeout = INITIAL_TIMEOUT
    return otherProjects.map((project) => {
        project.timeout = timeout
        timeout += INITIAL_TIMEOUT
        return project
    })
}
