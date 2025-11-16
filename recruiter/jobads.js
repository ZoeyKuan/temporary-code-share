const candidates = `<div class="candidate-cards" style="overflow-y: hidden;">
     <!-- Example Candidate Card 1 -->
     <div class="candidate-card">
      <img src="path-to-jhon-image.jpg" alt="Jhon William">
      <h3>Jhon William</h3>
      <p>Senior Motion Designer</p>
      <div class="ai-score">AI Score: 85%</div>
      <a href="#" class="view-details">View Details</a>
     </div>
     <!-- Example Candidate Card 2 -->
     <div class="candidate-card">
      <img src="path-to-lucie-image.jpg" alt="Lucie Statterfield">
      <h3>Lucie Statterfield</h3>
      <p>Junior Analyst</p>
      <div class="ai-score">AI Score: 92%</div>
      <a href="#" class="view-details">View Details</a>
     </div>
     <!-- Add more candidate cards as needed -->
    </div>`;

const jobs = `<div class="jobadd-topnav">
    <div class="jobadd-topnav-left">
        <img src="logo-placeholder.png" alt="T-ROC Logo" style="height:40px;">
    </div>

    <div class="jobadd-topnav-middle">
        <a href="#">NEWS</a>
        <a href="#">CURRENT EMPLOYEES</a>
        <a href="#">CONNECT</a>
        <a href="#">SEE ALL JOBS</a>
    </div>

    <div class="jobadd-topnav-right">
        <a href="#"><i>FB</i></a>
        <a href="#"><i>TW</i></a>
        <a href="#"><i>IN</i></a>
        <a href="#"><i>YT</i></a>
    </div>
</div>

<!-- HEADER TITLE -->
<div class="jobadd-header">
    <h1>RETAIL SALES ASSOCIATE</h1>
</div>

<!-- JOB INFO SECTION -->
<div class="jobadd-info">
    <p><strong>JOB ID:</strong> 2020-64830</p>
    <p><strong>MIAMI GARDENS, FLORIDA</strong></p>
    <p><strong>DATE POSTED:</strong> 09/01/2020</p>

    <button class="jobadd-applybtn">APPLY NOW</button>
</div>

<!-- CONTENT + SIDEBAR -->
<div class="jobadd-wrapper">

    <!-- MAIN CONTENT -->
    <div class="jobadd-content">
        <h3>Retail Sales Associate</h3>
        <p>Mobile Store Operators</p>

        <h3>Get to Know Us:</h3>
        <p>
            <strong>Mobile Store Operators (MSO)</strong> offers an environment that rewards success and encourages growth.
            We are a premier retail partner for <strong>T-Mobile</strong>, one of the largest wireless providers in the U.S.
        </p>
        <p>
            MSO is headquartered in Florida and operates more than 80 T-Mobile stores across the eastern U.S. and Puerto Rico.
        </p>

        <h3>Culture:</h3>
        <p>We focus on teamwork, development, and career growth while supporting customers with outstanding service.</p>
    </div>

    <!-- SIDEBAR -->
    <div class="jobadd-sidebar">
        <h2>WHO WE ARE</h2>
        <p>
            T-ROC is a group of companies working together to deliver innovative retail solutions. 
            We combine technology and people to optimize retail operations, increase sales, and reduce costs.
        </p>
    </div>

</div>`;
const dashboard = `<div style="overflow-y: hidden; display: flex; height: 100vh; overflow-y: hidden; width: 100%; justify-content: center; align-items: center;">
  Click on the other options to start
 </div>`;
