// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== '') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return "";
}


// Generates markdown for README
function generateMarkdown(data) {
       return `# ${data.title}
      \n ## Table of Contents \n
      \n-----------------------------------------\n
      \n - [Description](#description) \n
      \n - [Showcase](#link) \n
      \n - [Installation Instructions](#install)\n
      \n - [Usage Information](#usage) \n
      \n - [Licenses](#license) \n
      \n - [Contributors](#contributors) \n
      \n - [Questions?](#email) \n

      \n ## Description \n
      \n-----------------------------------------\n
      \n ${data.description}\n

      \n ## Showcase\n
      \n-----------------------------------------\n 
      \n (${data.link})\n

      \n ## Installation Instructions\n
      \n-----------------------------------------\n 
      \n ${data.install}\n

      \n ## Usage Information \n
      \n-----------------------------------------\n 
      \n  ${data.usage}\n
      \n ${data.test}\n

      \n ## License \n
      \n-----------------------------------------\n 
      \n  ${renderLicenseBadge(data.license)}\n

      \n ## Contributors\n
      \n-----------------------------------------\n 
      \n  ${data.contributors}\n

      \n ## Questions?\n
      \n-----------------------------------------\n 
      \n  My Github: [${data.username}](${data.gitlink})\n
      \n Contact Me: ${data.email} \n`   
            
};

module.exports = generateMarkdown;

