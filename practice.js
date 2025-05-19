// Amazon Leadership Principles Questions Database
const questions = {
    // 1. Deliver Results
    "1": [
        "Tell me about a time you had to deliver results under tight constraints or deadlines.",
        "Describe a project where you had to overcome significant obstacles to achieve your goal.",
        "Share an example of when you had to make a difficult decision to complete a task.",
        "Tell me about a time you prioritized tasks to achieve a goal on time.",
        "Give an example of a project that didn't go as planned and how you still delivered.",
        "When have you gone above and beyond to achieve results?",
        "Tell me about a time when you were able to deliver a difficult project on time.",
        "Describe how you've monitored progress on your projects to ensure timely completion.",
        "Tell me about a time when you had to adjust your work to deliver results on time.",
        "Give an example of how you've worked backwards from a deadline to plan a complex project."
    ],
    
    // 2. Invent and Simplify
    "2": [
        "Describe a time when you found a simple solution to a complex problem.",
        "Tell me about something you invented that simplified a process.",
        "When have you eliminated complexity to make something more user-friendly?",
        "Share an example of how you challenged conventional thinking to create a better solution.",
        "Tell me about a time you implemented a new approach that improved efficiency.",
        "Describe how you identified and eliminated an unnecessary process or step.",
        "When have you used technology to simplify a manual process?",
        "Tell me about a time you challenged yourself to find the easiest way to solve a problem.",
        "How have you made a complicated system or process easier to understand?",
        "Give an example of when you improved something by making it more streamlined."
    ],
    
    // 3. Customer Obsession
    "3": [
        "Tell me about a time when you went above and beyond for a customer.",
        "Describe how you've incorporated customer feedback into your work or product.",
        "When have you made a decision that benefited customers at the expense of short-term business goals?",
        "Give an example of how you identified and addressed a customer need that wasn't obvious.",
        "Tell me about a time you had to balance competing customer priorities.",
        "Share an experience where you advocated for a customer when others didn't.",
        "Describe a time when you had to deal with an unsatisfied customer and how you turned it around.",
        "How have you measured customer satisfaction in previous roles?",
        "Tell me about a time when you anticipated a customer's needs before they expressed them.",
        "When have you used customer insights to drive a significant improvement or innovation?"
    ],
    
    // 4. Ownership
    "4": [
        "Tell me about a time when you took ownership of a problem that wasn't yours to solve.",
        "Describe a situation where you identified a problem and took action without being asked.",
        "When have you gone beyond your job responsibilities to get something done?",
        "Share an example of when you owned a mistake and what you did about it.",
        "Tell me about a time you saw a long-term problem and took steps to prevent it.",
        "Give an example of when you acted in the company's best interest without being asked.",
        "Describe a time when you took responsibility for a failed project or initiative.",
        "When have you demonstrated a sense of urgency to resolve an issue that others didn't see as important?",
        "Tell me about a time when you had to make a difficult decision without having all the information.",
        "Share an experience where you had to pursue proper channels to get your problem fixed."
    ],
    
    // 5. Dive Deep
    "5": [
        "Tell me about a time you found a root cause by digging into data or details.",
        "Describe a situation where your deep understanding of a system helped solve a problem.",
        "When have you uncovered an issue that others had missed by investigating thoroughly?",
        "Share an example where your attention to detail had a significant impact.",
        "Tell me about a time when you were skeptical about a metric or claim and investigated it.",
        "Give an example of when you needed to gather detailed information to make a decision.",
        "Describe how you validated assumptions on a project through thorough investigation.",
        "When have you identified a pattern or trend that others didn't notice?",
        "Tell me about a time you had to become an expert on something quickly to solve a problem.",
        "Share an example where asking detailed questions led to a breakthrough."
    ],
    
    // 6. Learn and Be Curious
    "6": [
        "Tell me about a time you learned a new skill to complete a task or project.",
        "Describe how you've stayed current in your field and applied that knowledge.",
        "When have you sought to understand a different perspective to improve your work?",
        "Share an example of a time you explored a new approach or technology.",
        "Tell me about a time you ventured outside your comfort zone to learn something new.",
        "Give an example of how your curiosity led to innovation or improvement.",
        "Describe how you've encouraged others to learn and be curious.",
        "When have you challenged an existing process because you were curious about a better way?",
        "Tell me about a time you turned a failure into a learning opportunity.",
        "Share a situation where your curiosity about a customer or business need led to a new solution."
    ],
    
    // 7. Have Backbone; Disagree and Commit
    "7": [
        "Tell me about a time when you disagreed with your manager or team's approach.",
        "Describe a situation where you had to stand up for what you believed was right.",
        "When have you committed to a team decision despite initially disagreeing with it?",
        "Share an example of when you challenged the status quo because you believed there was a better way.",
        "Tell me about a time you had to deliver difficult feedback to someone.",
        "Give an example of how you've respectfully challenged a decision from leadership.",
        "Describe a time when you had to balance being firm and being respectful.",
        "When have you taken an unpopular stance on something you believed in?",
        "Tell me about a time you navigated a politically sensitive situation while staying true to your principles.",
        "Share an example of when you had to persuade others about an important issue."
    ],
    
    // 8. Earn Trust
    "8": [
        "Tell me about a time when you gained the trust of a skeptical stakeholder or colleague.",
        "Describe how you've built rapport with a new team or customer.",
        "When have you had to admit a mistake to maintain trust with others?",
        "Share an example of how you established credibility in a new role or environment.",
        "Tell me about a time you had to give candid feedback to build long-term trust.",
        "Give an example of when you maintained confidentiality despite pressure to share information.",
        "Describe a situation where you had to rebuild damaged trust.",
        "When have you made a difficult decision that maintained your integrity?",
        "Tell me about a time you helped a team member even though there was no immediate benefit to you.",
        "Share an experience where transparency was important to building trust."
    ]
};

