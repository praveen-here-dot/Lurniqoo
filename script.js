const subjects = {
"AIML_1_1": ["M1", "Physics", "BEE", "EG", "C"],
"CSE_1_1": ["M1", "Physics", "BEE", "EG", "C"],
"CY_1_1": ["M1", "Physics", "BEE", "EG", "C"],
"DS_1_1": ["M1", "Physics", "BEE", "EG", "C"],
"ECE_1_1": ["M1", "Chemistry", "English", "EC", "C", "ES"],
"EEE_1_1": ["M1", "Chemistry", "English", "EC", "C", "ES"],
"ME_1_1": ["M1", "Chemistry", "English", "EM", "C", "ES"],
"CE_1_1": ["M1", "Chemistry", "English", "EC", "C", "ES"],
"AIML_1_2": ["M2", "Chemistry", "English", "DE", "Python","ES"],
"CSE_1_2": ["M2", "Chemistry", "English", "DE", "Python","ES"],
"CY_1_2": ["M2", "Chemistry", "English", "DE", "Python","ES"],
"DS_1_2": ["M2", "Chemistry", "English", "DE", "Python","ES"],
"EEE_1_2": ["M2", "Physics", "EDC", "EG", "Python"],
"ECE_1_2": ["M2", "Physics", "EDC", "EG", "Python"],
"ME_1_2": ["M2", "Physics", "BEE", "EG", "Python", "ES"],
"CE_1_2": ["M2", "Physics", "BEE", "EG", "Pyhton"],
"AIML_2_1": ["M3", "Data Structures & Algorithms", "UNIX Programming", "Intro of AI", "Professional Ethics and Human Values"],
"AIML_2_2": ["M4", "Advanced English for Engineers", "Advanced Data Structues", "Java Programming", "Operating System","Artificial Intelligence"]
};

const docLinks = {
"M1": "https://drive.google.com/uc?export=download&id=1uH1re21YAQyXEzBeHKB_0xFzTcUFNZoz",
"Physics": "https://drive.google.com/uc?export=download&id=1OaAwotmOL-0Va9M7tJ2xlawQlJFES6xl",
"BEE": "https://drive.google.com/uc?export=download&id=1aMTRzvd2ipUHIqIcLGbT8FGvkZ0Cr8c8",
"EG": "https://drive.google.com/uc?export=download&id=1Ml578a5rIwh_ukqNt40p4S1gQb0wZan6",
"C": "https://drive.google.com/uc?export=download&id=",
"M2": "https://drive.google.com/uc?export=download&id=",
"Chemistry": "https://drive.google.com/uc?export=download&id=",
"DE": "https://drive.google.com/uc?export=download&id=",
"English": "https://drive.google.com/uc?export=download&id=",
"Python": "https://drive.google.com/uc?export=download&id=",
"ES": "https://drive.google.com/uc?export=download&id=",
"EDC": "https://drive.google.com/uc?export=download&id=",
"EC": "https://drive.google.com/uc?export=download&id=",
"EM": "https://drive.google.com/uc?export=download&id="
};

function updateSubjects() {
  const branch = document.getElementById("branchSelect").value;
  const year = document.getElementById("yearSelect").value;
  const sem = document.getElementById("semSelect").value;
  const subjectSelect = document.getElementById("subjectSelect");

  subjectSelect.innerHTML = '<option value="">Select Subject</option>';

  const key = `${branch}_${year}_${sem}`;
  const subjectList = subjects[key];

  if (subjectList) {
    subjectList.forEach(subject => {
      const option = document.createElement("option");
      option.value = subject;
      option.textContent = subject;
      subjectSelect.appendChild(option);
    });
  }
}

document.getElementById("branchSelect").addEventListener("change", updateSubjects);
document.getElementById("yearSelect").addEventListener("change", updateSubjects);
document.getElementById("semSelect").addEventListener("change", updateSubjects);
function showDocuments() {
  const subject = document.getElementById("subjectSelect").value;
  const docList = document.getElementById("docList");

  docList.innerHTML = ""; // Clear previous results

  if (!subject) {
    alert("Please select a subject");
    return;
  }

  const link = docLinks[subject];

  const li = document.createElement("li");

  if (link) {
    li.innerHTML = `${subject} Paper — <a href="${link}" download>Download</a>`;
  } else {
    li.textContent = `No document available for ${subject}`;
  }

  docList.appendChild(li);
  document.getElementById("documents").style.display = "block";
}

function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("dark-mode"); // default mode
  document.getElementById("themeSwitch").checked = false;
});

