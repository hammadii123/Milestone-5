var _a;
var form = document.getElementById('resumeForm');
var profileImageInput = document.getElementById('profileImage');
var resumeImage = document.getElementById('resume-image');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Personal Information
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    // Skills
    var skills = document.getElementById('skills').value.split(',');
    // Education
    var education1 = document.getElementById('education1').value;
    var education2 = document.getElementById('education2').value;
    var institute1 = document.getElementById('institute1').value;
    var institute2 = document.getElementById('institute2').value;
    // Work Experience
    var company1 = document.getElementById('company1').value;
    var position1 = document.getElementById('position1').value;
    var duration1 = document.getElementById('duration1').value;
    var responsibilities1 = document.getElementById('responsibilities1').value.split(',');
    var company2 = document.getElementById('company2').value;
    var position2 = document.getElementById('position2').value;
    var duration2 = document.getElementById('duration2').value;
    var responsibilities2 = document.getElementById('responsibilities2').value.split(',');
    // Display Data on Resume
    // Personal Info
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-name-info').textContent = name;
    document.getElementById('display-age').textContent = age;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-phone').textContent = phone;
    // Skills
    var skillsList = document.getElementById('display-skills');
    skillsList.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
    // Education
    document.getElementById('display-education1').textContent = education1;
    document.getElementById('display-education2').textContent = education2;
    document.getElementById('display-institute1').textContent = institute1;
    document.getElementById('display-institute2').textContent = institute2;
    // Work Experience 1
    document.getElementById('display-company1').textContent = company1;
    document.getElementById('display-position1').textContent = position1;
    document.getElementById('display-duration1').textContent = duration1;
    var responsibilitiesList1 = document.getElementById('display-responsibilities1');
    responsibilitiesList1.innerHTML = '';
    responsibilities1.forEach(function (res) {
        var li = document.createElement('li');
        li.textContent = res.trim();
        responsibilitiesList1.appendChild(li);
    });
    // Work Experience 2
    document.getElementById('display-company2').textContent = company2;
    document.getElementById('display-position2').textContent = position2;
    document.getElementById('display-duration2').textContent = duration2;
    var responsibilitiesList2 = document.getElementById('display-responsibilities2');
    responsibilitiesList2.innerHTML = '';
    responsibilities2.forEach(function (res) {
        var li = document.createElement('li');
        li.textContent = res.trim();
        responsibilitiesList2.appendChild(li);
    });
    // Handle Image Upload
    if (profileImageInput.files && profileImageInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            resumeImage.src = e.target.result;
        };
        reader.readAsDataURL(profileImageInput.files[0]);
    }
});
function cvprint() {
    var doc = new jsPDF();
    var resume = document.getElementById('resume');
    doc.html(resume, {
        callback: function (pdf) {
            pdf.save('resume.pdf');
        },
        x: 10,
        y: 10,
    });
}
// Add event listener for the button
(_a = document.getElementById('downloadBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', cvprint);