// Story mapping to principles
const storyMapping = {
    "1": ["transcoding-system", "mpi-debugging", "incomplete-data-debugging", "report-generation-fix", "logging-fix-at-hsbc", "mentoring-web-dev", "delivering-harsh-truth", "greatest-weakness", "unclear-responsibility", "calculated-risk", "difficult-client", "prioritizing-customers", "communicating-change", "career-switch"],
    "2": ["transcoding-system", "incomplete-data-debugging", "logging-fix-at-hsbc", "simple-log-solution", "communicating-change", "questioning-report-requirements"],
    "3": ["report-generation-fix", "difficult-client", "prioritizing-customers", "questioning-report-requirements", "sso-security-conflict"],
    "4": ["transcoding-system", "mentoring-web-dev", "delivering-harsh-truth", "greatest-weakness", "unclear-responsibility", "critical-feedback", "apologizing-to-someone", "calculated-risk", "prioritizing-customers", "sso-security-conflict", "communicating-change"],
    "5": ["transcoding-system", "mpi-debugging", "incomplete-data-debugging", "difficult-client", "communicating-change", "dashboard-ui-enhancement", "sso-security-conflict"],
    "6": ["team-member-failed", "greatest-weakness", "unclear-responsibility", "critical-feedback", "difficult-client", "dashboard-ui-enhancement", "career-switch"],
    "7": ["delivering-harsh-truth", "unclear-responsibility", "devops-integration", "questioning-report-requirements", "sso-security-conflict", "communicating-change"],
    "8": ["mentoring-web-dev", "team-member-failed", "delivering-harsh-truth", "greatest-weakness", "unclear-responsibility", "apologizing-to-someone", "devops-integration", "difficult-client", "prioritizing-customers", "questioning-report-requirements", "unresponsive-api-team", "communicating-change", "dashboard-ui-enhancement"]
};

// Story titles
const storyTitles = {
    "transcoding-system": "Transcoding System - Built scalable system using Celery & Docker",
    "mpi-debugging": "MPI Debugging - Fixed non-deterministic bug in parallel computing",
    "incomplete-data-debugging": "Incomplete Data Debugging - Fixed report generation bug with minimal information",
    "report-generation-fix": "Report Generation Fix - Quick-fixed compliance report bug under pressure",
    "logging-fix-at-hsbc": "Logging Fix at HSBC - Reduced log size from 100GB to 1GB with simple solution",
    "simple-log-solution": "Simple Log Solution - Solved storage issue with rotation instead of complexity",
    "mentoring-web-dev": "Mentoring Junior Engineers - Mentored junior engineers on web development with structured approach",
    "team-member-failed": "Team Member Failed - Helped junior engineer solve UI responsiveness issue",
    "delivering-harsh-truth": "Delivering Harsh Truth - Addressed junior engineer's incomplete work with direct feedback",
    "greatest-weakness": "Greatest Weakness - Took on too much work without proper delegation",
    "unclear-responsibility": "Unclear Responsibility - Took initiative in project with ambiguous role assignments",
    "critical-feedback": "Critical Feedback - Learned to take ownership beyond direct tasks",
    "apologizing-to-someone": "Apologizing to Someone - Recognized mistake in excluding DevOps engineer from Agile process",
    "devops-integration": "DevOps Integration - Fixed Agile scoring to include infrastructure work",
    "calculated-risk": "Calculated Risk - Renewed Agile workflow tool without approval to prevent disruption",
    "difficult-client": "Difficult Client - Resolved performance complaints by understanding actual needs",
    "prioritizing-customers": "Prioritizing Customers - Created framework to balance customer needs by impact and urgency",
    "questioning-report-requirements": "ALDR Requirements - Redirected inefficient project through strategic questions",
    "sso-security-conflict": "SSO Security Conflict - Stopped insecure SSO implementation via respectful push",
    "unresponsive-api-team": "Unresponsive API Team - Got API docs through persistence and networking",
    "communicating-change": "Communicating Change - Convinced team to change backend approach for maintainability",
    "linkedin-job-turbo": "LinkedIn Job Turbo - Built AI-powered job matching system from scratch",
    "dashboard-ui-enhancement": "Dashboard UI - Leveraged external trends to improve UI design",
    "career-switch": "Career Switch - Transitioned from Financial Mathematics to Computer Science"
};

