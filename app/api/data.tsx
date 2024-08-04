const {
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
    MathAndPhysicsClub,
    SigmaZeta,
    EducationalTestingService,
    AssociationForComputingMachinery
} = require("@/app/images/SVGs")

const skills = {
    JavaScript: {subtitle: "JavaScript", image:JavaScript()},
    HTML5: {subtitle: "HTML 5", image:HTML5()},
    JQuery: {subtitle: "jQuery", image:JQuery()},
    VueJS: {subtitle: "VueJS", image:Vue()},
    GoogleTagManager: {subtitle: "GTM", tooltip: "Google Tag Manager", image:GoogleTagManager()},
    DynamoDB: {subtitle: "DynamoDB", image:DynamoDB()},
    ReactJs: {subtitle: "ReactJS", image:React()},
    TypeScript: {subtitle: "TypeScript", image:TypeScript()},
    Telerik: {subtitle: "KendoUI", image:Telerik()},
    DotNetCore: {subtitle: ".NET Core", image:DotNetCore()},
    LaTeX: {subtitle: "LaTeX", image:LaTeX()},
    Mathematica: {subtitle: "Mathamatica", tooltip: "Wolfram Mathematica", image:Mathematica()},
    PSPP: {subtitle: "PSPP", image:PSPP()},
    MatLab: {subtitle: "MatLab", image:MatLab()},
    Geogabra: {subtitle: "Geogabra", image:Geogabra()},
    GoLang: {subtitle: "GoLang", image:GoLang()},
    Thymeleaf: {subtitle: "Thymeleaf", image:Thymeleaf()},
    Docker: {subtitle: "Docker", image:Docker()},
}
const decorations = {
    MathAndPhysicsClubPresident: {title: "President", dates:"2019-2020", subtitle: "Math & Physics Club", link: process.env.COLLEGE_OF_THE_OZARKS_URL, image:MathAndPhysicsClub()},
    SigmaZetaPresident: {title: "President", dates:"2020", subtitle: "ΣΖ Honor Society", tooltip: "Sigma Zeta Honor Society Beta-Phi Chapter", link: process.env.SIGMA_ZETA_URL, image:SigmaZeta()},
    MajorFieldExam: {title: "189/200", dates:"2020", subtitle: "Major Field Exam", tooltip: "Major Field Exam for Mathematics", link: process.env.EDUCATIONAL_TESTING_SERVICE_URL, image:EducationalTestingService()},
    AssociationForComputingMachinery: {title: "Vice-President", dates:"2018-2019", subtitle: "ACM Club", tooltip: "Association for Computing Machinery", link: process.env.ASSOCIATION_FOR_COMPUTING_MACHINERY_URL, image:AssociationForComputingMachinery()},
}
const experiences = [
    {
        employer: "O'Reilly Technology Services",
        title: "UI/UX Technical Lead",
        type: "Full-time",
        startDate: new Date(2024, 2, 1),
        //endDate: "", 
        location: "Remote",
        description: (<ul>
            <li>Worked as a UI/UX Technical liaision for the Online Store Team, providing advisement for current and planned front-end efforts</li>
            <li>Collaberated with fellow leads to guide UI/UX development and adherence to coding best-practices. </li>
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
            Worked as a lab assistant in the College's mathematics department. Assisted in instructing students in the areas of Calculus, Discrete Math, Trigonometry, and Statistics.
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
const academia = {
    degree: "Bachelor's Degree",
    majors: ["Mathematics & Computer Science"],
    description: (<ul>
            <li>Received a liberal arts degree. Has proficiency in the arts, including expressing oneself orally and through composition.</li>
            <li>Earned a major in Computer Science. Has a vast experience with computer systems and programming with both higher-level and lower-level languages.</li>
            <li>Acquired a second major in Mathematics. Has the ability to solve complex problems through computational analysis, including but not limited to problems involving: Trigonometry, Calculus, Number Theory, Physics, and Statistics.</li>
        </ul>),
    institution: "College of the Ozarks",
    location: "Point Lookout, Missouri",
    startDate: new Date(2015, 8),
    endDate: new Date(2020, 5),
    skills: [
        decorations.MajorFieldExam,
        decorations.MathAndPhysicsClubPresident,
        decorations.SigmaZetaPresident,
        decorations.AssociationForComputingMachinery
    ],
}

module.exports = {experiences, academia, decorations, skills};