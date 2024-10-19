import {
    DotNetCore, 
    HTML5, 
    JavaScript, 
    Telerik, 
    TypeScript, 
    DynamoDB, 
    React, 
    Vue, 
    GoogleTagManager, 
    JQuery, 
    LaTeX, 
    Mathematica, 
    PSPP, 
    MatLab, 
    Geogabra, 
    GoLang, 
    Thymeleaf,
    Docker,
} from '@/components/utility/SVGs'

export const skills = {
    JavaScript: {
        subtitle: "JavaScript",
        image: JavaScript(),
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    HTML5: {
        subtitle: "HTML 5",
        image: HTML5(),
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    JQuery: {
        subtitle: "jQuery",
        image: JQuery(),
        href: "https://jquery.com/"
    },
    VueJS: {
        subtitle: "VueJS",
        image: Vue(),
        href: "https://vuejs.org/"
    },
    GoogleTagManager: {
        subtitle: "GTM",
        tooltip: "Google Tag Manager",
        image: GoogleTagManager(),
        href: "https://support.google.com/tagmanager/"
    },
    DynamoDB: {
        subtitle: "DynamoDB",
        image: DynamoDB(),
        href: "https://aws.amazon.com/dynamodb/"
    },
    ReactJs: {
        subtitle: "ReactJS",
        image: React(),
        href: "https://reactjs.org/"
    },
    TypeScript: {
        subtitle: "TypeScript",
        image: TypeScript(),
        href: "https://www.typescriptlang.org/"
    },
    Telerik: {
        subtitle: "KendoUI",
        image: Telerik(),
        href: "https://www.telerik.com/kendo-ui"
    },
    DotNetCore: {
        subtitle: ".NET Core",
        image: DotNetCore(),
        href: "https://docs.microsoft.com/en-us/dotnet/core/"
    },
    LaTeX: {
        subtitle: "LaTeX",
        image: LaTeX(),
        href: "https://www.latex-project.org/"
    },
    Mathematica: {
        subtitle: "Mathematica",
        image: Mathematica(),
        href: "https://www.wolfram.com/mathematica/"
    },
    PSPP: {
        subtitle: "PSPP",
        image: PSPP(),
        href: "https://www.gnu.org/software/pspp/"
    },
    MatLab: {
        subtitle: "MatLab",
        image: MatLab(),
        href: "https://www.mathworks.com/products/matlab.html"
    },
    Geogabra: {
        subtitle: "Geogabra",
        image: Geogabra(),
        href: "https://www.geogebra.org/"
    },
    GoLang: {
        subtitle: "GoLang",
        image: GoLang(),
        href: "https://golang.org/"
    },
    Thymeleaf: {
        subtitle: "Thymeleaf",
        image: Thymeleaf(),
        href: "https://www.thymeleaf.org/"
    },
    Docker: {
        subtitle: "Docker",
        image: Docker(),
        href: "https://www.docker.com/"
    },
};

export const experiences = [
    {
        employer: "O'Reilly Technology Services",
        title: "UI/UX Technical Lead",
        type: "Full-time",
        startDate: new Date(2024, 2, 1),
        //endDate: "", 
        location: "Remote",
        description: (<ul>
            <li>Worked as a UI/UX Technical liaision for the Online Store Team, providing advisement for current and planned front-end efforts</li>
            <li>Guided UI/UX development, enforcing adherence to coding best-practices and the SCRUM methodology. </li>
        </ul>),
        skills: [
            skills.VueJS,
            skills.TypeScript,
            skills.JQuery,
            skills.GoogleTagManager,
            skills.Thymeleaf,
            skills.Docker,
            skills.HTML5,
        ]
    },
    {
        employer: "O'Reilly Technology Services",
        title: "UI / UX Developer II",
        type: "Full-time",
        startDate: new Date(2022, 2, 1),
        endDate: new Date(2024, 2, 1), 
        //endDate: "", 
        location: "Remote",
        description: (<ul>
            <li>Plans, documents, develops, and tests computer software by applying knowledge of programming techniques and computer systems.</li>
            <li>Writes clean, semantic HTML and CSS in conjunction with client-side JavaScript frameworks. </li>
        </ul>),
        skills: [
            skills.HTML5,
            skills.VueJS,
            skills.TypeScript,
            skills.JQuery,
            skills.GoogleTagManager,
            skills.Thymeleaf,
            skills.Docker,
        ]
    },
    {
        employer: "Netsmart",
        title: "Software Engineer",
        type: "Full-time",
        startDate: new Date(2020, 6, 1),
        endDate: new Date(2022, 2, 1), 
        location: "Springfield, MO",
        description: (<ul>
                <li>Participates in the software development life cycle including requirement analysis, planning, software design, development, review, unit/integration testing, and deployment.</li>
                <li>Identify, implement and support technical solutions to deliver business requirements</li>
            </ul>),
        skills: [
            skills.DynamoDB,
            skills.ReactJs,
            skills.TypeScript,
            skills.Telerik,
            skills.DotNetCore,
            skills.GoLang,
            skills.HTML5, 
            skills.JQuery,
        ]
    },
    {
        employer: "College of the Ozarks",
        title: "Lab Assistant",
        type: "Part-time",
        startDate: new Date(2017, 8, 1),
        endDate: new Date(2020, 5, 1), 
        location: "Point Lookout, MO",
        description: (<p>
            Worked as a lab assistant in the College's mathematics and physics department. Assisted in instructing students in the areas of Calculus, Calculus-based Physics, Abstract Algebra, Statistics, both Numerical and Real analysis, and more.
        </p>),
        skills: [
            skills.LaTeX,
            skills.Mathematica,
            skills.PSPP,
            skills.MatLab,
            skills.Geogabra,
        ]
    }
]