// Principle titles
const principleTitles = {
    "1": "Deliver Results",
    "2": "Invent and Simplify",
    "3": "Customer Obsession",
    "4": "Ownership",
    "5": "Dive Deep",
    "6": "Learn and Be Curious",
    "7": "Have Backbone",
    "8": "Earn Trust"
};

// Initialize variables
let currentPrinciple = null;
let currentQuestion = null;
let enabledPrinciples = ["1", "2", "3", "4", "5", "6", "7", "8"];

// DOM elements
const questionText = document.getElementById('question-text');
const currentPrincipleEl = document.getElementById('current-principle');
const nextButton = document.getElementById('next-btn');
const showStoriesButton = document.getElementById('show-stories-btn');
const storiesContainer = document.getElementById('stories-container');
const storySuggestions = document.getElementById('story-suggestions');
const filterCheckbox = document.getElementById('filter-principle');
const principlesFilter = document.getElementById('principles-filter');

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Pick a random question
function getRandomQuestion() {
    // Get a random principle from enabled ones
    const randomPrincipleIndex = Math.floor(Math.random() * enabledPrinciples.length);
    currentPrinciple = enabledPrinciples[randomPrincipleIndex];
    
    // Get a random question from the principle
    const principleQuestions = questions[currentPrinciple];
    const randomQuestionIndex = Math.floor(Math.random() * principleQuestions.length);
    currentQuestion = principleQuestions[randomQuestionIndex];
    
    // Update UI
    questionText.textContent = currentQuestion;
    currentPrincipleEl.textContent = principleTitles[currentPrinciple];
    currentPrincipleEl.className = 'principle-badge principle-' + currentPrinciple;
    
    // Hide stories when showing a new question
    storiesContainer.style.display = 'none';
}

// Show relevant stories
function showRelevantStories() {
    // Clear previous suggestions
    storySuggestions.innerHTML = '';
    
    // Get stories for the current principle
    const relevantStoryKeys = storyMapping[currentPrinciple];
    
    if (relevantStoryKeys && relevantStoryKeys.length > 0) {
        // Create links for each story
        relevantStoryKeys.forEach(storyKey => {
            const storyTitle = storyTitles[storyKey];
            if (storyTitle) {
                const storyLink = document.createElement('a');
                storyLink.href = `index.html#${storyKey}`;
                storyLink.className = 'story-link';
                storyLink.textContent = storyTitle;
                storyLink.target = '_blank'; // Open in new tab
                storySuggestions.appendChild(storyLink);
            }
        });
    } else {
        storySuggestions.innerHTML = '<p>No specific stories mapped to this principle.</p>';
    }
    
    // Show the stories container
    storiesContainer.style.display = 'block';
}

// Initialize with first question
window.addEventListener('DOMContentLoaded', () => {
    getRandomQuestion();
    
    // Set up event listeners
    nextButton.addEventListener('click', getRandomQuestion);
    showStoriesButton.addEventListener('click', showRelevantStories);
    
    // Principle filter toggle
    filterCheckbox.addEventListener('change', function() {
        principlesFilter.style.display = this.checked ? 'block' : 'none';
    });
    
    // Principle selection
    const principleCheckboxes = document.querySelectorAll('#principles-filter input[type="checkbox"]');
    principleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Update enabled principles based on selections
            enabledPrinciples = Array.from(principleCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
                
            // Make sure at least one principle is selected
            if (enabledPrinciples.length === 0) {
                this.checked = true;
                enabledPrinciples = [this.value];
                alert('At least one principle must be selected.');
            }
        });
    });
}); 