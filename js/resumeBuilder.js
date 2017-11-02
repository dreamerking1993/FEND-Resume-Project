/*
defining the 'bio' object
 */
var bio = {

    "name": "Sushant Khanal",
    "role": "Web developer",
    "contacts": {
        "mobile": "9818618611",
        "email": "dreamerking111@gmail.com",
        "github": "ehskjfld",
        "location": "Kathmandu"
    },
    "welcomeMessage": "Namaste ppl of the world",
    "skills": ["Unputdownable", "dogged", "dreamer"],
    "biopic": "fry.jpg",
    // encapsulating display function within the 'bio' object
    display: function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        //       $("#topContacts").append(HTMLcontactGeneric);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


        //adding the contacts to the header and footer by using jQuery's feature to append to multiple id tagged elements
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#header").append(formattedSkill);
        }
    }
};
//calling the display function that lies within the 'bio' object 
bio.display();

//defining the 'work' object
var work = {

    "jobs": [{
            "employer": "Company- A",
            "title": "Position X",
            "location": "StreetXYZ",
            "description": "Sushant worked as a java developer for company-A for 6 months",
            "dates": "Jan-3000 to July-3000"
        },
        {
            "employer": "Company- B",
            "title": "Position Y",
            "location": "StreetPQR",
            "description": "Sushant worked as a Front End developer for company-B for 2 years",
            "dates": "Sep-3000 to Oct-3002"
        }
    ],
    //encapsulating the display function
    display: function() {

        for (i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDate);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            $(".work-entry:last").prepend(formattedEmployer + formattedTitle);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry:last").append(formattedWorkLocation);


        }
    }
};
//calling the display function that lies within the 'work' object
work.display();

//defining 'projects' object
var projects = {

    "projects": [{
        "title": "Climate change Madi valley",
        "dates": "2015-august",
        "description": "Suggesting Adaptation measures to cope up with climate change impacts.",
        "images": ["http://sustyvibes.com/wp-content/uploads/2017/05/climate-change.jpg", "https://www.fairobserver.com/wp-content/uploads/2015/12/Climate-Change-definition-938x450.jpg"]
    }],
    //encapsulating display function
    display: function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[i].images.length > 0) {
                for (var j = 0; j < projects.projects[i].images.length; j++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};
//calling the function that lies within the object
projects.display();

//defining another object 'education'
var education = {

    "schools": [{
            "name": "Galaxy Public School",
            "location": "Gyanshwor, Kathmandu",
            "degree": "SLC",
            "majors": ["Trigonometry", "Computer Science"],
            "dates": "2009-06-01",
            "url": "http://galaxy.edu.np/"
        },

        {
            "name": "Trinity Higher Secondary School",
            "location": "Dillibazar, Kathmandu",
            "degree": "HSEB",
            "majors": ["Biology", "Physics", "Maths"],
            "dates": "2011-06-11",
            "url": "http://trinitycollege.edu.np/"
        },

        {
            "name": "Advanced College of Engineering and Management",
            "location": "Kupondol, Kathmandu",
            "degree": "BE",
            "majors": ["Civil Engineering", "Climate Change"],
            "dates": "2015-011-01",
            "url": "http://www.acem.edu.np/"
        }
    ],

    "onlineCourses": [{
            "title": "The Complete SQL Bootcamp",
            "school": "Udemy",
            "dates": "08-22-2017",
            "url": "https://www.udemy.com/the-complete-sql-bootcamp/learn/v4/overview"
        },

        {
            "title": "Data Science and MAchine Learning Bootcamp with R",
            "school": "Udemy",
            "dates": "07-21-2017",
            "url": "https://www.udemy.com/data-science-and-machine-learning-bootcamp-with-r/learn/v4/overview"
        },

        {
            "title": "Front End Web Development Nano-degree",
            "school": "Udacity",
            "dates": "10-04-2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    //encapsulating display function
    display: function() {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            $(".education-entry:last").append(formattedName);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry:last").append(formattedDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedDates);
            for (var j = 0; j < education.schools[i].majors.length; j++) {
                var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                $(".education-entry:last").append(formattedMajors);
            }

        }
        $("#education").append(HTMLonlineClasses);

        for (var k = 0; k < education.onlineCourses.length; k++) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title).replace("#", education.onlineCourses[k].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url).replace("#", education.onlineCourses[k].url);
            $(".education-entry:last").append(formattedOnlineURL);

        }
    }
};
//calling the function that lies within the object
education.display();
// map
var mapp = function() {
    $("#mapDiv").append(googleMap);
};

mapp();