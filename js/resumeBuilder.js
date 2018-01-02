
 var bio = {
   "name" : "Mike Sanchez",
   "role" : "Web Developer",
   "contacts" : {
     "mobile" : "123-456-7890",
     "email" : "Mike@gmail.com",
     "github" : "mikesanchez",
     "location" : "San Diego, CA"
   },
   "welcomeMessage" : "Welcome to my Bio!",
   "skills" : ["JavaScript","CSS","HTML","Drafting"],
   "biopic" : "images/fry.jpg"
 };

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
  };

 var education = {
    "schools" : [
      {
        "name" : "Cuycamaca Community College",
        "location" : "Rancho San Diego, CA",
        "degree" : "Cisco",
        "majors" : ["Cisco Networking"],
        "dates" : "2010 - 2012",
        "url" : "https://www.cuyamaca.edu/"
      },
      {
        "name" : "Grossmont Community College",
        "location" : "El Cajon, CA",
        "degree" : "Business Administration",
        "majors" : ["Accounting"],
        "dates" : "2004 - 2006",
        "url" : "https://www.grossmont.edu/"
      }
    ],
    "onlineCourses" : [
      {
        "title" : "Front End Web Developer Nanodegree",
        "school" : "Udacity",
        "dates" : "2017 - Present",
        "url" : "http://www.udacity.com/"
      }
    ]
  };

 var projects = {
   "projects" : [
     {
       "title" : "Sample Project 1",
       "dates" : "2017",
       "description" : "This is a placeholder for a sample of my first project",
       "images" : ["images/197x148.gif"]
     }
   ]
 };
//
projects.display = function() {
  if(projects.projects.length > 0){
    for(var i = 0; i < projects.projects.length; i++){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = $(HTMLprojectTitle);
        formattedTitle.text(projects.projects[i].title);
        formattedTitle.attr('href',projects.projects[i].url);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);

        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

        if(projects.projects[i].images.length > 0){
           for(var j = 0; j < projects.projects[i].images.length; j++){
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
  }
};

bio.display = function() {
   var formattedName = HTMLheaderName.replace("%data%", bio.name);
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
   var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
   var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
   var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
   var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
   var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
   var formattedLocations = HTMLlocation.replace("%data%",bio.contacts.location);

   $('#header').prepend(formattedName, formattedRole);
   $('#header').append(formattedWelcomeMsg, formattedBioPic);

   $('#topContacts, #footerContacts').append(formattedMobile,formattedEmail,formattedGithub,formattedLocations);

   if(bio.skills.length > 0) {
     $('#header').append(HTMLskillsStart);

     for (var i = 0; i < bio.skills.length; i++) {
       var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
       $('#skills').append(formattedSkill);
     }
   }

};

education.display = function() {
  if (education.schools.length > 0){
    $("#education").append(HTMLschoolStart);

    for(var i = 0; i < education.schools.length; i++) {
      var formattedSchoolName = HTMLschoolName.replace('%data%',education.schools[i].name);
      formattedSchoolName = formattedSchoolName.replace('#', education.schools[i].url);
      formattedSchoolName += HTMLschoolDegree.replace('%data%',education.schools[i].degree);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%',education.schools[i].location);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%',education.schools[i].dates);

      $('.education-entry:last').append(formattedSchoolName,formattedSchoolDates,formattedSchoolLocation);

      for (var j = 0; j < education.schools[i].majors.length; j++) {
        var formattedSchoolMajor = HTMLschoolMajor.replace('%data%',education.schools[i].majors[j]);
        $(".education-entry:last").append(formattedSchoolMajor);
      }
    }
  }
  if(education.onlineCourses.length > 0){
    $('#education').append(HTMLonlineClasses);
    for(var k = 0; k < education.onlineCourses.length; k++) {
      $('#education').append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace('%data%',education.onlineCourses[k].title);
      formattedTitle = formattedTitle.replace('#', education.onlineCourses[k].url);
      formattedTitle += HTMLonlineSchool.replace('%data%',education.onlineCourses[k].school);
      var formattedDates = HTMLonlineDates.replace('%data%',education.onlineCourses[k].dates);
      var formattedUrl = HTMLonlineURL.replace('%data%',education.onlineCourses[k].url);

      $('.education-entry:last').append(formattedTitle, formattedDates, formattedUrl);
    }
  }
};

work.display = function() {
  if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);

    for(var i = 0; i < work.jobs.length; i++) {
      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
      var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
      var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
      var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
      var formattedWorkDate = HTMLworkDates.replace('%data%', work.jobs[i].dates);
      var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);

      $('.work-entry:last').append(formattedEmployerTitle);
      $('.work-entry:last').append(formattedWorkLocation);
      $('.work-entry:last').append(formattedWorkDate);
      $('.work-entry:last').append(formattedWorkDescription);
    }
  }
};

$("#mapDiv").append(googleMap);

 work.display();
 education.display();
 bio.display();
 projects.display();
