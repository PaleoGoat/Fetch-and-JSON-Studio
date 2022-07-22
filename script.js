// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
       response.json().then(json => {
        
        const div = document.getElementById('container');
        for (let i=0; i<json.length; i++)
        div.innerHTML += `
        <div class="astronaut">
        <div class="bio">
        <h3>${json[i].firstName} ${json[i].lastName}</h3>
        <ul>
        <li>Hours in Space: ${json[i].hoursInSpace}</li>
        <li>Active: ${json[i].active}</li>
        <li>Skills ${json[i].skills}</li>
        </ul>        
        </div>
        <img class="avatar" src=${json[i].picture}>
        </div>
        `
          // Add HTML that includes the JSON data

          });
       });
    });




 /*

           for (let i=0; i< 7; i++) {
            astronautArr = json[i].push(id);
            };


            div.innerHTML = `
            <ul>
               <li>First Name ${json[i][j]}</li>
            </ul>
            `;

<div class="astronaut">
   <div class="bio">
      <h3>Mae Jemison</h3>
      <ul>
         <li>Hours in space: 190</li>
         <li>Active: false</li>
         <li>Skills: Physician, Chemical Engineer</li>
      </ul>
   </div>
   <img class="avatar" src="images/mae-jemison.jpg">
</div>
 */