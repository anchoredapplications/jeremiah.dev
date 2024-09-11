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
    MathAndPhysicsClub,
    SigmaZeta,
    EducationalTestingService,
    AssociationForComputingMachinery
} from '@/components/utility/SVGs'

const skills = {
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
    focuses: [{
        type: "Major",
        name: "Computer Science",
        gpa: "3.90",
        description: (<div>
                <p>
                    My Computer Science major provided a strong foundation in theoretical concepts, including algorithms, data structures, and system design. These courses enhanced my understanding of software and hardware interactions and deepened my ability to grasp complex system architectures.
                </p>
                <p>
                    Through my studies, I developed a keen ability to learn and adapt to new technologies. This theoretical knowledge has been crucial in my five years of professional experience, where it continues to inform my approach to problem-solving and innovation in the tech industry.
                </p>
            </div>) 
    },{
        type: "Major",
        name: "General Mathematics",
        gpa: "3.91",
        description: (<div>
            <p>
                In my General Mathematics major, I explored a range of mathematical topics, developing a solid understanding of both theoretical and applied mathematics. I served as a teacher’s aide and tutor, which reinforced my problem-solving skills and ability to communicate complex ideas.
            </p>
            <p>
                This major taught me to approach challenges with both abstract and practical thinking. I was honored with the Mathematics Achievement Award for my excellence in upper-division courses and creativity in problem-solving.
            </p>      
        </div>)
    }],
    description: (<li>Received a liberal arts degree. Has proficiency in the arts, including expressing oneself orally and through composition.</li>),
    institution: "College of the Ozarks",
    location: "Point Lookout, Missouri",
    startDate: new Date(2015, 8),
    endDate: new Date(2020, 5),
    commendations: [
        decorations.MajorFieldExam,
        decorations.MathAndPhysicsClubPresident,
        decorations.SigmaZetaPresident,
        decorations.AssociationForComputingMachinery
    ],
}

module.exports = {experiences, academia, decorations, skills};