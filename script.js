const content = {
    '/Welcome.html': {
        title: 'Welcome',
        type: 'text',
        content: `Hey there! Welcome to my portfolio — styled just like a terminal for a bit of that coder's charm! Here, you can navigate with just the arrow keys, exploring sections that open up into the story of my work, projects, and passions. Think of it as a little guided tour where you're in control, moving through the "folders" of my experience and seeing what I've been up to. I designed it this way to make your visit fun and interactive, giving you a true feel for who I am as a developer. So, go ahead, take your time, enjoy the retro vibe, and feel free to dig deep — you might just find something interesting in every corner. Let the adventure begin!`
    },
    '/About.html': {
        title: 'About Me',
        type: 'structured',
        content: [
            {
                label: "Name",
                value: "Mohammed Amine Hssaine"
            },
            {
                label: "Education",
                value: "AI Engineering Student at ENSAM Meknes, Morocco"
            },
            {
                label: "Interests",
                value: "AI, Software Engineering, Data Science, Competitive Programming"
            },
            {
                label: "Goal",
                value: "Aspiring to innovate in AI and contribute to technological advancement while building a career as an AI engineer in a leading tech company"
            }
        ]
    },
    '/Education.html': {
        title: 'Education',
        type: 'structured',
        content: [
            {
                label: "Current Institution",
                value: "ENSAM Meknes (National School of Arts and Crafts)"
            },
            {
                label: "Engineering Cycle (Sep 2024 - Present)",
                value: [
                    "Specializing in Artificial Intelligence and Data Technologies with focus on:",
                    "• Natural Language Processing and Advanced Language Models",
                    "• Computer Vision and Image Processing",
                    "• Deep Learning and Neural Network Architectures",
                    "• Industrial AI Applications and Automation",
                    "• Explainable AI and Ethical Development"
                ]
            },
            {
                label: "API Preparatory Cycle (Sep 2022 - May 2024)",
                value: [
                    "Completed intensive preparatory program focused on:",
                    "• Advanced Mathematics (Analysis, Linear Algebra, Probability)",
                    "• Physics (Mechanics, Electromagnetics, Quantum Physics)",
                    "• Engineering Fundamentals",
                    "• Computer Science Foundations",
                    "Developed strong analytical and problem-solving capabilities"
                ]
            }
        ]
    },
    '/Skills.html': {
        title: 'Technical Skills',
        type: 'structured',
        content: [
            {
                label: "Programming Languages",
                value: [
                    "Python - Primary language for AI/ML development",
                    "Java - Object-oriented programming",
                    "JavaScript - Frontend development",
                    "C++ - System programming",
                    "PHP - Web development"
                ]
            },
            {
                label: "AI & Machine Learning",
                value: [
                    "Deep Learning & Neural Networks",
                    "Natural Language Processing",
                    "Computer Vision",
                    "Machine Learning Algorithms",
                    "Industrial AI Applications"
                ]
            },
            {
                label: "Web Technologies",
                value: [
                    "HTML5/CSS3",
                    "React.js",
                    "Django",
                    "Node.js",
                    "RESTful APIs"
                ]
            },
            {
                label: "Development Tools",
                value: [
                    "Git & GitHub",
                    "Docker",
                    "Linux",
                    "VS Code",
                    "PyCharm"
                ]
            }
        ]
    },
    '/Projects.html': {
        title: 'Projects',
        type: 'structured',
        content: [
            {
                label: "Filière Fit",
                value: [
                    {
                        label: "Overview",
                        value: "An intelligent web platform helping students predict their acceptance chances into different majors using machine learning and historical data analysis."
                    },
                    {
                        label: "Key Features",
                        value: [
                            "Advanced predictive analytics engine",
                            "Interactive data visualizations",
                            "Personalized recommendations",
                            "User-friendly interface",
                            "Real-time predictions"
                        ]
                    },
                    {
                        label: "Technologies Used",
                        value: [
                            "Frontend: React.js, Tailwind CSS",
                            "Backend: Node.js, Express",
                            "Database: MongoDB",
                            "ML Pipeline: Python, scikit-learn",
                            "Deployment: Docker, AWS"
                        ]
                    },
                    {
                        label: "Impact",
                        value: "Helped hundreds of students make informed decisions about their academic paths through data-driven insights and predictions."
                    }
                ]
            }
        ]
    },
    '/Extracurriculars.html': {
        title: 'Leadership & Activities',
        type: 'structured',
        content: [
            {
                label: "Gadz-IT Club (ENSAM Meknes)",
                value: [
                    {
                        label: "Vice President (May 2024 - Present)",
                        value: "Leading club initiatives and overseeing technical workshops and events"
                    },
                    {
                        label: "Head of Dev Training (July 2024 - Present)",
                        value: "Coordinating and conducting web development training sessions"
                    },
                    {
                        label: "Front End Web Dev Instructor (Sep 2023 - Jan 2024)",
                        value: "Taught HTML, CSS, JavaScript, and modern frameworks to club members"
                    },
                    {
                        label: "Head of Sponsorship (May 2023 - May 2024)",
                        value: "Secured funding for Arts et Métiers Programming Contest 3, managed event logistics, and developed sponsorship proposals"
                    },
                    {
                        label: "Member (Sep 2022 - May 2023)",
                        value: "Participated in competitive programming and enhanced C++ skills"
                    }
                ]
            },
            {
                label: "Space Club Arts & Métiers",
                value: [
                    {
                        label: "Head of Logistics (May 2023 - May 2024)",
                        value: "Led event planning for Astrowonder and A Day of Science V1, focusing on space and aeronautics"
                    },
                    {
                        label: "Member (Sep 2022 - May 2023)",
                        value: "Enhanced space knowledge and organized 'A Day of Science V', developing organizational and teamwork skills"
                    }
                ]
            }
        ]
    }
};

