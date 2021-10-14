// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderMITLicenseBadge(license) {
  return `MIT License
  Copyright (c) 2021 SowmyaNagayya

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.;`
   

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderBSD2ClauseLicense(license) {
  return `BSD 2-Clause License
  Copyright (c) 2021 SowmyaNagayya

  Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

  Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

  Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.;
  `
}

//Create a function that returns the license section of README
function renderLicenseSection(licenseType, license) {
  if(licenseType==="MIT License") {
    return renderMITLicenseBadge(license);
  } else if(licenseType==="BSD 2-Clause License") {
    return renderBSD2ClauseLicense(license);
  } else {
    return renderBoostLicense(license);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let licenses = renderLicenseSection(response.licenseType);

  let licenseIcon = '';
  switch(response.licenseType) {
    case "MIT License":
      licenseIcon = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "BSD 2-Clause License":
      licenseIcon = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    default:
      licenseIcon ='';
  }
  
  return `# ${response.projectitle}
  https://github.com/${response.username}/${response.projectitle}

  # Your-Project-Title
  ${response.projectitle}

  ## Description
  ${response.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [contributing](#Contributions)
  - [License](#license)
  - [question](#Questions)
  - [test](#tests)

  ## Installation
  The  following necessary dependencies must be  installed  to run the application ${response.installation}

  ## Usage
  In oredr to use this App ${response.usage}

  ## Contributions
  Contributers: ${response.contributing}

  ## License
  The Project is licensed under the ${response.licenseType}
  ${licenses}
  ${licenseIcon} 
    
  ## Tests
  The Following is needed to run the test: ${response.test}

  ## Questions
  Please email any questions to ${response.email} or reference my [GitHub profile](https://github.com/${response.github}).
  `;
}

module.exports = generateMarkdown;
