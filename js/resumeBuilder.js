
 var bio = {
   "name" : "Mike Sanchez",
   "role" : "Web Developer",
   "contacts" : {
     "mobile" : "123-456-7890",
     "email" : "Mike@gmail.com",
     "github" : "mikesanchez",
     "location" : "San Diego, CA"
   },
   "welcomeMessage" : "Welcome to my Bio",
   "skills" : ["JavaScript","CSS","HTML","Drafting"]
   /*"bioPic" : "images/fry.jpg"*/
  }

 var work = {
    "jobs" : [
      {
        "employer" : "AT&T",
        "title" : "Design Engineer",
        "location" : "San Diego, CA",
        "dates" : "2015 - Present",
        "description" : "Designed fiber optic and copper facilities"
      },
      {
        "employer" : "AT&T",
        "title" : "Network Services Manager",
        "location" : "San Diego, CA",
        "dates" : "2012 - 2015",
        "description" : "Supervisory role for crew of telecom maintenance technicians"
      },
      {
        "employer" : "AT&T",
        "title" : "Splicing Technician",
        "location" : "San Diego, CA",
        "dates" : "2007 - 2012",
        "description" : "Technician role to splice advanced fiber and copper networks"
      }
    ]
  }

 var education = {
    "schools" : [
      {
        "name" : "Cuycamaca Community College",
        "city" : "Rancho San Diego, CA",
        "degree" : "",
        "majors" : "Cisco Networking",
        "dates" : "2010 - 2012"
        /*"url" : "https://www.cuyamaca.edu/"*/
      },
      {
        "name" : "Grossmont Community College",
        "city" : "El Cajon, CA",
        "degree" : "Business Administration",
        "majors" : "Accounting",
        "dates" : "2004 - 2006"
       /* "url" : "https://www.grossmont.edu/"*/
      }
    ],
    "onlineCourses" : [
      {
        "name" : "Udacity",
        "nanoDegree" : "Front-End Web Development",
        "dates" : "2017 - Present"
       /* "url" : "http://www.udacity.com/"*/
      }
    ]
  }

 var projects = {
   "projects" : [
     {
       "title" : "Sample Project 1",
       "dates" : "2017",
       "desciption" : "This is a sample of my first project",
       "images" : [

       ]
     }
   ]
 }

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
 var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

 var formattedContactInfo = [];
 formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
 formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
 formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
 formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#header").append(formattedBioPic);
 $("#header").append(formattedWelcomeMsg);

 display: if(bio.skills.length > 0) {
   $("#header").append(HTMLskillsStart);

   var formattedSkill = HTMLskills.replace("%data", bio.skills[0]);
   $("skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data", bio.skills[1]);
   $("skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data", bio.skills[2]);
   $("skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data", bio.skills[3]);
   $("skills").append(formattedSkill);
 }

 function displayWork() {
   for(job in work.jobs) {
     $("workExperience").append(HTMLworkStart);

     var formattedEmployer = HTMLworkEmployer.replace("%data",work.jobs[job].employer);
     var formattedTitle = HTMLworkTitle.replace("%data", work.jobs[job].title);
     var formattedEmployerTitle = formattedEmployer + formattedTitle;

     $(".work-entry:last").append(formattedEmployerTitle);

     var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
     $(".work-entry:last").append(formattedDates);

     var formattedDescription = HTMLworkDescription.replace("%data", work.jobs[job].description);
     $("work-entry:last").append(formattedDescription);
   }
 }

 displayWork();

 $(document).click(function(loc) {
   var x = loc.pageX;
   var y = loc.pageY;

   logClicks(x,y);
 });
