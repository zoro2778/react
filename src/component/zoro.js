import React from 'react'
const zoro = () => {
  return (
    <div>
        <div className='nav'>
            <ul>
                <a href='#syllabus'><li class="ce">Syllabus</li></a>
             <a href='#over'> <li class="ov">Overview</li></a>
              <a href='#pla'><li class="pl">Placement</li></a>
              <a href='#f1'><li class="fa">FAQ</li></a>
              

            </ul>
            </div>
            <div class="one">
            <div class="box">
                <div class="main">
                    <h1>Certified Full Stack Development Course with AI</h1>
                </div>
                <div id="form">
                    <h2>Iam interested</h2>
                    <label>Name
                    <input type='text' name='uname' placeholder='Enter usrename'></input>
                </label>
                
                <label class="email">Email
                    <input type='email' name='mail' placeholder='Enter email'></input>
                </label>
                <label class="phone" >Phone
                    <input type="number" placeholder="phone"></input>
                </label>
                <label class="dob">DOB
                    <input type="date" name="dob" placeholder="DOB"></input>
                </label>
                <label class="gender">Gender
                <select name="gen">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="other">Other</option>
                </select></label>
                <div class="sub">
                <input type='submit' name=''></input>
            </div>
                </div>
            </div>
        </div>
        <div class="two">
            <h1>About Full Stack Development Course with AI Tools</h1>
        </div>
        <div class="three">
            <p>Our IIT-M Pravartak Certified Full Stack Development Course with AI Tools offers a pinnacle of real-time learning and expert mentorship. Harness our AI-powered platforms for round-the-clock project guidance and customized interview preparation. From exciting hackathons to insightful webinars and a supportive community, this course offers it all, with learning options in Tamil, Kannada, Hindi, and English. Step into the Full-stack development industry with confidence and a network of industry leaders to back you.</p>
        </div>
        <div class="box3">
            <h1 id="over">Program Overview</h1>
               <p class="point">1-on-1 Mock Interviews with Industry Experts</p>
               <p class="point1">Unlock Your Career Potential with Our Placement Guidance</p>
               <p class="point2">Learn AI tools to Code faster, better, and more precisely.</p>
               <p class="point3">EMI options available(Upto 12 months) with 7-day Refund <br/>Policy</p>
               <p class="point4">Live online classes and Lifetime Access to Recorded Sessions</p>
               <p class="point5">Advance in Coding with 100+ Hours of Industry-Relevant<br/> Practical Projects</p>
        </div>
        <div class="box4">
            <h1 id="syllabus">Syllabus Overview</h1>
            <p>Our curriculum has been thoughtfully structured by industrial experts to cover the essentials of Front-end, Back-end & Database technologies</p>
            <div class="minibox">
                <div class="no4">
            <div class="minibox1">
                <details>
                    <summary>Module 1</summary>
                    <h2>js basics</h2><p>Explores foundational JavaScript concepts and ES6 features like arrow functions, object destructuring & more.</p>
                </details>
            </div>
            <div class="minibox2">
                <details>
                    <summary>Module 2</summary>
                    <h2>HTML, CSS, Tailwind</h2>
                        <p>Focuses on web development essentials with HTML, CSS, and Tailwind, covering basic tags to advanced styling techniques.</p>
                </details>
            </div>
            <div class="minibox3">
                <details>
                    <summary>Module 3</summary>
                    <h2>Advanced JS</h2><p>Explores JavaScript skills with DOM manipulation, asynchronous programming, and practical projects.</p>
                </details>
            </div>
            <div>
                <details class="minibox4">
                    <summary>Module 4</summary>
                    <h2>ReactJS</h2><p class="whi">Dives into ReactJS for dynamic single-page applications, state management, and CRUD operations with Axios.</p>
                </details>
            </div>
        </div>
            <div class="no5">
            <div class="minibox5">
                <details>
                    <summary>Module 5</summary>
                    <h2>Redux</h2><p>Covers state management with Redux, building applications with reducers, actions, async data fetching & other core concepts.</p>
                </details>
            </div>
            <div class="minibox6">
                <details>
                    <summary>Module 6</summary>
                    <h2>Database</h2><p>Explores the insights into MySQL and MongoDB databases, mastering CRUD operations and querying data.</p>
                </details>
            </div>
            <div class="minibox7">
                <details>
                    <summary>Module 7</summary>
                    <h2>Node.js</h2><p>Focuses on backend development with Node.js, Express.js, authentication, and MongoDB integration.</p>
                </details>
            </div>
            <div class="minibox8">
                <details>
                    <summary>Module 8</summary>
                    <h2>MERN Fullstack Demo</h2><p>Guides you to unlock your full potential in the MERN stack for building cutting-edge web applications.</p>
                </details>
            </div>
            </div>
        </div>
        </div>
        <img src="./img/laptop-img.webp" alt=''/>
        <div class="button">
            <a href="#form">Enroll now</a>
        </div>
        <h1 id="pla">Placement Guidance</h1>
        <p class="plac">Benefit from real-time interview experiences, placement guidance & mentorship from top industry professionals
            to confidently navigate your job search.</p>
        <div id="place">

                <h1 class="aa">How does our Program work?</h1>
                <p class="para"/>Enroll in our Full Stack Development Program<br/>
                Attend Live classes Pursue self-paced learning<br/><br/>
                Complete the projects assigned by Industry Experts<br/><br/>
                Secure a Digital Portfolio in “Github”<br/><br/>
                Attend Mock Interviews with our HR team & Technical Round with Industry Experts<br/><br/>
                Receive Interview opportunities with Companies<br/><br/>
                Attend & clear the Interview with splendid packages<br/><br/><p/>
        </div>
            <div class="f">
                <h1 id="f1">Frequently Asked Questions</h1>
                <div class="faq1">
                    <details>
                        <summary class="sum">I’m from a non-engineering background or new to programming. Can I take this course?</summary>
                        <p class="sha1">We aim to create job opportunities for all students. We offer a PreBootcamp to assess your readiness for the Zen Bootcamp. If you need extra preparation, our mentors will guide you with additional GUVI lessons.</p>
                    </details>
                </div>
            </div>
        </div>
  )
}
export default zoro
