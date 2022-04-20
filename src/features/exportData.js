export const exportData = {
table: [`<table id="customers">
    <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
    </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
    <tr>
        <td>Berglunds snabbköp</td>
        <td>Christina Berglund</td>
        <td>Sweden</td>
    </tr>
</table>`
],
tableCss: [`#customers {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
      #customers td, #customers th {
        border: 1px solid #ddd;
        padding: 8px;
      }
      
      #customers tr:nth-child(even){background-color: #f2f2f2;}
      
      #customers tr:hover {background-color: #ddd;}
      
      #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4CAF50;
        color: white;
      }`
],
form: [`<div class="container">
<form>
    <div class="row">
        <div class="col-25">
            <label for="fname">First Name</label>
        </div>
        <div class="col-75">
            <input type="text" id="fname" name="firstname" placeholder="Your name..">
        </div>
        </div>
        <div class="row">
        <div class="col-25">
            <label for="lname">Last Name</label>
        </div>
        <div class="col-75">
            <input type="text" id="lname" name="lastname" placeholder="Your last name..">
        </div>
        </div>
        <div class="row">
        <div class="col-25">
            <label for="country">Country</label>
        </div>
        <div class="col-75">
            <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            </select>
        </div>
        </div>
        <div class="row">
            <div class="col-25">
                <label for="subject">Subject</label>
            </div>
            <div class="col-75">
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
            </div>
        </div>
    <div class="row">
        <button>Submit</button>
        </div>
    </form>
</div>`
],

formCss: [`input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
   width: 100%;
    margin-top: 0;
}

.col-75 {
   width: 100%;
    margin-top: 0;
}`]
,
blog: [`

<!-- Note -->
<div style="background:yellow;padding:5px">
  <h4 style="text-align:center">Resize the browser window to see the responsive effect.</h4>
</div>

<!-- Header -->
<div class="header">
  <h1>My Website</h1>
  <p>With a <b>flexible</b> layout.</p>
</div>

<!-- Navigation Bar -->
<div class="navbar">
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
</div>

<!-- The flexible grid (content) -->
<div class="row">
  <div class="side">
    <h2>About Me</h2>
    <h5>Photo of me:</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    <h3>More Text</h3>
    <p>Lorem ipsum dolor sit ame.</p>
    <div class="fakeimg" style="height:60px;">Image</div><br>
    <div class="fakeimg" style="height:60px;">Image</div><br>
    <div class="fakeimg" style="height:60px;">Image</div>
  </div>
  <div class="main">
    <h2>TITLE HEADING</h2>
    <h5>Title description, Dec 7, 2017</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    <br>
    <h2>TITLE HEADING</h2>
    <h5>Title description, Sep 2, 2017</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>

<!-- Footer -->
<div class="footer">
  <h2>Footer</h2>
</div>

`],
blogCss : [`
/* Header/logo Title */
.header {
  padding: 60px;
  text-align: center;
  background: #1abc9c;
  color: white;
}

/* Style the top navigation bar */
.navbar {
  display: flex;
  background-color: #333;
}

/* Style the navigation bar links */
.navbar a {
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
}

/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Column container */
.row {  
  display: flex;
  flex-wrap: wrap;
}

/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}

/* Main column */
.main {
  flex: 70%;
  background-color: white;
  padding: 20px;
}

/* Fake image, just for this example */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
}

/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {
  .row, .navbar {   
    flex-direction: column;
  }
}
}`
],
sidenav: [`
<div class="">
    <div class="sidenav">
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
    </div>

    <div class="content">
            <h2>CSS Template</h2>
        <p>A full-height, fixed sidenav and content.</p>
    </div>
</div>
`],
sidenavCss: [`

/* Style the side navigation */
.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
}


/* Side navigation links */
.sidenav a {
  color: white;
  padding: 16px;
  text-decoration: none;
  display: block;
}

/* Change color on hover */
.sidenav a:hover {
  background-color: #ddd;
  color: black;
}

/* Style the content */
.content {
  margin-left: 200px;
  padding-left: 20px;
}
`],
hero:[
    `<section class="hero-section">
        <div class="container">
            <div class="hero-row">
                <div class="hero-col">
                  <h1>Hero Header</h1>
                  <p class="">Descripion</p>
                <div>
                    <button class="btn"></button>
                </div>
                </div>
                <div class="hero-img" >
                    <img src="/"class="img" alt=""/>
                </div>
            </div>
        </div>
    <section>`
]
,
heroCss: [`.hero {
    width: 100%;
    height: 100vh;
  }
  .hero-container{
    max-width: 1220px;
    width: 100%;
  }
  .heroo-row{
    flex-direction: row;
  }
  .hero-col{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .hero h1 {
    margin: 0;
    font-size: 40px;
    font-weight: 700;
    color: #012970;
  }
  .hero p {
    color: '';
    margin: 15px 0 0 0;
    font-size: 23px;
  }
  .hero .btn {
    margin-top: 30px;
    line-height: 0;
    padding: 15px 40px;
    border-radius: 4px;
    transition: 0.5s;
    color: #'';
    background: #'';
    margin-left: 5px;
    font-size: 18px;
    transition: 0.3s;
  }
  .hero .hero-img {
    text-align: right;
  }
  @media (min-width: 1024px) {
    .hero {
      background-attachment: fixed;
    }
  }
  @media (max-width: 991px) {
    .hero {
      height: auto;
      padding: 120px 0 60px 0;
    }
    .hero .hero-img {
      text-align: center;
      margin-top: 80px;
    }
    .hero .hero-img img {
      width: 80%;
    }
  }
  @media (max-width: 768px) {
    .hero {
      text-align: center;
    }
    .hero h1 {
      font-size: 32px;
    }
    .hero p {
      font-size: 24px;
    }
    .hero .hero-img img {
      width: 100%;
    }
  }`]
}
