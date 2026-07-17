
// ===============================
// INITIALISATION DES DONNEES
// ===============================

let patients = JSON.parse(localStorage.getItem("patients")) || [];

let rendezvous = JSON.parse(localStorage.getItem("rendezvous")) || [];

let dossiers = JSON.parse(localStorage.getItem("dossiers")) || [];



// ===============================
// GESTION DES PATIENTS
// ===============================


let patientForm = document.getElementById("patientForm");


if(patientForm){


patientForm.addEventListener("submit",function(e){


e.preventDefault();



let patient = {


nom : document.getElementById("nom").value,

postnom : document.getElementById("postnom").value,

prenom : document.getElementById("prenom").value,

sexe : document.getElementById("sexe").value,

age : document.getElementById("age").value,

telephone : document.getElementById("telephone").value,

adresse : document.getElementById("adresse").value


};



patients.push(patient);



localStorage.setItem(
"patients",
JSON.stringify(patients)
);



afficherPatients();


this.reset();


});


}




function afficherPatients(){


let liste = document.getElementById("listePatients");


if(!liste) return;



liste.innerHTML="";



patients.forEach(function(p,index){



let ligne = document.createElement("tr");



ligne.innerHTML = `

<td>${index+1}</td>

<td>${p.nom}</td>

<td>${p.postnom}</td>

<td>${p.prenom}</td>

<td>${p.sexe}</td>

<td>${p.age}</td>

<td>${p.telephone}</td>

<td>${p.adresse}</td>

<td>

<button onclick="supprimerPatient(${index})">
Supprimer
</button>

</td>

`;



liste.appendChild(ligne);



});


mettreAJourDashboard();


}




function supprimerPatient(index){


patients.splice(index,1);



localStorage.setItem(
"patients",
JSON.stringify(patients)
);



afficherPatients();


}




// ===============================
// GESTION DES RENDEZ-VOUS
// ===============================



let rdvForm = document.getElementById("rdvForm");



if(rdvForm){


rdvForm.addEventListener("submit",function(e){


e.preventDefault();



let rdv = {


patient :

document.getElementById("patientRdv").value,


date :

document.getElementById("dateRdv").value,


heure :

document.getElementById("heureRdv").value,


service :

document.getElementById("serviceRdv").value


};



rendezvous.push(rdv);



localStorage.setItem(
"rendezvous",
JSON.stringify(rendezvous)
);



afficherRdv();



this.reset();


});


}





function afficherRdv(){


let liste = document.getElementById("listeRdv");


if(!liste) return;



liste.innerHTML="";



rendezvous.forEach(function(r,index){


let ligne=document.createElement("tr");



ligne.innerHTML=`

<td>${index+1}</td>

<td>${r.patient}</td>

<td>${r.date}</td>

<td>${r.heure}</td>

<td>${r.service}</td>

<td>

<button onclick="supprimerRdv(${index})">

Supprimer

</button>

</td>

`;



liste.appendChild(ligne);


});



mettreAJourDashboard();


}




function supprimerRdv(index){


rendezvous.splice(index,1);



localStorage.setItem(
"rendezvous",
JSON.stringify(rendezvous)
);



afficherRdv();


}






// ===============================
// GESTION DES DOSSIERS MEDICAUX
// ===============================



let dossierForm=document.getElementById("dossierForm");



if(dossierForm){


dossierForm.addEventListener("submit",function(e){


e.preventDefault();



let dossier={


patient :

document.getElementById("patientDossier").value,


groupe :

document.getElementById("groupeSanguin").value,


antecedents :

document.getElementById("antecedents").value,


diagnostic :

document.getElementById("diagnostic").value,


traitement :

document.getElementById("traitement").value,


observation :

document.getElementById("observation").value


};



dossiers.push(dossier);



localStorage.setItem(
"dossiers",
JSON.stringify(dossiers)
);



afficherDossiers();



this.reset();



});


}






function afficherDossiers(){


let liste=document.getElementById("listeDossiers");


if(!liste) return;



liste.innerHTML="";



dossiers.forEach(function(d,index){



let ligne=document.createElement("tr");



ligne.innerHTML=`

<td>${index+1}</td>

<td>${d.patient}</td>

<td>${d.groupe}</td>

<td>${d.diagnostic}</td>

<td>${d.traitement}</td>

<td>

<button onclick="supprimerDossier(${index})">

Supprimer

</button>

</td>

`;



liste.appendChild(ligne);



});



mettreAJourDashboard();


}





function supprimerDossier(index){


dossiers.splice(index,1);



localStorage.setItem(
"dossiers",
JSON.stringify(dossiers)
);



afficherDossiers();


}





// ===============================
// TABLEAU DE BORD
// ===============================



function mettreAJourDashboard(){



let nbPatients=document.getElementById("nbPatients");

let nbRdv=document.getElementById("nbRdv");

let nbDossiers=document.getElementById("nbDossiers");



if(nbPatients)

nbPatients.innerHTML=patients.length;



if(nbRdv)

nbRdv.innerHTML=rendezvous.length;



if(nbDossiers)

nbDossiers.innerHTML=dossiers.length;


}



// ===============================
// AFFICHAGE AU CHARGEMENT
// ===============================


afficherPatients();

afficherRdv();

afficherDossiers();

mettreAJourDashboard();