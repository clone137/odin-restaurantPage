const content = document.getElementById('content');

let header = document.createElement('div');
header.id = 'header';
header.innerHTML = `
<h1>
  Restaurant Page
</h1>
`;

let main = document.createElement('div');
main.id = 'main';
main.innerHTML = `
<div class="post">
  <h2>Great food and quaint restaurant</h2>
  <h3>The food was EXCELLENT and the service was good. Its a small little restaurant with an authentic feel but it is well worth the visit. This place has now became our favourite indian food scene in the Cape town area.</h3>
  <h3>Date of visit: April 2022</h3>
</div>

<div class="post">
  <h2>This is not the same place advertised on the internet</h2>
  <h3>We booked a table and were shocked to find a tiny shabby looking place that is not at all what is shown over the internet. It is definately not the same place and the food is nothing special at all. They dont even have a liquor license and you can only order cold drinks. Our first thought was to leave but we stayed out of pure decency. What a huge dissapointment.</h3>
  <h3>Date of visit: January 2022</h3>
</div>

<div class="post">
  <h2>New premises</h2>
  <h3>It seems this is a new venue that pales in comparison to the previous one. Covid victim. Food I had was great, would go again.</h3>
  <h3>Date of visit: December 2021</h3>
</div>

<div class="post">
  <h2>Not so hot</h2>
  <h3>After a recent insert on KFM about the restaurant i was quite hyped to visit it, especially being a fan of indian cuisine. However I was quite disappointed when we arrived there, very limited space inside, tables were dirty as well as the glasses we received. The food was mediocre for the price we payed. Also very poor ventilation. Overall not a great experience.</h3>
  <h3>Date of visit: October 2021</h3>
</div>
`;

let footer = document.createElement('div');
footer.id = 'footer';
footer.innerHTML = `
<h3>
  Copyright © 2022<a href="https://github.com/clone137">&nbsp;<span class="fab fa-github"></span> / clone137</a>
</h3>
<h3>
  <strong>Credits:</strong> Background Photo by <a href="https://unsplash.com/es/@kazizayane?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Zakaria Zayane</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
</h3>
`;

function addHeader () {
  content.appendChild(header);
}

function addMain () {
  content.appendChild(main);
}

function addFooter () {
  content.appendChild(footer);
}

export { addHeader, addMain, addFooter };
