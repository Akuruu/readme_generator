// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // link for building the badge
  // `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  if (license !== None) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== None) {
    return `\n * [License](#) \n`
  }
  return "";
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license !== None) {
    return `## License
    
    this project is licensed under ${license}.`
  }
  return "";
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
            \n ## Table of Contents \n
            \n-----------------------------------------\n
          \n - [Description](#description) \n
          \n - [Showcase](#link) \n
          \n - [Installation Instructions](#install\n
          \n - [Usage Information](#usage) \n
          \n - [Licenses](#license) \n
          \n - [Contributors](#contributors) \n
          \n - [Questions?](#username) \n

           \n ## Description \n
           \n-----------------------------------------\n
           \n ${data.description}\n

           \n ## Showcase\n
           \n-----------------------------------------\n 
           \n ![alt text](${data.link})\n

         \n ## Installation Instructions\n
         \n-----------------------------------------\n 
         \n ${data.install}\n

           \n ## Usage Information \n
           \n-----------------------------------------\n 
           \n  ${data.usage}\n

          \n  ## Licenses \n
          \n-----------------------------------------\n 
          \n ${data.license}\n

            \n ## Contributors\n
            \n-----------------------------------------\n 
            \n - [${data.contributors}]()\n

            \n ## Questions?\n
            \n-----------------------------------------\n 
           \n  My Github: [${data.username}](${data.gitlink})\n
            \n Contact Me: ${data.email} \n`
};


module.exports = generateMarkdown;

