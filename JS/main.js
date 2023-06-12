// JS LINK RUN CHECK
console.log('JS run as well!');

// RECUPERARE GLI ELEMENTI DESIDERATI DAL DOM
const displayTeam = document.getElementById('display-team');

// CREARE UN ARRAY DI OBJECTS CON LE INFO: NOME, RUOLO E FOTO
const teamMembers = [
    {
        // #1
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        // #2
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        // #3
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'img/walter-gordon-office-manager.jpg'
    },
    {
        // #4
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        // #5
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        // #6
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    },
]
// STAMPARE IN CONSOLE L'INTERO ARRAY DI OBJECTS
console.table(teamMembers);

// STAMPARE IN PAGINA L'INTERO ARRAY DI OBJECTS USANDO BOOTSTRAP PER OGNI MEMBRO
teamMembers.forEach((member) => {
    // COL
    const col = document.createElement('div');
    col.classList.add('col-4');
  
    // CARD
    const card = document.createElement('div');
    card.classList.add('card');
  
    // CARD-IMG-TOP
    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = member.picture;
  
    // CARD-BODY
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
  
    // CARD-TITLE
    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = member.name;
  
    // CARD-TEXT
    const role = document.createElement('p');
    role.classList.add('card-text');
    role.textContent = member.role;
  
    // APPENDCHILD DEGLI ELEMENTI CREATI
    cardBody.appendChild(title);
    cardBody.appendChild(role);
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
  
    // APPENDCHILD DELLE COLONNE AL displayTeam
    displayTeam.appendChild(col);
  });