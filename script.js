const programs = [
    {
        id: 'computer-science',
        name: 'Computer Science',
        category: 'Technology',
        icon: '💻',
        description: 'Build software, solve technical problems, and shape digital innovation across industries.',
        skills: ['Programming', 'AI', 'Data Structures'],
        degreeDuration: '4 years',
        averageSalary: '$65k - $120k',
        requirements: ['Mathematics and Physics', 'Analytical thinking', 'Problem-solving skills'],
        careerPath: [
            'Software Developer',
            'Data Analyst',
            'Cybersecurity Specialist',
            'Machine Learning Engineer'
        ],
        universities: [
            { name: 'University of Cape Town', rank: 'Top 1', location: 'South Africa', focus: 'AI & Software Engineering', tags: ['Research', 'Innovation'] },
            { name: 'Stellenbosch University', rank: 'Top 2', location: 'South Africa', focus: 'Computer Systems', tags: ['Data Science', 'Engineering'] },
            { name: 'University of the Witwatersrand', rank: 'Top 3', location: 'South Africa', focus: 'Software Design', tags: ['Tech Hubs', 'Industry Links'] }
        ]
    },
    {
        id: 'engineering',
        name: 'Engineering',
        category: 'Technology',
        icon: '🛠️',
        description: 'Design and build practical solutions for infrastructure, systems, and industry challenges.',
        skills: ['Design', 'Systems Thinking', 'Project Management'],
        degreeDuration: '4 years',
        averageSalary: '$60k - $110k',
        requirements: ['Math', 'Physics', 'Strong technical aptitude'],
        careerPath: [
            'Civil Engineer',
            'Mechanical Engineer',
            'Electrical Engineer',
            'Process Engineer'
        ],
        universities: [
            { name: 'University of Pretoria', rank: 'Top 1', location: 'South Africa', focus: 'Civil & Industrial Engineering', tags: ['Research', 'Industry'] },
            { name: 'University of Johannesburg', rank: 'Top 2', location: 'South Africa', focus: 'Mechanical & Electrical', tags: ['Innovation', 'Practical Labs'] },
            { name: 'North-West University', rank: 'Top 3', location: 'South Africa', focus: 'Engineering Sciences', tags: ['Applied Learning', 'Fieldwork'] }
        ]
    },
    {
        id: 'medicine',
        name: 'Medicine',
        category: 'Health',
        icon: '🩺',
        description: 'Prepare for a rewarding career in healthcare, clinical practice, and scientific discovery.',
        skills: ['Biology', 'Communication', 'Empathy'],
        degreeDuration: '6 years',
        averageSalary: '$75k - $180k',
        requirements: ['Biology', 'Chemistry', 'Strong academic record'],
        careerPath: [
            'General Practitioner',
            'Surgeon',
            'Medical Specialist',
            'Healthcare Researcher'
        ],
        universities: [
            { name: 'University of Cape Town', rank: 'Top 1', location: 'South Africa', focus: 'Clinical Medicine', tags: ['Top Research', 'Hospital Training'] },
            { name: 'University of the Witwatersrand', rank: 'Top 2', location: 'South Africa', focus: 'Medical Sciences', tags: ['Clinical Exposure', 'Internships'] },
            { name: 'University of Pretoria', rank: 'Top 3', location: 'South Africa', focus: 'Medicine & Health Sciences', tags: ['Medical Training', 'Innovation'] }
        ]
    },
    {
        id: 'business',
        name: 'Business Administration',
        category: 'Business',
        icon: '📊',
        description: 'Learn management, leadership, finance, and strategy to drive organizational growth.',
        skills: ['Leadership', 'Finance', 'Strategy'],
        degreeDuration: '3 years',
        averageSalary: '$45k - $100k',
        requirements: ['Economics', 'Math', 'Communication'],
        careerPath: [
            'Business Analyst',
            'Marketing Manager',
            'Operations Manager',
            'Entrepreneur'
        ],
        universities: [
            { name: 'University of Stellenbosch', rank: 'Top 1', location: 'South Africa', focus: 'Business & Management', tags: ['Leadership', 'Entrepreneurship'] },
            { name: 'University of Johannesburg', rank: 'Top 2', location: 'South Africa', focus: 'Commerce & Business', tags: ['Marketing', 'Strategy'] },
            { name: 'University of Pretoria', rank: 'Top 3', location: 'South Africa', focus: 'Finance & Leadership', tags: ['Corporate Links', 'Career Growth'] }
        ]
    },
    {
        id: 'law',
        name: 'Law',
        category: 'Social Sciences',
        icon: '⚖️',
        description: 'Study legal systems, justice, and advocacy while preparing for professional practice.',
        skills: ['Critical Thinking', 'Research', 'Argumentation'],
        degreeDuration: '4 years',
        averageSalary: '$50k - $110k',
        requirements: ['English', 'History/Politics', 'Logic'],
        careerPath: [
            'Lawyer',
            'Legal Consultant',
            'Corporate Counsel',
            'Judge'
        ],
        universities: [
            { name: 'University of Cape Town', rank: 'Top 1', location: 'South Africa', focus: 'Public & Private Law', tags: ['Legal Research', 'Advocacy'] },
            { name: 'University of Pretoria', rank: 'Top 2', location: 'South Africa', focus: 'Commercial Law', tags: ['Policy', 'Justice'] },
            { name: 'University of the Witwatersrand', rank: 'Top 3', location: 'South Africa', focus: 'Legal Studies', tags: ['Litigation', 'Public Service'] }
        ]
    },
    {
        id: 'psychology',
        name: 'Psychology',
        category: 'Social Sciences',
        icon: '🧠',
        description: 'Explore human behavior and mental health to support individuals, families, and communities.',
        skills: ['Empathy', 'Communication', 'Research'],
        degreeDuration: '3 years',
        averageSalary: '$40k - $90k',
        requirements: ['Biology', 'English', 'Society/Behavior subjects'],
        careerPath: [
            'Counselor',
            'Human Resources Specialist',
            'Psychologist',
            'Community Support Worker'
        ],
        universities: [
            { name: 'University of Cape Town', rank: 'Top 1', location: 'South Africa', focus: 'Clinical & Applied Psychology', tags: ['Research', 'Mental Health'] },
            { name: 'University of Johannesburg', rank: 'Top 2', location: 'South Africa', focus: 'Behavioral Sciences', tags: ['Counseling', 'Community Work'] },
            { name: 'University of Pretoria', rank: 'Top 3', location: 'South Africa', focus: 'Psychological Sciences', tags: ['Education', 'Wellbeing'] }
        ]
    }
];

