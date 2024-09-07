"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getResumeData() {
    const name = document.getElementById('name').innerText;
    const email = document.getElementById('email').innerText;
    const phone = document.getElementById('phone').innerText;
    const education = document.getElementById('education').innerText;
    const skills = document.getElementById('skills').innerText;
    const experience = document.getElementById('experience').innerText;
    return { name, email, phone, education, skills, experience };
}
function saveResume() {
    const resumeData = getResumeData();
    localStorage.setItem('editableResume', JSON.stringify(resumeData));
    alert('Resume saved!');
}
function loadResume() {
    const savedResume = localStorage.getItem('editableResume');
    if (savedResume) {
        const resumeData = JSON.parse(savedResume);
        document.getElementById('name').innerText = resumeData.name;
        document.getElementById('email').innerText = resumeData.email;
        document.getElementById('phone').innerText = resumeData.phone;
        document.getElementById('education').innerText = resumeData.education;
        document.getElementById('skills').innerText = resumeData.skills;
        document.getElementById('experience').innerText = resumeData.experience;
    }
}
const saveButton = document.getElementById('saveButton');
if (saveButton) {
    saveButton.addEventListener('click', saveResume);
}
window.onload = loadResume;
