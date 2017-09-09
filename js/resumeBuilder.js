////////////////////// WORK ///////////////////////
// work object
var work = {
    "jobs": [{
            "title": "Intern",
            "employer": "Imam Abdulrahman University",
            "dates": "July 2017 - Septemper 2017",
            "location": "Khobar",
            "description": "Made an interactive user-friendly website where people can know all about the E-Learning Deanship at the university and its services, the main feature was a room reservations system that people can use to reserve a high technology room for learning purposes."
        },

        {
            "title": "Developer",
            "employer": "Udacity",
            "dates": "Yet to happen",
            "location": "Anywhere",
            "description": "I would enjoy researching in the user experience of Udacity and improving it, and be one of the people who help making it as usable as possible, and as appealing as it can get, it would be a fun, intense, countinous, and joyous process."
        }
    ]
};

// work function
work.display = function() {

    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var fWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var fWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var fEmployerAndTitle = fWorkEmployer + fWorkTitle;
        var fWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var fWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var fWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(fEmployerAndTitle, fWorkDates, fWorkLocation, fWorkDescription);
    };
}

////////////////////// PROJECTS ///////////////////////
// projects object
var projects = {
    "projects": [{
            "title": "AtoZSurvey",
            "dates": "2017",
            "description": "A website and mobile phone application protoypes, created following all usability guidlines and user experience rules.",
            "images": ["images/atozlogo.png"]
        },

        {
            "title": "ROOMS",
            "dates": "2016",
            "description": "A stand alone program that facilitates the process of assigning schedules to classrooms, updating them, and make lecturers able to reserve a room for quizes and makeup classes, as well as requesting for technicians in real time.",
            "images": ["images/roomslogo.png"]
        }
    ]
};

// projects function
projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var fProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var fProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var fProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var fProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(fProjectTitle, fProjectDates, fProjectDescription, fProjectImage);
    }
}

////////////////////// BIO ///////////////////////
// bio object
var bio = {
    "name": "Hind Aljabr",
    "role": "Web Developer",
    "contacts": {
        "email": "Hindaljabr@gmail.com",
        "mobile": "00966569182204",
        "github": "Hindaljabr",
        "location": "Dhahran, Saudi Arabia"
    },
    "welcomeMessage": "Welcome to my e-resume!",
    "skills": ["Programming. ", "Front end development. ", "UX/UI Desgin. ", "UX usability testing. "],
    "biopic": "images/me.jpg"
};

// bio function
bio.display = function() {

    var fHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
    var fHeaderName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(fHeaderName, fHeaderRole);


    var fEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var fMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var fGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var fLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(fEmail, fMobile, fGithub, fLocation);

    var fMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var fPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(fMsg, fPic);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var fSkill = HTMLskills.replace('%data%', bio.skills[skill]);
            $('#skills').append(fSkill);
        }
    }
}

////////////////////// EDUCATION ///////////////////////
// education object
var education = {

    "schools": [{
        "name": "Imam Abdulrahman University",
        "location": "Khobar, Saudi Arabia",
        "degree": "Bachelor",
        "dates": "2018",
        "majors": ["Computer science"]
    }, ],

    "onlineCourses": [{
        "title": "Front End Development",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/degrees/front-end-web-developer-nanodegree--nd001"
    }]
};

// education function
education.display = function() {
        for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var fSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var fSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var fNameAndDegree = fSchoolName + fSchoolDegree;
        var fSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var fSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(fNameAndDegree, fSchoolDates, fSchoolLocation);

        for (var major = 0; major < education.schools[school].majors.length; major++) {
            var fSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
            $(".education-entry:last").append(fSchoolMajor);
        }
    }

    if (education.schools.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);

        for (var course = 0; course < education.onlineCourses.length; course++) {
            var fOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var fOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var fTitleAndSchool = fOnlineTitle + fOnlineSchool;
            var fOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var fOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(fTitleAndSchool, fOnlineDates, fOnlineURL);
        }
    }
}

////////////////////// calling functions ///////////////////////
bio.display();
work.display();
projects.display();
education.display();

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
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    internationalizedName = names.join(" ");
    return internationalizedName;
}
$("#main").append(internationalizeButton);
