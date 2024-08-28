console.log('ok')
/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/ 

//MILESTONE 0: Creo l’array di oggetti con le informazioni fornite

const infosElement = document.getElementById('infos');

const people = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',                                      
        role: 'Office Manager',
        photo: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'img/barbara-ramos-graphic-designer.jpg ',
    }

];
/*MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto*/

console.table(people);

//MILESTONE 2:Stampare le stesse informazioni su DOM sottoforma di stringhe

//utilizzo un ciclo for per iterare nell'array
for(let i=0 ; i < people.length ; i++) {
    const person= people[i];

// Costruisco una stringa HTML per ciascun membro del team

const personInfo = `<p>
<strong>Nome:</strong> ${person.name} <br>
<strong>Ruolo:</strong> ${person.role} <br>
<strong>Foto:</strong> <br> <img src="${person.photo}" alt="Foto di ${person.name}" width="200"> 
    </p>`;


//aggiungo la stringa in pagina

infosElement.innerHTML += personInfo;

}



