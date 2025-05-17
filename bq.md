# Amazon SDE II Behavioral Interview Stories

## Quick Story Lookup Table

| # | Story Title | 1-Line Summary | Notes/Tags | Conflict | Failure | [1. Deliver Results](#1-deliver-results) | [2. Invent and Simplify](#2-invent-and-simplify) | [3. Customer Obsession](#3-customer-obsession) | [4. Ownership](#4-ownership) | [5. Dive Deep](#5-dive-deep) | [6. Learn and Be Curious](#6-learn-and-be-curious) | [7. Have Backbone](#7-have-backbone-disagree-and-commit) | [8. Earn Trust](#8-earn-trust) | [9. Are Right, A Lot](#9-are-right-a-lot) | [10. Hire and Develop](#10-hire-and-develop-the-best) | [11. Highest Standards](#11-insist-on-the-highest-standards) | [12. Think Big](#12-think-big) | [13. Bias for Action](#13-bias-for-action) | [14. Frugality](#14-frugality) | [15. Best Employer](#15-strive-to-be-earths-best-employer) | [16. Success and Scale](#16-success-and-scale-bring-broad-responsibility) |
|---|-------------|----------------|-----------|----------|---------|----------------|---------------------|-------------------|-----------|-----------|----------------------|---------------|------------|------------------|---------------------------|--------------------------------|-----------|----------------|-----------|----------------------------------|----------------------------------------------|
| 1 | [Apologizing to Someone](#apologizing-to-someone) | Recognized mistake in excluding senior DevOps engineer from Agile process | Process improvement, ownership | ✅ | ✅ | | | | ✅ | | | | ✅ | | | | | | | ✅ | |
| 2 | [Transcoding System](#transcoding-system) | Built scalable system using Celery & Docker | Deep tech, initiative | | | ✅ | ✅ | | ✅ | ✅ | | | | | | | | ✅ | | | |
| 3 | [Logging Fix at HSBC](#logging-fix-at-hsbc) | Reduced log size from 100GB to 1GB with simple solution | Simplicity, frugality | | | ✅ | ✅ | | | | | | | | | | | | ✅ | | ✅ |
| 4 | [MPI Debugging](#mpi-debugging) | Fixed non-deterministic bug in parallel computing | Technical challenge, persistence | | | ✅ | | | | ✅ | | | | ✅ | | | | | | | |
| 5 | [Report Generation Fix](#report-generation-fix) | Quick-fixed compliance report bug under pressure | Emergency response, debugging | | | ✅ | | ✅ | | | | | | | | | | ✅ | | | |
| 6 | [LinkedIn Job Turbo](#linkedin-job-turbo) | Built AI-powered job matching system from scratch | ML/AI, architecture | | | | ✅ | | | | ✅ | | | | | | ✅ | | | | |
| 7 | [Dashboard UI](#dashboard-ui-enhancement) | Leveraged external trends to improve UI design | UX design, research | | | | ✅ | ✅ | | | ✅ | | | | | ✅ | | | | | |
| 8 | [DevOps Integration](#devops-integration) | Fixed Agile scoring to include infrastructure work | Team dynamics, process fix | ✅ | | | | | | | | ✅ | ✅ | | | | | | | ✅ | |
| 9 | [Career Switch](#career-switch) | Transitioned from Finance to SDE through self-learning | Growth, initiative | | | ✅ | | | | | ✅ | | | | | | | | | | |
| 10 | [Unresponsive API Team](#unresponsive-api-team) | Got API docs through persistence and networking | Communication, problem solving | ✅ | | | | | | | | | ✅ | | | | | ✅ | | | |
| 11 | [Critical Feedback](#critical-feedback) | Learned to take ownership beyond direct tasks | Growth, leadership | | ✅ | | | | ✅ | | ✅ | | | | | | | | | ✅ | |
| 12 | [Simple Log Solution](#simple-log-solution) | Solved storage issue with rotation instead of complexity | Innovation, efficiency | | | | ✅ | | | | | | | | | | | | ✅ | | ✅ |
| 13 | [Mentoring Web Dev](#mentoring-web-dev) | Mentored junior engineers on web development | Mentorship, leadership | | | ✅ | | | ✅ | | | | ✅ | | ✅ | | | | | ✅ | |
| 14 | [SSO Security Conflict](#sso-security-conflict) | Stopped insecure SSO implementation via respectful push | Security, conflict | ✅ | | | | ✅ | ✅ | | | ✅ | | ✅ | | ✅ | | | | | ✅ |
| 15 | [Questioning Report Requirements](#questioning-report-requirements) | Redirected inefficient project through strategic questions | Client relationship, conflict resolution | ✅ | | | ✅ | ✅ | | | | ✅ | ✅ | ✅ | | | | ✅ | ✅ | | |
| 16 | [Greatest Weakness](#greatest-weakness) | Took on too much work without proper delegation | Time management, workload | | ✅ | ✅ | | | ✅ | | ✅ | | ✅ | | ✅ | | | | | | |
| 17 | [Difficult Client](#difficult-client) | Resolved performance complaints by understanding actual needs | Communication, client management | ✅ | | ✅ | | ✅ | | ✅ | ✅ | | ✅ | ✅ | | | | ✅ | | | |
| 18 | [Prioritizing Customers](#prioritizing-customers) | Created framework to balance customer needs by impact and urgency | Decision making, customer service | | | ✅ | | ✅ | ✅ | | | | ✅ | ✅ | | ✅ | | ✅ | | | |
| 19 | [Unclear Responsibility](#unclear-responsibility) | Took initiative in project with ambiguous role assignments | Cross-functional leadership, coordination | | | ✅ | | ✅ | ✅ | | ✅ | ✅ | ✅ | | | | | ✅ | | | |
| 20 | [Incomplete Data Debugging](#incomplete-data-debugging) | Fixed report generation bug with minimal information | Problem solving, debugging | | | ✅ | ✅ | | | ✅ | | | | ✅ | | ✅ | | ✅ | | | |
| 21 | [Team Member Failed](#team-member-failed) | Helped junior engineer solve UI responsiveness issue | Mentorship, performance improvement | ✅ | ✅ | ✅ | | | | | ✅ | | ✅ | | ✅ | ✅ | | | | ✅ | |
| 22 | [Calculated Risk](#calculated-risk) | Renewed Agile workflow tool without approval to prevent disruption | Decision making, risk assessment | | | ✅ | | | ✅ | | | | | ✅ | | | | ✅ | ✅ | | |
| 23 | [Communicating Change](#communicating-change) | Convinced team to change backend approach for maintainability | Technical leadership, strategic planning | ✅ | | ✅ | ✅ | | ✅ | ✅ | | ✅ | ✅ | ✅ | | ✅ | ✅ | | | | |
| 24 | [Delivering Harsh Truth](#delivering-harsh-truth) | Addressed junior engineer's incomplete work with direct feedback | Performance management, leadership | ✅ | | ✅ | | | ✅ | | | ✅ | ✅ | | ✅ | ✅ | | | | ✅ | |




## Stories by Leadership Principle

<a id="1-deliver-results"></a>
### 1. Deliver Results
1. [Transcoding System](#transcoding-system)
2. [Logging Fix at HSBC](#logging-fix-at-hsbc)
3. [MPI Debugging](#mpi-debugging)
4. [Report Generation Fix](#report-generation-fix)
5. [Career Switch: From Financial Mathematics to Computer Science](#career-switch)
6. [Mentoring Web Dev](#mentoring-web-dev)
7. [Greatest Weakness](#greatest-weakness)
8. [Difficult Client](#difficult-client)
9. [Prioritizing Customers](#prioritizing-customers)
10. [Unclear Responsibility](#unclear-responsibility)
11. [Incomplete Data Debugging](#incomplete-data-debugging)
12. [Team Member Failed](#team-member-failed)
13. [Calculated Risk](#calculated-risk)
14. [Communicating Change](#communicating-change)
15. [Delivering Harsh Truth](#delivering-harsh-truth)

<a id="2-invent-and-simplify"></a>
### 2. Invent and Simplify
1. [Transcoding System](#transcoding-system)
2. [Logging Fix at HSBC](#logging-fix-at-hsbc)
3. [LinkedIn Job Turbo](#linkedin-job-turbo)
4. [Dashboard UI](#dashboard-ui-enhancement)
5. [Simple Log Solution](#simple-log-solution)
6. [Questioning Report Requirements](#questioning-report-requirements)
7. [Unclear Responsibility](#unclear-responsibility)
8. [Incomplete Data Debugging](#incomplete-data-debugging)

<a id="3-customer-obsession"></a>
### 3. Customer Obsession
1. [Report Generation Fix](#report-generation-fix)
2. [Dashboard UI](#dashboard-ui-enhancement)
3. [SSO Security Conflict](#sso-security-conflict)
4. [Questioning Report Requirements](#questioning-report-requirements)
5. [Difficult Client](#difficult-client)
6. [Prioritizing Customers](#prioritizing-customers)
7. [Unclear Responsibility](#unclear-responsibility)

<a id="4-ownership"></a>
### 4. Ownership
1. [Apologizing to Someone](#apologizing-to-someone)
2. [Transcoding System](#transcoding-system)
3. [Critical Feedback](#critical-feedback)
4. [Mentoring Web Dev](#mentoring-web-dev)
5. [SSO Security Conflict](#sso-security-conflict)
6. [Greatest Weakness](#greatest-weakness)
7. [Prioritizing Customers](#prioritizing-customers)
8. [Unclear Responsibility](#unclear-responsibility)
9. [Calculated Risk](#calculated-risk)
10. [Communicating Change](#communicating-change)
11. [Delivering Harsh Truth](#delivering-harsh-truth)

<a id="5-dive-deep"></a>
### 5. Dive Deep
1. [Transcoding System](#transcoding-system)
2. [MPI Debugging](#mpi-debugging)
3. [Difficult Client](#difficult-client)
4. [Incomplete Data Debugging](#incomplete-data-debugging)

<a id="6-learn-and-be-curious"></a>
### 6. Learn and Be Curious
1. [LinkedIn Job Turbo](#linkedin-job-turbo)
2. [Career Switch](#career-switch)
3. [Critical Feedback](#critical-feedback)
4. [Greatest Weakness](#greatest-weakness)
5. [Difficult Client](#difficult-client)
6. [Unclear Responsibility](#unclear-responsibility)
7. [Incomplete Data Debugging](#incomplete-data-debugging)
8. [Team Member Failed](#team-member-failed)

<a id="7-have-backbone-disagree-and-commit"></a>
### 7. Have Backbone; Disagree and Commit
1. [Apologizing to Someone](#apologizing-to-someone)
2. [DevOps Integration](#devops-integration)
3. [SSO Security Conflict](#sso-security-conflict)
4. [Questioning Report Requirements](#questioning-report-requirements)
5. [Unclear Responsibility](#unclear-responsibility)
6. [Communicating Change](#communicating-change)
7. [Delivering Harsh Truth](#delivering-harsh-truth)

<a id="8-earn-trust"></a>
### 8. Earn Trust
1. [Apologizing to Someone](#apologizing-to-someone)
2. [DevOps Integration](#devops-integration)
3. [Unresponsive API Team](#unresponsive-api-team)
4. [Mentoring Web Dev](#mentoring-web-dev)
5. [Questioning Report Requirements](#questioning-report-requirements)
6. [Greatest Weakness](#greatest-weakness)
7. [Difficult Client](#difficult-client)
8. [Prioritizing Customers](#prioritizing-customers)
9. [Unclear Responsibility](#unclear-responsibility)
10. [Team Member Failed](#team-member-failed)
11. [Communicating Change](#communicating-change)
12. [Delivering Harsh Truth](#delivering-harsh-truth)

<a id="9-are-right-a-lot"></a>
### 9. Are Right, A Lot
1. [MPI Debugging](#mpi-debugging)
2. [SSO Security Conflict](#sso-security-conflict)
3. [Questioning Report Requirements](#questioning-report-requirements)
4. [Difficult Client](#difficult-client)
5. [Prioritizing Customers](#prioritizing-customers)
6. [Incomplete Data Debugging](#incomplete-data-debugging)
7. [Calculated Risk](#calculated-risk)

<a id="10-hire-and-develop-the-best"></a>
### 10. Hire and Develop the Best
1. [Mentoring Web Dev](#mentoring-web-dev)
2. [Greatest Weakness](#greatest-weakness)
3. [Team Member Failed](#team-member-failed)
4. [Delivering Harsh Truth](#delivering-harsh-truth)

<a id="11-insist-on-the-highest-standards"></a>
### 11. Insist on the Highest Standards
1. [Dashboard UI](#dashboard-ui-enhancement)
2. [SSO Security Conflict](#sso-security-conflict)
3. [Prioritizing Customers](#prioritizing-customers)
4. [Incomplete Data Debugging](#incomplete-data-debugging)
5. [Team Member Failed](#team-member-failed)
6. [Communicating Change](#communicating-change)
7. [Delivering Harsh Truth](#delivering-harsh-truth)

<a id="12-think-big"></a>
### 12. Think Big
1. [LinkedIn Job Turbo](#linkedin-job-turbo)

<a id="13-bias-for-action"></a>
### 13. Bias for Action
1. [Transcoding System](#transcoding-system)
2. [Report Generation Fix](#report-generation-fix)
3. [Unresponsive API Team](#unresponsive-api-team)
4. [Questioning Report Requirements](#questioning-report-requirements)
5. [Difficult Client](#difficult-client)
6. [Prioritizing Customers](#prioritizing-customers)
7. [Unclear Responsibility](#unclear-responsibility)
8. [Incomplete Data Debugging](#incomplete-data-debugging)
9. [Calculated Risk](#calculated-risk)

<a id="14-frugality"></a>
### 14. Frugality
1. [Logging Fix at HSBC](#logging-fix-at-hsbc)
2. [Simple Log Solution](#simple-log-solution)
3. [Questioning Report Requirements](#questioning-report-requirements)
4. [Calculated Risk](#calculated-risk)

<a id="15-strive-to-be-earths-best-employer"></a>
### 15. Strive to be Earth's Best Employer
1. [Apologizing to Someone](#apologizing-to-someone)
2. [DevOps Integration](#devops-integration)
3. [Critical Feedback](#critical-feedback)
4. [Mentoring Web Dev](#mentoring-web-dev)
5. [Team Member Failed](#team-member-failed)
6. [Delivering Harsh Truth](#delivering-harsh-truth)

<a id="16-success-and-scale-bring-broad-responsibility"></a>
### 16. Success and Scale Bring Broad Responsibility
1. [Logging Fix at HSBC](#logging-fix-at-hsbc)
2. [Simple Log Solution](#simple-log-solution)
3. [SSO Security Conflict](#sso-security-conflict)

## Detailed Stories

<a id="apologizing-to-someone"></a>
### Apologizing for Overlooking a Senior Engineer's Role in the Agile Workflow
**Situation**: At TVCBOOK, I was responsible for building and implementing an Agile development workflow to improve project tracking and efficiency. As part of this process, I onboarded engineers and introduced sprint tracking to measure individual contributions. However, I overlooked involving one of the senior DevOps engineers in the discussion, and as a result, the workflow did not fully reflect his contributions, making him feel undervalued in the new system.  
**Task**: I needed to acknowledge my mistake, apologize for the oversight, and adjust the workflow to fairly represent all team members' contributions, including DevOps work that might not directly tie to sprint stories but was critical to the project's success.  
**Action**:  
- Scheduled a one-on-one conversation with the DevOps engineer
- Apologized directly for not properly considering his role
- Asked for his feedback on better representing his work in the Agile process
- Adjusted the workflow to incorporate DevOps tasks explicitly
- Shared the updated workflow with the team to reinforce all roles' importance
- Highlighted infrastructure improvements and automation as sprint items

**Result**:  
- DevOps engineer appreciated the apology and effort to fix the oversight
- Updated workflow properly acknowledged his contributions
- Strengthened collaboration between DevOps and development teams
- Improved team morale as everyone's work was fairly represented
- Ensured Agile tracking reflected all contributions

**Key Learning**: Inclusion in decision-making is just as important as the workflow itself; engage all relevant team members upfront when introducing new processes.

<a id="transcoding-system"></a>
### Transcoding System
**Situation**: At TVCBOOK, video processing system was slow and inefficient.  
**Task**: Optimize video processing to reduce delays and improve scalability.  
**Action**:  
- Redesigned as distributed system using Celery, RabbitMQ
- Implemented load balancing
- Optimized FFMPEG parameters
- Containerized with Docker
- Added automated monitoring and failure recovery

**Result**:  
- 60% reduction in processing time
- Improved system scalability
- Enhanced reliability with automated recovery
- Videos available within 30 seconds

**Key Learning**: Going beyond immediate requirements can create significant long-term value.

<a id="logging-fix-at-hsbc"></a>
### Logging Fix at HSBC
**Situation**: Logging system consuming 100GB+ storage, causing performance issues.  
**Task**: Reduce storage usage while maintaining essential logs.  
**Action**:  
- Analyzed log patterns and retention needs
- Implemented rotating log archive handler
- Added log level filtering
- Used built-in Python logging handler

**Result**:  
- Reduced storage from 100GB to 1GB
- Improved system performance
- Maintained all essential logs
- Implemented in days vs weeks

**Key Learning**: Simple solutions often outperform complex ones.

<a id="mpi-debugging"></a>
### MPI Debugging
**Situation**: In Parallel Algorithms class, implementing MPI pipeline for Traveling Salesman Problem.  
**Task**: Debug non-deterministic issue causing incorrect results in large test cases.  
**Action**:  
- Systematically debugged using print statements and logging
- Explored multiple approaches including LLMs and professor consultation
- Rewritten algorithm in C++ to test if Python's GIL was the cause
- Analyzed logs for large test cases
- Identified asynchronous API call issue causing cascading errors

**Result**:  
- Fixed critical bug affecting large computations
- Ensured consistent correct results
- Improved understanding of distributed systems debugging
- Successfully completed the project

**Key Learning**: Systematic debugging approach is crucial for complex distributed systems.

<a id="report-generation-fix"></a>
### Report Generation Fix
**Situation**: Critical bug in compliance report generation program blocking team's testing.  
**Task**: Identify and fix the issue quickly to unblock team with three-week deadline.  
**Action**:  
- Set up quick Zoom meeting to understand issue firsthand
- Collected logs and sample input files
- Replicated problem locally
- Discovered input format change causing failure
- Built and deployed quick fix
- Added input validation

**Result**:  
- Fixed issue within one day
- Unblocked team's testing process
- Improved system reliability with validation
- Maintained project timeline

**Key Learning**: Quick response with proper validation prevents future issues.

<a id="linkedin-job-turbo"></a>
### LinkedIn Job Turbo
**Situation**: Needed efficient job search/apply system with AI capabilities.  
**Task**: Build comprehensive job matching system with AI and cloud deployment.  
**Action**:  
- Used ChatGPT to design complete system architecture
- Implemented frontend, backend, database components
- Integrated AI model for job matching
- Deployed using Kubernetes on AWS
- Learned ML model training and Kubernetes configuration

**Result**:  
- Built full-stack AI-powered system
- Gained practical experience in ML and cloud
- Successfully deployed production-ready application
- Created customizable solution for job search

**Key Learning**: Complex systems can be tackled by breaking down into learnable components.

<a id="dashboard-ui-enhancement"></a>
### Leveraging External Trends to Improve UI Design for a Dashboard Webpage
**Situation**: While working in my professor's lab, I collaborated with a company to build a dashboard web application that would replace their Excel-based workflow, enabling better collaboration and usability. As part of the development process, I needed to assess and evaluate the system's design, particularly ensuring that the UI was intuitive, modern, and aligned with the company's needs.  
**Task**: My goal was to identify the best UI component library that would efficiently incorporate the company's requirements, provide a great user experience, and allow for easy customization.  
**Action**:  
- Researched and compared trending UI component libraries such as Material UI, Ant Design, and PrimeNG
- Evaluated their suitability based on component availability, ease of customization, and performance
- Analyzed the company's specific needs for data visualization, form handling, and interactive elements
- Selected PrimeNG because it had all the necessary components, was highly customizable, and integrated well with our technology stack
- Implemented the UI with a focus on intuitive navigation and workflow optimization

**Result**:  
- The dashboard was well-received by the company, particularly for its intuitive UI and seamless user experience
- The manager was very satisfied, as the UI greatly improved workflow efficiency
- Employees transitioned easily from Excel to the new system with minimal training
- Customization was straightforward, allowing quick adaptation to additional feature requests without significant rework

**Key Learning**: Staying updated with industry trends and selecting tools based on both technical and business requirements leads to better user adoption and satisfaction. Proper tool selection significantly impacts project success.

<a id="devops-integration"></a>
### DevOps Integration
**Situation**: Senior DevOps engineer scoring low in Agile sprints despite high impact.  
**Task**: Adjust Agile workflow to fairly represent infrastructure work.  
**Action**:  
- Analyzed sprint scoring system
- Identified gap in infrastructure task representation
- Met with DevOps engineer to understand work
- Updated workflow to include DevOps tasks
- Adjusted sprint metrics for infrastructure work

**Result**:  
- Improved team morale
- Better recognition of infrastructure work
- Enhanced collaboration between Dev and Ops
- More accurate sprint tracking

**Key Learning**: Process improvements must consider all types of contributions.

<a id="career-switch"></a>
### Career Switch: From Financial Mathematics to Computer Science
**Situation**: One of the most difficult situations I faced was changing my career path from Financial Mathematics to Computer Science. During my third year of undergraduate studies, I took a "Python for Finance" course, which introduced me to programming. I was fascinated by how automation could reduce repetitive manual tasks and create efficient solutions. That experience made me realize that I wanted to pursue a career in software development. However, making this shift was extremely challenging because I had no formal computer science background and had to compete with students who had years of programming experience.  
**Task**: My goal was to develop strong technical skills and gain practical experience to make myself competitive in the job market, despite starting from scratch.  
**Action**:  
- Joined a coding bootcamp to learn full-stack development, including backend, frontend, and databases
- Built small projects to apply my knowledge, such as a web application for financial calculations
- Connected with experienced developers and senior CS students for guidance
- Sought mentorship and learned from others' career transitions
- Continuously practiced and built my portfolio of projects

**Result**:  
- Successfully transitioned from Financial Mathematics to Computer Science
- Gained hands-on experience in full-stack development
- Developed a strong problem-solving mindset for adapting to new challenges
- Secured a software engineer position at a startup despite my non-CS background
- Applied my skills to real-world projects, continuing to improve my abilities

**Key Learning**: Career transitions are possible with the right mindset, effort, and persistence. Breaking down complex goals into achievable steps and embracing challenges enables continuous improvement, a mindset that helps when facing new technical or professional obstacles.

<a id="unresponsive-api-team"></a>
### Unresponsive API Team
**Situation**: At HSBC, needed SSO API documentation but responsible engineer unresponsive.  
**Task**: Obtain necessary API details without causing project delays.  
**Action**:  
- Tried multiple communication channels
- Searched existing documentation
- Connected with other team members
- Scheduled focused 10-minute meeting
- Prepared specific questions beforehand

**Result**:  
- Got required API details within a week
- Unblocked development progress
- Created documentation for future reference
- Improved cross-team collaboration

**Key Learning**: Persistence and structured communication overcome collaboration barriers.

<a id="critical-feedback"></a>
### Critical Feedback
**Situation**: At startup, received feedback about focusing only on junior engineers.  
**Task**: Address feedback and improve leadership approach.  
**Action**:  
- Acknowledged the feedback
- Started regular 1:1s with senior engineers
- Adjusted communication style
- Made process changes based on input
- Created more inclusive environment

**Result**:  
- Better team alignment
- Improved senior engineer engagement
- More effective Agile process
- Stronger leadership skills

**Key Learning**: Effective leadership requires engaging all experience levels.

<a id="simple-log-solution"></a>
### Simple Log Solution
**Situation**: At HSBC, our logging system was consuming a substantial amount of storage—over 100GB of log files. This was causing performance issues and making it difficult to retrieve relevant logs when debugging. Some team members suggested complex solutions, like implementing a distributed logging system or offloading logs to external storage, but these approaches required significant infrastructure changes and development effort.  
**Task**: My goal was to reduce log storage usage while ensuring that essential logs remained accessible, without overcomplicating the system.  
**Action**:  
- After observation, found that most logs were unnecessary old records
- Developed a custom rotating log archive handler for automatic compression and deletion
- Introduced log level filtering to prioritize error and warning logs
- Used built-in Python logging handler instead of new dependencies
- Avoided complex external solutions that would disrupt workflows

**Result**:  
- Reduced log storage from ~100GB to just ~1GB
- Significantly improved system performance
- Made debugging faster and more efficient
- Implemented solution in days instead of weeks

**Key Learning**: Complex problems don't always require complex solutions. By understanding the root cause and leveraging existing tools, I created a simple, effective, and maintainable solution. I now prioritize efficiency and scalability before considering more complex alternatives.

<a id="mentoring-web-dev"></a>
### Mentoring Junior Engineers on Web Development
**Situation**: While leading a team of five in my professor's lab to develop a dashboard web application, two of the engineers had zero prior experience in web development. Since the project required full-stack development, they needed to quickly learn the database, backend, and frontend technologies to contribute effectively.  
**Task**: My goal was to mentor them step by step, ensuring they gained the necessary technical skills while actively contributing to the project.  
**Action**:  
- Provided a project overview, explaining how the database, backend, and frontend interact to give them a big-picture understanding
- Designed a structured learning path with progressive tasks—starting with database queries, then backend API development, and finally frontend components
- Held weekly check-in meetings to review progress, discuss challenges, and provide guidance
- Encouraged independent problem-solving while being available for questions

**Result**:  
- After completing the full cycle, both engineers were able to develop web applications from scratch independently
- They actively contributed to new features without needing constant supervision
- The manager and professor were happy with their progress and the team's efficiency
- Project completed on schedule with high-quality contributions from all team members

**Key Learning**: By structuring the learning process, providing hands-on practice, and maintaining regular check-ins, mentoring can be both effective and rewarding, helping junior engineers ramp up quickly and contribute meaningfully.

<a id="sso-security-conflict"></a>
### SSO Security Conflict
**Situation**: At HSBC, working on a client web application that required Single Sign-On (SSO) integration. A senior engineer proposed implementing SSO using an approach that had potential security vulnerabilities.  
**Task**: Address the security concerns while maintaining good working relationships and ensuring a secure implementation.  
**Action**:  
- Researched industry best practices for secure SSO implementation
- Identified specific vulnerabilities in the proposed approach
- Prepared data demonstrating potential security risks
- Approached the senior engineer privately with my concerns
- Presented alternative implementation options with security benefits
- Used respectful, fact-based language focused on project outcomes
- Collaborated on developing a more secure approach

**Result**:  
- Prevented a potentially serious security vulnerability
- The team adopted a more secure SSO implementation
- Maintained positive working relationship with the senior engineer
- Established myself as someone who prioritizes security
- Project succeeded with robust authentication

**Key Learning**: Technical disagreements can be navigated successfully by focusing on facts, showing respect, and maintaining focus on shared goals like security.

<a id="questioning-report-requirements"></a>
### Questioning Report Requirements
**Situation**: As a Research Assistant leading a team of 5 in my professor's lab, we collaborated with a Texas-based power station company to automate their workflow, including a project management dashboard and reports generation. During a meeting, the company's manager proposed developing a comprehensive report generation program.  
**Task**: Evaluate the proposal's feasibility and impact to ensure we prioritized high-value solutions. I discovered the proposed program would require 4 people working for months but would only save one person about a week of manual work per year.  
**Action**:  
- Initially presented a direct cost-benefit analysis showing resource mismatch
- When met with resistance, shifted to asking open-ended questions
- Uncovered that the primary concern was regulatory compliance, not time savings
- Discovered that human error in reports could lead to regulatory violations
- Proposed a lighter solution that met compliance needs without extensive development

**Result**:  
- Manager accepted the new streamlined plan
- Reduced development time from months to 4 weeks
- Successfully met regulatory compliance requirements
- Redirected team efforts to other high-impact projects
- Strengthened client relationship through collaborative problem-solving

**Key Learning**: When facing resistance, understanding the "why" behind a decision is just as important as the "what." Strategic questioning can reveal unstated requirements and lead to better solutions.

<a id="greatest-weakness"></a>
### Greatest Weakness: Taking on Too Much Without Delegating
**Situation**: At HSBC, our team was working on two projects at the same time. One was a critical client-facing feature with a strict deadline, and the other was an internal optimization project that was less urgent but still important. While I had teammates working on the client feature, I was the only engineer responsible for the optimization task, as it required deep technical knowledge and understanding of the project.  
**Task**: My goal was to ensure that both projects were completed on time without compromising quality. I needed to balance my workload effectively and make sure that everything was delivered without delays.  
**Action**:  
- Prioritized the client-facing feature first
- Built the initial structure and collaborated with teammates
- Worked on the optimization task entirely on my own
- Avoided delegating due to specialized technical knowledge
- Worked extra hours to keep both projects on track

**Result**:  
- Both projects successfully delivered on time
- Optimization significantly improved system performance
- Process was stressful and inefficient
- Realized taking everything on myself wasn't effective

**Key Learning**: Delegation is crucial even for specialized tasks; knowledge sharing and collaboration improve efficiency and reduce stress.

<a id="difficult-client"></a>
### Difficult Client: Handling Unclear Expectations
**Situation**: While working at HSBC, I developed a web application that allowed clients to query bank transactions. Over time, as the database grew larger, some queries—especially those on non-indexed columns—became slower. One of our clients started repeatedly complaining about latency issues, demanding an immediate fix.  
**Task**: My responsibility was to address the client's concerns while ensuring system efficiency. I had previously sent them instructions on optimizing their queries, but they kept following up, insisting on a different solution without providing clear details on their challenges.  
**Action**:  
- Scheduled a one-on-one call instead of continuing email exchanges
- Explained database indexing concepts in simple, non-technical terms
- Asked clarifying questions to understand their actual needs
- Discovered they were unaware of alternative query strategies
- Provided guidance on better filtering methods
- Optimized backend queries to improve response times

**Result**:  
- Client stopped experiencing major delays
- Expressed satisfaction with the solution
- Realized the issue was more about communication than technical problems
- Improved relationship with the client

**Key Learning**: Technical problems often stem from communication gaps; proactively aligning with clients and asking the right questions prevents misunderstandings before they escalate.

<a id="prioritizing-customers"></a>
### Prioritizing Customers: Balancing Impact and Urgency
**Situation**: At HSBC, I worked on a bank transaction query system where multiple clients relied on our service daily. Over time, as the number of users grew, we started receiving several customer requests simultaneously, including feature enhancements, bug reports, and performance issues. Given the limited resources, we couldn't address everything at once, so I had to determine how to prioritize competing requests effectively.  
**Task**: My goal was to ensure that high-impact and time-sensitive customer issues were addressed first while balancing long-term improvements. I needed a clear framework to prioritize efficiently without overlooking any requests.  
**Action**:  
- Developed a two-factor prioritization framework based on impact and urgency
- Categorized issues into three levels:
  - Critical Issues (Immediate Fixes) for core functionality problems
  - High-Impact Requests (Planned Fixes) for issues with workarounds
  - Nice-to-Have Enhancements (Backlog Prioritization) for experience improvements
- Communicated clear timelines with customers for transparency
- Used impact metrics (affected users, business functions) to make decisions

**Result**:  
- Resolved critical issues quickly without missing important work
- Customers stayed informed about issue status
- Reduced repeated complaints through transparent communication
- Efficiently delivered high-value enhancements
- Maintained system stability while implementing improvements

**Key Learning**: Effective prioritization is about strategic decision-making based on impact and urgency, not just responding to the loudest complaints. A structured approach ensures balanced customer service without compromising long-term improvements.

<a id="unclear-responsibility"></a>
### Unclear Responsibility: Working on a Project with Unclear Responsibilities
**Situation**: At HSBC, I was assigned to work on a client contact information dashboard project. While the project had a clear goal, the division of responsibilities between the backend, frontend, and DevOps teams was not well-defined. There was no formal project manager, and tasks were loosely assigned, leading to confusion about who was responsible for what.  
**Task**: My role was to develop the backend services, but because of the ambiguity, I had to ensure that all components—backend, frontend, and deployment—were aligned without stepping on others' work or missing critical tasks.  
**Action**:  
- Took initiative to clarify roles by scheduling a sync meeting with the team
- Drafted a shared task list mapping out backend, frontend, and DevOps tasks
- Set up regular check-ins with frontend engineers for smooth integration
- Stepped in to help containerize the application with Docker
- Coordinated with DevOps engineers to finalize production setup

**Result**:  
- Avoided bottlenecks and miscommunication
- Dashboard was successfully delivered on time
- Team had a clearer workflow for future projects
- Improved cross-functional collaboration

**Key Learning**: In projects with unclear responsibilities, taking initiative to define roles, ensure alignment, and proactively collaborate across teams is crucial for success. Instead of waiting for instructions, approach ambiguous situations by facilitating structure and communication.

<a id="incomplete-data-debugging"></a>
### Working with Incomplete Data to Debug an Automated Report Generation Program
**Situation**: In my lab, I was working on a program to automatically generate Excel reports for compliance. After completing development, we moved to the testing phase, but the team encountered an issue where the program failed to generate the report, and the error was not captured by the logs. Without clear error messages, diagnosing the issue became challenging.  
**Task**: My goal was to identify and fix the issue as quickly as possible, since the report was due in three weeks, and we needed enough time to test and resolve all potential problems before deployment.  
**Action**:  
- Set up a quick meeting with the team to replicate the issue in real time
- Suspected that input file format differed from local test files
- Gathered and analyzed the team's input files
- Discovered unexpected edge cases the program wasn't handling
- Summarized issues in the input files and provided a quick fix
- Added validation checks to detect incorrect inputs early
- Released an updated version with user notifications for incorrect formats

**Result**:  
- Identified and fixed the issue within one day
- Allowed testing to continue without delays
- New validation feature prevented similar failures
- Program was successfully deployed on time
- Ensured compliance reports could be generated as required

**Key Learning**: When dealing with incomplete data, collaborating with the team and investigating real inputs is crucial. Robust validation and proactive error handling are essential for production systems to make debugging smoother.

<a id="team-member-failed"></a>
### Handling a Team Member Who Didn't Meet Expectations on a Frontend Task
**Situation**: While leading a team of five in my professor's lab to develop a full-stack dashboard web application, one of the junior engineers was assigned to develop a frontend feature. However, he was unable to fix a UI issue I had flagged on GitHub, which affected the dialog box's responsiveness on different screen sizes.  
**Task**: My goal was to help the junior engineer understand and resolve the issue, while also ensuring he developed the skills to prevent similar issues in the future.  
**Action**:  
- Scheduled a 1:1 meeting to go over the issue and demonstrate the root cause
- Showed how the CSS style worked fine on large screens but broke on smaller screens
- Provided a quick fix by introducing CSS grid layout and explaining proper styling
- Taught debugging techniques using browser developer tools
- Introduced using LLMs to find solutions for frontend problems efficiently
- Encouraged him to deepen his understanding of HTML, CSS, and JavaScript
- Guided him toward resources for improving frontend development skills

**Result**:  
- Engineer successfully fixed the issue and improved his debugging approach
- He gained more confidence in handling CSS and layout problems independently
- He began using structured debugging techniques for future tasks
- Team efficiency improved with fewer UI issues requiring later correction

**Key Learning**: Mentoring through hands-on guidance is more effective than simply pointing out problems. Teaching team members how to approach problems systematically results in long-term improvements in their skills and the team's overall productivity.

<a id="calculated-risk"></a>
### Taking a Calculated Risk: Renewing an Expiring Agile Workflow Tool Without Approval
**Situation**: At TVCBOOK, I was responsible for managing the Agile workflow using a third-party tool. One day, I received an email notification stating that our subscription would expire the next day, and without renewal, our entire development workflow and project tracking system would be disrupted. However, getting budget approval for renewal would take at least 2–3 days, meaning we would face downtime and productivity loss.  
**Task**: My goal was to keep the Agile workflow running smoothly without causing interruptions, but I had to decide whether to renew the subscription without formal approval or wait for management's approval and risk workflow disruptions.  
**Action**:  
- Assessed the risk, knowing the tool was essential to our workflow
- Confirmed the likelihood of reimbursement by reviewing past approvals
- Took the initiative to renew the subscription using available team resources
- Immediately informed the finance team about the renewal and justified the decision
- Requested reimbursement with a clear explanation of the circumstances

**Result**:  
- The workflow remained operational without any downtime
- Received some pushback from the finance department initially
- Successfully justified the decision and secured reimbursement
- Team appreciated the quick action that prevented delays in sprint planning
- Preserved team productivity during a critical period

**Key Learning**: Calculated risks are sometimes necessary to prevent larger disruptions. By assessing potential consequences, ensuring alignment with company goals, and acting responsibly, I learned to make informed decisions that benefit the team while properly weighing risk versus reward.

<a id="communicating-change"></a>
### Communicating a Change in Direction: Adjusting Backend Architecture for Maintainability
**Situation**: At TVCBOOK, we were developing a new version of our backend architecture to improve maintainability and scalability. The previous architecture was becoming increasingly difficult to maintain and scale as the project grew.  
**Task**: My responsibility was to communicate the change to the team and ensure a smooth transition.  
**Action**:  
- Scheduled a team meeting to explain the reasons for the change
- Provided a detailed overview of the new architecture
- Answered questions and addressed concerns
- Set up a pilot phase to test the new architecture
- Monitored progress and provided feedback

**Result**:  
- Team was informed and prepared for the change
- New architecture was successfully implemented
- Maintainability and scalability improved
- Team morale remained high despite the change

**Key Learning**: Effective communication is crucial for managing change in a team environment. By providing clear information and addressing concerns, I helped the team adapt to new architecture without significant disruption.

<a id="delivering-harsh-truth"></a>
### Delivering a Harsh Truth: Addressing a Junior Engineer's Incomplete Work
**Situation**: While leading a team of five in my professor's lab, we were developing a dashboard web application for a company. One of the junior engineers was struggling with his frontend tasks, repeatedly submitting incomplete and buggy implementations. Despite multiple reviews and feedback, the same issues kept occurring, and it became clear that his lack of understanding was slowing down the entire project.  
**Task**: I needed to have a direct conversation with him to address the issue honestly, ensure that he understood the expectations, and help him improve without demotivating him.  
**Action**:  
- Scheduled a private 1:1 meeting to create a safe space for open discussion
- Provided clear, objective feedback about specific mistakes and their impact on the team
- Acknowledged his efforts but emphasized expectations: "I see that you're trying, but the quality isn't at the level we need"
- Offered guidance through a structured learning approach:
  - Smaller, focused tasks for step-by-step learning
  - Pair programming with a more experienced teammate
  - Recommended frontend learning resources for his weak areas
- Set clear expectations for ownership of learning and testing code before submission

**Result**:  
- He acknowledged the issue and became more receptive to feedback
- Over time, his frontend skills improved with fewer buggy implementations
- The project stayed on track with his more effective contributions
- Team dynamic strengthened through a culture of open but constructive feedback

**Key Learning**: Delivering harsh truths is necessary for growth, but should be done with respect, empathy, and a solution-oriented mindset. Balancing honest feedback with clear support helps struggling teammates improve while keeping projects on schedule.

## Interview Tips
1. Use the Quick Lookup Table to find relevant stories quickly
2. Each story can demonstrate multiple Leadership Principles
3. Focus on quantifiable results and learnings
4. Keep STAR format in mind:
   - Situation: Set the context
   - Task: What was required
   - Action: What you did
   - Result: Impact and metrics

## Common Questions Matrix

| Question Type | Primary Story | Backup Story |
|--------------|---------------|--------------|
| Technical Challenge | [MPI Debugging](#mpi-debugging) | [Transcoding System](#transcoding-system) |
| Leadership | [Apologizing to Someone](#apologizing-to-someone) | [DevOps Integration](#devops-integration) |
| Conflict Resolution | [Report Generation Fix](#report-generation-fix) | [Unresponsive API Team](#unresponsive-api-team) |
| Innovation | [LinkedIn Job Turbo](#linkedin-job-turbo) | [Simple Log Solution](#simple-log-solution) |
| Customer Focus | [Dashboard UI Enhancement](#dashboard-ui-enhancement) | [Report Generation Fix](#report-generation-fix) |

## Story Preparation Checklist
- [ ] Quantifiable results ready
- [ ] Technical details clear
- [ ] Leadership aspects highlighted
- [ ] Learning points identified
- [ ] Multiple examples per principle
- [ ] Practice delivery (2-3 minutes each)

## Leadership Principles Reference

Amazon's 16 Leadership Principles guide their decision-making and approach to business:

1. **Customer Obsession**: Leaders start with the customer and work backwards. They work vigorously to earn and keep customer trust. Although leaders pay attention to competitors, they obsess over customers.

2. **Ownership**: Leaders are owners. They think long term and don't sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team. They never say "that's not my job."

3. **Invent and Simplify**: Leaders expect and require innovation and invention from their teams and always find ways to simplify. They are externally aware, look for new ideas from everywhere, and are not limited by "not invented here."

4. **Are Right, A Lot**: Leaders are right a lot. They have strong judgment and good instincts. They seek diverse perspectives and work to disconfirm their beliefs.

5. **Learn and Be Curious**: Leaders are never done learning and always seek to improve themselves. They are curious about new possibilities and act to explore them.

6. **Hire and Develop the Best**: Leaders raise the performance bar with every hire and promotion. They recognize exceptional talent, and willingly move them throughout the organization. Leaders develop leaders and take seriously their role in coaching others.

7. **Insist on the Highest Standards**: Leaders have relentlessly high standards. Leaders ensure that defects do not get sent down the line and that problems are fixed so they stay fixed.

8. **Think Big**: Thinking small is a self-fulfilling prophecy. Leaders create and communicate a bold direction that inspires results. They think differently and look around corners for ways to serve customers.

9. **Bias for Action**: Speed matters in business. Many decisions and actions are reversible and do not need extensive study. We value calculated risk taking.

10. **Frugality**: Accomplish more with less. Constraints breed resourcefulness, self-sufficiency, and invention. There are no extra points for growing headcount, budget size, or fixed expense.

11. **Earn Trust**: Leaders listen attentively, speak candidly, and treat others respectfully. They are vocally self-critical, even when doing so is awkward or embarrassing.

12. **Dive Deep**: Leaders operate at all levels, stay connected to the details, audit frequently, and are skeptical when metrics and anecdote differ. No task is beneath them.

13. **Have Backbone; Disagree and Commit**: Leaders are obligated to respectfully challenge decisions when they disagree, even when doing so is uncomfortable or exhausting. Once a decision is determined, they commit wholly.

14. **Deliver Results**: Leaders focus on the key inputs for their business and deliver them with the right quality and in a timely fashion. Despite setbacks, they rise to the occasion and never settle.

15. **Strive to be Earth's Best Employer**: Leaders work every day to create a safer, more productive, higher performing, more diverse, and more just work environment. They lead with empathy, have fun at work, and make it easy for others to have fun.

16. **Success and Scale Bring Broad Responsibility**: We started in a garage, but we're not there anymore. We are big, we impact the world, and we are far from perfect. We must be humble and thoughtful about even the secondary effects of our actions.
