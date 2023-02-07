const form = document.getElementById('informationForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const personName = document.getElementById('name').value;
  const personNumber = document.getElementById('number').value;
  console.log(personName + ' ' + personNumber);

  fetch('https://data.mongodb-api.com/app/data-pnruw/endpoint/save', {
    method: 'POST',
    headers: { 
      'X-API-KEY': 'vuNJ8T3zxvGDRdxjEOH0WJBTgXGgi55tHsAKGQ8hNhvr1W4LFnO8smhcbdfW8EjF',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "dataSource": "comments",
      "database": "leads",
      "collection": "users",
      "document": {
        "name": personName,
        "number": personNumber
      }
    })
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch(error => console.error(error));
});