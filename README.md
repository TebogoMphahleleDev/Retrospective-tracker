Run the file under this directory

Use the below format:
C:\School\School\INT\Project-lesson-learned-main\Project-lesson-learned-main

make sure to download all the depencies and run using npm start


for authutication services 
>>>>do visit features under auth you should find all the pages that go with the security part , including the login details.
>>>>
>>>>This are our access code for the frontEnd team

tebogo@frontend.com / tebogo123 
anele@frontend.com / anele123
hluli@frontend.com / hluli123

for admin board you wanna view the admin board use this credentials ,i would prefer you use this one for full access
Email: tebogo@test.com
Password: tebogo123



This is a prototype, and the backend team should review the requirements and suggest any improvements or additional functionalities needed. If there are any concerns or suggestions, please contact the frontend team (Tebogo: 0828814756).

Pages & Functionalities
1. Admin Dashboard (AdminPage.tsx)
Purpose: Manage users, roles, and permissions.
Key Features:

View, add, edit, and delete users

Filter users by role, status, or search query

Toggle user active/inactive status

Pagination for large user lists

API Requirements:

Endpoint	Method	Description
/api/users	GET	Fetch all users (with filtering options)
/api/users	POST	Create a new user
/api/users/{id}	PUT	Update user details
/api/users/{id}	DELETE	Delete a user
/api/users/{id}/status	PATCH	Toggle user status (active/inactive)
Notes:

Users should have roles (admin, user, manager, etc.).

Status should be tracked (active/inactive).

Search and filtering should be handled server-side.

2. Lessons Dashboard (DashboardPage.tsx)
Purpose: Track and manage lessons learned across projects.
Key Features:

View lessons with impact indicators (positive/negative/neutral)

Filter by category, impact, and status

Approve/reject pending lessons

Export/share lesson reports

API Requirements:

Endpoint	Method	Description
/api/lessons	GET	Fetch all lessons (filterable by category, impact, status)
/api/lessons	POST	Add a new lesson
/api/lessons/{id}	PUT	Update a lesson
/api/lessons/{id}/approve	PATCH	Approve/reject a lesson
/api/lessons/export	GET	Export lessons (PDF/CSV)
Notes:

Lessons should have:

Project association

Impact type (positive, negative, neutral)

Status (pending, approved, rejected)

Tags for categorization

3. Lesson Detail Page (LessonDetailPage.tsx)
Purpose: View and manage a single lesson in detail.
Key Features:

View full lesson details (description, root cause, outcomes)

Add comments and attachments

View approval history

Edit lesson details (admin only)

API Requirements:

Endpoint	Method	Description
/api/lessons/{id}	GET	Fetch lesson details
/api/lessons/{id}	PUT	Update lesson
/api/lessons/{id}/comments	GET	Fetch comments
/api/lessons/{id}/comments	POST	Add a comment
/api/lessons/{id}/attachments	POST	Upload a document
Notes:

Should track who submitted/approved the lesson.

Comments should include author and timestamp.

Attachments should support PDF, Excel, images.

4. Projects Page (ProjectPage.tsx)
Purpose: Manage projects and their associated lessons.
Key Features:

List projects with status, risk level, and lesson count

Filter by status, risk, or search

View lessons linked to each project

Add/edit projects

API Requirements:

Endpoint	Method	Description
/api/projects	GET	Fetch all projects (filterable)
/api/projects	POST	Add a new project
/api/projects/{id}	PUT	Update project
/api/projects/{id}/lessons	GET	Fetch lessons for a project
Notes:

Projects should have:

Status (active, completed, on-hold)

Risk level (low, medium, high)

Associated lessons count

5. Reports & Analytics (ReportsPage.tsx)
Purpose: Generate insights from lessons and projects.
Key Features:

Filter reports by time range (last 7/30/90 days)

View trends, category breakdowns, and project analysis

Export reports (PDF, CSV, Excel)

API Requirements:

Endpoint	Method	Description
/api/reports/summary	GET	Fetch summary stats (total lessons, impact breakdown)
/api/reports/projects	GET	Fetch project-wise lesson distribution
/api/reports/categories	GET	Fetch category-wise breakdown
/api/reports/trends	GET	Fetch trends over time
/api/reports/export	GET	Export report data
Notes:

Should support filtering by date range.

Data should be structured for charts (frontend will use Chart.js/ApexCharts).

General Backend Requirements
Authentication & Authorization:

JWT-based authentication.

Role-based access control (admin, manager, user).

Pagination & Filtering:

All list endpoints should support pagination (page, limit).

Filtering should be query-based (e.g., ?status=active&category=technical).

Error Handling:

Consistent error responses ({ success: false, error: "message" }).

Validation for required fields.

Data Validation:

Ensure required fields are present (title, projectId, category for lessons).

Validate enum values (impact, status, riskLevel).

Feedback & Next Steps
This is a prototype, so backend should review and suggest improvements.

If any API structure needs modification, discuss with the frontend team.

If additional data fields are needed, let us know.

