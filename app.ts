
const form = document.getElementById('resumeForm') as HTMLFormElement;
const profileImageInput = document.getElementById('profileImage') as HTMLInputElement;
const resumeImage = document.getElementById('resume-image') as HTMLImageElement;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Personal Information
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const age = (document.getElementById('age') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;

  // Skills
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

  // Education
  const education1 = (document.getElementById('education1') as HTMLInputElement).value;
  const education2 = (document.getElementById('education2') as HTMLInputElement).value;
  const institute1 = (document.getElementById('institute1') as HTMLInputElement).value;
  const institute2 = (document.getElementById('institute2') as HTMLInputElement).value;

  // Work Experience
  const company1 = (document.getElementById('company1') as HTMLInputElement).value;
  const position1 = (document.getElementById('position1') as HTMLInputElement).value;
  const duration1 = (document.getElementById('duration1') as HTMLInputElement).value;
  const responsibilities1 = (document.getElementById('responsibilities1') as HTMLTextAreaElement).value.split(',');

  const company2 = (document.getElementById('company2') as HTMLInputElement).value;
  const position2 = (document.getElementById('position2') as HTMLInputElement).value;
  const duration2 = (document.getElementById('duration2') as HTMLInputElement).value;
  const responsibilities2 = (document.getElementById('responsibilities2') as HTMLTextAreaElement).value.split(',');

  // Display Data on Resume

  // Personal Info
  (document.getElementById('display-name') as HTMLElement).textContent = name;
  (document.getElementById('display-name-info') as HTMLElement).textContent = name;
  (document.getElementById('display-age') as HTMLElement).textContent = age;
  (document.getElementById('display-email') as HTMLElement).textContent = email;
  (document.getElementById('display-phone') as HTMLElement).textContent = phone;

  // Skills
  const skillsList = document.getElementById('display-skills') as HTMLElement;
  skillsList.innerHTML = '';
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill.trim();
    skillsList.appendChild(li);
  });

  // Education
  (document.getElementById('display-education1') as HTMLElement).textContent = education1;
  (document.getElementById('display-education2') as HTMLElement).textContent = education2;
  (document.getElementById('display-institute1') as HTMLElement).textContent = institute1;
  (document.getElementById('display-institute2') as HTMLElement).textContent = institute2;

  // Work Experience 1
  (document.getElementById('display-company1') as HTMLElement).textContent = company1;
  (document.getElementById('display-position1') as HTMLElement).textContent = position1;
  (document.getElementById('display-duration1') as HTMLElement).textContent = duration1;

  const responsibilitiesList1 = document.getElementById('display-responsibilities1') as HTMLElement;
  responsibilitiesList1.innerHTML = '';
  responsibilities1.forEach(res => {
    const li = document.createElement('li');
    li.textContent = res.trim();
    responsibilitiesList1.appendChild(li);
  });

  // Work Experience 2
  (document.getElementById('display-company2') as HTMLElement).textContent = company2;
  (document.getElementById('display-position2') as HTMLElement).textContent = position2;
  (document.getElementById('display-duration2') as HTMLElement).textContent = duration2;

  const responsibilitiesList2 = document.getElementById('display-responsibilities2') as HTMLElement;
  responsibilitiesList2.innerHTML = '';
  responsibilities2.forEach(res => {
    const li = document.createElement('li');
    li.textContent = res.trim();
    responsibilitiesList2.appendChild(li);
  });

  // Handle Image Upload
  if (profileImageInput.files && profileImageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      resumeImage.src = e.target!.result as string;
    };
    reader.readAsDataURL(profileImageInput.files[0]);
  }
});





declare const jsPDF: any;

function cvprint() {
    
    const doc = new jsPDF();

    
    const resume = document.getElementById('resume') as HTMLElement;

    doc.html(resume, {
        callback: function (pdf) {
            pdf.save('resume.pdf');
        },
        x: 10,
        y: 10,
    });
}

// Add event listener for the button
document.getElementById('downloadBtn')?.addEventListener('click', cvprint);