// Style configuration
const styles = {
    label: {
        color: "rgb(74, 222, 128)",
        fontWeight: "bold"
    },
    value: {
        color: "rgb(210, 245, 227)"
    },
    section: {
        marginBottom: "1.5rem"
    },
    subsection: {
        marginLeft: "1.5rem",
        marginTop: "0.5rem"
    }
};

// State management
const state = {
    selectedIndex: 0,
    files: Object.keys(content)
};

// DOM elements
const fileBrowser = document.getElementById('fileBrowser');
const contentTitle = document.getElementById('contentTitle');
const contentBody = document.getElementById('contentBody');

// Initialize file browser
function initializeFileBrowser() {
    fileBrowser.innerHTML = '';
    state.files.forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = `file-item ${index === state.selectedIndex ? 'selected' : ''}`;
        fileItem.textContent = file;
        fileItem.onclick = () => updateSelectedFile(index);
        fileBrowser.appendChild(fileItem);
    });
    updateContent();
}

// Update selected file
function updateSelectedFile(index) {
    const oldSelected = fileBrowser.children[state.selectedIndex];
    const newSelected = fileBrowser.children[index];
    
    if (oldSelected) oldSelected.classList.remove('selected');
    if (newSelected) newSelected.classList.add('selected');
    
    state.selectedIndex = index;
    updateContent();
}

// Render structured content
function renderStructuredContent(contentData) {
    const container = document.createElement('div');
    container.className = 'structured-content';

    contentData.forEach(item => {
        const section = document.createElement('div');
        section.className = 'content-section';
        section.style.marginBottom = styles.section.marginBottom;

        // Create label
        const label = document.createElement('div');
        label.style.color = styles.label.color;
        label.style.fontWeight = styles.label.fontWeight;
        label.textContent = item.label;
        section.appendChild(label);

        // Create value container
        const valueContainer = document.createElement('div');
        valueContainer.style.color = styles.value.color;
        valueContainer.style.marginLeft = styles.subsection.marginLeft;
        valueContainer.style.marginTop = styles.subsection.marginTop;

        if (Array.isArray(item.value)) {
            // Handle nested structure
            if (typeof item.value[0] === 'object') {
                item.value.forEach(subItem => {
                    const subSection = document.createElement('div');
                    subSection.style.marginBottom = "1rem";

                    const subLabel = document.createElement('div');
                    subLabel.style.color = styles.label.color;
                    subLabel.style.fontWeight = styles.label.fontWeight;
                    subLabel.textContent = subItem.label;

                    const subValue = document.createElement('div');
                    subValue.style.color = styles.value.color;
                    subValue.style.marginLeft = "1rem";

                    if (Array.isArray(subItem.value)) {
                        subItem.value.forEach(listItem => {
                            const listItemElem = document.createElement('div');
                            listItemElem.textContent = listItem;
                            subValue.appendChild(listItemElem);
                        });
                    } else {
                        subValue.textContent = subItem.value;
                    }

                    subSection.appendChild(subLabel);
                    subSection.appendChild(subValue);
                    valueContainer.appendChild(subSection);
                });
            } else {
                // Handle simple arrays
                item.value.forEach(listItem => {
                    const listItemElem = document.createElement('div');
                    listItemElem.textContent = listItem;
                    valueContainer.appendChild(listItemElem);
                });
            }
        } else {
            valueContainer.textContent = item.value;
        }

        section.appendChild(valueContainer);
        container.appendChild(section);
    });

    return container;
}

// Update content
function updateContent() {
    const currentPath = state.files[state.selectedIndex];
    const currentContent = content[currentPath];
    
    contentTitle.textContent = currentContent.title;
    contentBody.innerHTML = '';

    if (currentContent.type === 'structured') {
        contentBody.appendChild(renderStructuredContent(currentContent.content));
    } else {
        const textContent = document.createElement('div');
        textContent.style.color = styles.value.color;
        textContent.textContent = currentContent.content;
        contentBody.appendChild(textContent);
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (state.selectedIndex > 0) {
                updateSelectedFile(state.selectedIndex - 1);
            }
            break;
        case 'ArrowDown':
            if (state.selectedIndex < state.files.length - 1) {
                updateSelectedFile(state.selectedIndex + 1);
            }
            break;
        case 'Enter':
            updateContent();
            break;
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeFileBrowser();
    
    // Add click handler for resume link
    const resumeLink = document.querySelector('a[href="#resume"]');
    resumeLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('cvEng.pdf', '_blank');
    });
});