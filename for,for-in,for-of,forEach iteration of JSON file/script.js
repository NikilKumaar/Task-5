let myResume = {
  basics: {
    name: "Nikil Kumaar",
    phone: 8667805987,
    email: "nikilnike666@gmail.com",
    degree: "B.E Mechanical Engineering",
    location: {
      address: "176,Thirumalaipalayam,C.R.Palayam post.",
      postalcode: 638657,
      city: "Dharapuram",
      district: "Tiruppur",
      state: "Tamilnadu",
      country: "India",
    },
    profiles: {
      linkedin_URL: "https://www.linkedin.com/in/nikil-kumaar-n-9401b2295",
      github_URL: "https://github.com/NikilKumaar",
    },
    work_experience: {
      status: "Fresher, currently searching for a job",
    },
    college_education: {
      college: "Kumaraguru College of Technology",
      place: "Coimbatore",
      department: "B.E Mechanical Engineering",
      start_year: "2016",
      end_year: "2020",
      cgpa: 8.32,
    },
    school_education: {
      school: "Veveaham Higher Secondary School",
      mark10th: "463/500 AND 92.6%",
      mark12th: "1087/1200 AND 90.58%",
    },
  },
  skills: {
    name: "HTML,CSS,JavaScript,Python(beginner),C(intermediate),Solidworks,ANSYS,AutoCad",
  },
  achievements: {
    name: "Quad Bike Design Challenge(QBDC)",
    rank: "5th place all over India",
    name1: "Quad Torc",
    rank1: "4th place all over India",
  },
  languages: {
    name1: "English",
    fluency: "limited working fluency",
    level1: 2,
    name2: "Tsmil",
    fluency: "bilingual profiency",
    level2: 5,
    name3: "Hindi",
    fluency: "elementary profiency",
    level3: 1,
  },
  hobbies: {
    name: "cricket,football,carrom,listening to music",
  },
};
// console.log(myResume);

// 1. for-in loop
for (var i in myResume)
{
    console.log(myResume[i])
}

// 2. for loop
let myResume1 = [{
  basics: {
    name: "Nikil Kumaar",
    phone: 8667805987,
    email: "nikilnike666@gmail.com",
    degree: "B.E Mechanical Engineering",
    location: {
      address: "176,Thirumalaipalayam,C.R.Palayam post.",
      postalcode: 638657,
      city: "Dharapuram",
      district: "Tiruppur",
      state: "Tamilnadu",
      country: "India",
    },
    profiles: {
      linkedin_URL: "https://www.linkedin.com/in/nikil-kumaar-n-9401b2295",
      github_URL: "https://github.com/NikilKumaar",
    },
    work_experience: {
      status: "Fresher, currently searching for a job",
    },
    college_education: {
      college: "Kumaraguru College of Technology",
      place: "Coimbatore",
      department: "B.E Mechanical Engineering",
      start_year: "2016",
      end_year: "2020",
      cgpa: 8.32,
    },
    school_education: {
      school: "Veveaham Higher Secondary School",
      mark10th: "463/500 AND 92.6%",
      mark12th: "1087/1200 AND 90.58%",
    },
  },
  skills: {
    name: "HTML,CSS,JavaScript,Python(beginner),C(intermediate),Solidworks,ANSYS,AutoCad",
  },
  achievements: {
    name: "Quad Bike Design Challenge(QBDC)",
    rank: "5th place all over India",
    name1: "Quad Torc",
    rank1: "4th place all over India",
  },
  languages: {
    name1: "English",
    fluency: "limited working fluency",
    level1: 2,
    name2: "Tsmil",
    fluency: "bilingual profiency",
    level2: 5,
    name3: "Hindi",
    fluency: "elementary profiency",
    level3: 1,
  },
  hobbies: {
    name: "cricket,football,carrom,listening to music",
  },
}];

for (let i = 0; i < myResume1.length; i++)
{
    console.log(myResume1[i])           // all 
    console.log(myResume1[i].languages) // accessing languages
}
    
// 3. for-of loop

for (let j of myResume1)
{
    console.log(j)
    console.log(j.skills)  // accessing skills
}
    
// 4. forEach method

const val = myResume1.forEach((element) => {
    console.log(element)
    console.log(element.basics) // accessing basics
});

