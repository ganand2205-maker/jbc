
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>JobConnect - Jobs</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

    <header>

        <a href="index2.html" class="logo">
            <div class="logo-icon">JC</div>
            <div class="logo-name">Job<span>Connect</span></div>
        </a>

        <nav>
            <a href="index2.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="jobs.html">Jobs</a>
            <a href="register.html">Register / Login</a>
            <a href="contact.html">Contact Us</a>
        </nav>

    </header>


    <section class="container">

        <h2>Available Jobs</h2>

        <div class="search-box">

            <input
                type="text"
                id="jobSearch"
                placeholder="Search jobs..."
                oninput="filterJobs()">

            <button onclick="clearSearch()">
                Clear
            </button>

        </div>


        <div class="cards">

            <div class="card job-card">

                <h3>Java Developer</h3>

                <p>Company: ABC Technologies</p>

                <p>Location: Chennai</p>

                <p>Salary: ₹25,000 - ₹40,000</p>

                <a href="register.html" class="apply-btn">
                    Apply Now
                </a>

            </div>


            <div class="card job-card">

                <h3>Python Developer</h3>

                <p>Company: Tech Solutions</p>

                <p>Location: Madurai</p>

                <p>Salary: ₹20,000 - ₹35,000</p>

                <a href="register.html" class="apply-btn">
                    Apply Now
                </a>

            </div>


            <div class="card job-card">

                <h3>Web Developer</h3>

                <p>Company: Digital World</p>

                <p>Location: Chennai</p>

                <p>Salary: ₹18,000 - ₹30,000</p>

                <a href="register.html" class="apply-btn">
                    Apply Now
                </a>

            </div>

        </div>


        <h3 id="noJobs" style="display:none; margin-top:25px;">
            No jobs found!
        </h3>

    </section>


    <footer>

        <p>© 2026 JobConnect. All Rights Reserved.</p>

    </footer>


    <script src="script.js"></script>

</body>

</html>