const setting = `<div class="jobadd-settings-box">

    <div class="jobadd-settings-title">Job Settings</div>

    <!-- GENERAL JOB INFO -->
    <div class="jobadd-section">
        <h3>General Information</h3>

        <div class="jobadd-form-group">
            <label>Job Title</label>
            <input type="text" placeholder="e.g., Retail Sales Associate">
        </div>

        <div class="jobadd-form-group">
            <label>Location</label>
            <input type="text" placeholder="City, State or Remote">
        </div>

        <div class="jobadd-form-group">
            <label>Job Type</label>
            <select>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
                <option>Temporary</option>
                <option>Internship</option>
            </select>
        </div>

        <div class="jobadd-form-group">
            <label>Department</label>
            <input type="text" placeholder="e.g., Sales, Support, Operations">
        </div>
    </div>

    <!-- APPLICATION SETTINGS -->
    <div class="jobadd-section">
        <h3>Application Settings</h3>

        <div class="jobadd-form-group">
            <label>Application Deadline</label>
            <input type="date">
        </div>

        <div class="jobadd-form-group">
            <label>Maximum Candidates Allowed</label>
            <input type="number" placeholder="e.g., 100">
        </div>

        <div class="jobadd-form-group">
            <label>Resume Required?</label>
            <select>
                <option>Yes</option>
                <option>No</option>
            </select>
        </div>

        <div class="jobadd-form-group">
            <label>Screening Questions Enabled?</label>
            <select>
                <option>Yes</option>
                <option>No</option>
            </select>
        </div>
    </div>

    <!-- COMPENSATION -->
    <div class="jobadd-section">
        <h3>Salary & Compensation</h3>

        <div class="jobadd-form-group">
            <label>Salary Range</label>
            <input type="text" placeholder="e.g., $40,000 - $55,000 / year">
        </div>

        <div class="jobadd-form-group">
            <label>Pay Type</label>
            <select>
                <option>Hourly</option>
                <option>Yearly</option>
                <option>Commission</option>
                <option>Base + Commission</option>
            </select>
        </div>

        <div class="jobadd-form-group">
            <label>Benefits Included</label>
            <textarea rows="4" placeholder="Medical, Dental, 401k, PTO, etc."></textarea>
        </div>
    </div>

    <!-- JOB VISIBILITY -->
    <div class="jobadd-section">
        <h3>Posting & Visibility</h3>

        <div class="jobadd-form-group">
            <label>Job Status</label>
            <select>
                <option>Draft</option>
                <option>Published</option>
                <option>Closed</option>
                <option>Archived</option>
            </select>
        </div>

        <div class="jobadd-form-group">
            <label>Visibility</label>
            <select>
                <option>Public</option>
                <option>Internal Only</option>
                <option>Private Link</option>
            </select>
        </div>
    </div>

    <!-- TAGS / CATEGORIES -->
    <div class="jobadd-section">
        <h3>Tags & Categories</h3>

        <div class="jobadd-form-group">
            <label>Job Tags</label>
            <input type="text" placeholder="e.g., Retail, Sales, Customer Service">
        </div>

        <div class="jobadd-form-group">
            <label>Category</label>
            <select>
                <option>Retail</option>
                <option>Corporate</option>
                <option>Technology</option>
                <option>Marketing</option>
                <option>Finance</option>
            </select>
        </div>
    </div>

    <!-- RECRUITER INFO -->
    <div class="jobadd-section">
        <h3>Recruiter / Hiring Manager</h3>

        <div class="jobadd-form-group">
            <label>Recruiter Name</label>
            <input type="text" placeholder="e.g., John Smith">
        </div>

        <div class="jobadd-form-group">
            <label>Recruiter Email</label>
            <input type="email" placeholder="example@company.com">
        </div>

        <div class="jobadd-form-group">
            <label>Notifications Enabled?</label>
            <select>
                <option>Yes</option>
                <option>No</option>
            </select>
        </div>
    </div>

    <!-- SAVE BUTTON -->
    <button class="jobadd-save-btn">Save Job Settings</button>`;
const content = document.querySelector('#content');

const options = document.querySelectorAll('.sidebar a');
const optdb = options[0];
const optjob = options[1];
const optcan = options[2];
const optset = options[3];

optcan.addEventListener('click', ()=>{
 content.innerHTML = candidates;
});

optdb.addEventListener('click', ()=>{
 content.innerHTML = dashboard;
});

optjob.addEventListener('click', ()=>{
 content.innerHTML = jobs;
});

optset.addEventListener('click', ()=>{
 content.innerHTML = setting;
});