const state = {
    activeProgramId: 'computer-science',
    searchTerm: '',
    selectedCategory: 'All'
};

const programCards = document.getElementById('programCards');
const selectedProgram = document.getElementById('selectedProgram');
const universitiesGrid = document.getElementById('universitiesGrid');
const programSearch = document.getElementById('programSearch');
const categoryFilter = document.getElementById('categoryFilter');
const careerPathway = document.getElementById('careerPathway');
const navMenu = document.querySelector('.nav-menu');
const menuToggle = document.querySelector('.menu-toggle');

function getVisiblePrograms() {
    return programs.filter((program) => {
        const matchesCategory = state.selectedCategory === 'All' || program.category === state.selectedCategory;
        const matchesSearch = program.name.toLowerCase().includes(state.searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

function renderPrograms() {
    const visiblePrograms = getVisiblePrograms();

    if (!visiblePrograms.length) {
        programCards.innerHTML = `
            <div class="empty-state">
                <h3>No matching programs found</h3>
                <p>Try another keyword or category.</p>
            </div>
        `;
        return;
    }

    programCards.innerHTML = visiblePrograms
        .map(
            (program) => `
                <article class="program-card ${program.id === state.activeProgramId ? 'active' : ''}" data-id="${program.id}">
                    <div class="program-icon">${program.icon}</div>
                    <h3>${program.name}</h3>
                    <p>${program.description}</p>
                    <div class="chip-row">
                        <span class="chip">${program.category}</span>
                        <span class="chip">${program.degreeDuration}</span>
                    </div>
                </article>
            `
        )
        .join('');

    document.querySelectorAll('.program-card').forEach((card) => {
        card.addEventListener('click', () => {
            state.activeProgramId = card.dataset.id;
            renderPrograms();
            renderProgramDetails();
        });
    });
}

function renderProgramDetails() {
    const activeProgram = programs.find((program) => program.id === state.activeProgramId) || programs[0];
    if (!activeProgram) return;

    selectedProgram.innerHTML = `
        <div class="detail-header">
            <div>
                <span class="eyebrow">Featured program</span>
                <h3>${activeProgram.name}</h3>
            </div>
            <button class="btn btn-primary">Explore Now</button>
        </div>
    `;

    const universityMarkup = activeProgram.universities
        .map(
            (uni) => `
                <div class="university-card">
                    <div class="uni-top">
                        <div class="uni-name">${uni.name}</div>
                        <span class="rank-badge">${uni.rank}</span>
                    </div>
                    <div class="uni-card-info">${uni.location} • ${uni.focus}</div>
                    <div class="uni-tags">
                        ${uni.tags.map((tag) => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            `
        )
        .join('');

    universitiesGrid.innerHTML = universityMarkup;

    careerPathway.innerHTML = `
        <div class="detail-card">
            <div class="detail-header">
                <div>
                    <span class="eyebrow">Career path</span>
                    <h3>${activeProgram.name}</h3>
                </div>
                <span class="chip">Avg. salary: ${activeProgram.averageSalary}</span>
            </div>
            <div class="detail-meta">
                <span>Duration: ${activeProgram.degreeDuration}</span>
                <span>Popular roles: ${activeProgram.careerPath.slice(0, 2).join(', ')}</span>
            </div>
            <p>${activeProgram.description}</p>
            <ul class="requirement-list">
                ${activeProgram.requirements.map((item) => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <div class="university-panel">
            <h3>Top university choices</h3>
            <div class="university-list">${universityMarkup}</div>
        </div>
    `;
}

function setupCategoryOptions() {
    const categories = [...new Set(programs.map((program) => program.category))];
    categoryFilter.innerHTML = ['All', ...categories]
        .map((category) => `<option value="${category}">${category}</option>`)
        .join('');
}

function attachEvents() {
    programSearch.addEventListener('input', (event) => {
        state.searchTerm = event.target.value.trim();
        renderPrograms();
    });

    categoryFilter.addEventListener('change', (event) => {
        state.selectedCategory = event.target.value;
        renderPrograms();
    });

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            document.querySelectorAll('.nav-link').forEach((navLink) => navLink.classList.remove('active'));
            link.classList.add('active');
            navMenu.classList.remove('active');
        });
    });
}

function initialize() {
    setupCategoryOptions();
    renderPrograms();
    renderProgramDetails();
    attachEvents();
}

initialize();
