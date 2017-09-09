
////////////////////// WORK ///////////////////////
// work object
var work = {
  "jobs" : [
    {"title" : "Intern",
    "employer" : "Imam Abdulrahman University",
    "date" : "July 2017 - Septemper 2017",
    "location" : "Khobar",
    "description" : "Made an interactive user-friendly website where people can know all about the E-Learning Deanship at the university and its services, the main feature was a room reservations system that people can use to reserve a high technology room for learning purposes."
    },

    {"title" : "Developer",
    "employer" : "Udacity",
    "date" : "Yet to happen",
    "location" : "Anywhere",
    "description" : "I would enjoy researching in the user experience of Udacity and improving it, and be one of the people who help making it as usable as possible, and as appealing as it can get, it would be a fun, intense, countinous, and joyous process."
    }
  ]
}

// work function
function displayWork() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var fWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var fWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var fEmployerAndTitle = fWorkEmployer + fWorkTitle;
		$(".work-entry:last").append(fEmployerAndTitle);

		var fWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
		$(".work-entry:last").append(fWorkDates);

		var fWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(fWorkLocation);

		var fWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(fWorkDescription);
	}
}

////////////////////// PROJECTS ///////////////////////
// projects object
var projects = {
  "projects" : [
    {
    "title" : "AtoZSurvey",
    "date" : "2017",
    "description" : "A website and mobile phone application protoypes, created following all usability guidlines and user experience rules.",
    "image" : "images/atozlogo.png"
    },

    {
    "title" : "ROOMS",
    "date" : "2016",
    "description" : "A stand alone program that facilitates the process of assigning schedules to classrooms, updating them, and make lecturers able to reserve a room for quizes and makeup classes, as well as requesting for technicians in real time.",
    "image" : "images/roomslogo.png"
    }
  ]
}

// projects function
function displayProjects() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var fProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(fProjectTitle);

		var fProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(fProjectDates);

		var fProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(fProjectDescription);

		var fProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
		$(".project-entry:last").append(fProjectImage);
	}
}

////////////////////// BIO ///////////////////////
// bio object
var bio = {
  "name" : "Hind Aljabr",
  "role" : "Web Developer",
  "contact" : {
      "email": "Hindaljabr@gmail.com",
      "mobile": "00966569182204",
      "github": "Hindaljabr",
      "location": "Dhahran, Saudi Arabia"
  },
  "image" : "images/me.jpg",
  "welcomeMsg" : "Welcome to my e-resume!",
  "skills" : ["Programming. ", "Front end development. ", "UX/UI Desgin. ", "UX usability testing. "],
  "biopic" : "images/me.jpg"
};

// bio function
function displayBio() {

  	var fHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
  	$("#header").prepend(fHeaderRole);

    var fHeaderName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(fHeaderName);

    var fEmail = HTMLemail.replace("%data%", bio.contact.email);
  	$("#topContacts, #footerContacts").append(fEmail);

  	var fMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
  	$("#topContacts, #footerContacts").append(fMobile);

  	var fGithub = HTMLgithub.replace("%data%", bio.contact.github);
  	$("#topContacts, #footerContacts").append(fGithub);

  	var fLocation = HTMLlocation.replace("%data%", bio.contact.location);
  	$("#topContacts, #footerContacts").append(fLocation);

    var fMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
  	$("#header").append(fMsg);

  	var fPic = HTMLbioPic.replace("%data%", bio.biopic);
  	$("#header").append(fPic);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for(skill in bio.skills) {
        var fSkill = HTMLskills.replace('%data%', bio.skills[skill]);
          $('#skills').append(fSkill);
    }
  }
}

////////////////////// EDUCATION ///////////////////////
// education object
var education = {

    "schools" : [
      {
      "name" : "Imam Abdulrahman University",
      "location" : "Khobar, Saudi Arabia",
      "degree" : "Bachelor",
      "date" : "2018",
      "majors" : ["Computer science"]
      },
    ],

    "onlineCourses" : [
      {
        "title": "Front End Development",
        "school": "Udacity",
        "date": "2017",
        "url": "https://www.udacity.com/degrees/front-end-web-developer-nanodegree--nd001"
      }
    ]
}

// education function
function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var fSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var fSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var fNameAndDegree = fSchoolName + fSchoolDegree;
		$(".education-entry:last").append(fNameAndDegree);

		var fSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
		$(".education-entry:last").append(fSchoolDates);

		var fSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(fSchoolLocation);

		for(major in education.schools.majors) {
			var fSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(fSchoolMajor);
		}
	}

	if(education.schools.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);

		for(course in education.onlineCourses) {
			var fOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var fOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var fTitleAndSchool = fOnlineTitle + fOnlineSchool;
			$(".education-entry:last").append(fTitleAndSchool);

			var fOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			$(".education-entry:last").append(fOnlineDates);

			var fOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(fOnlineURL);
		}
	}
}

////////////////////// calling functions ///////////////////////
displayBio();
displayWork();
displayProjects();
displayEducation();

////////////////////// map ///////////////////////
$("#mapDiv").append(googleMap);

////////////////////// click location ///////////////////////
$(document).click(function(loc) {
  console.log(loc.pageX, loc.pageY);
});

////////////////////// internationalize button ///////////////////////
function inName() {
    var names = bio.name.trim().split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    internationalizedName = names.join(" ");
    return internationalizedName;
}
$("#main").append(internationalizeButton);
