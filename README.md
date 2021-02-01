# DSC-node-api

Acest api poate sa stocheze albume si artisti. Fiecare album are 1 sau mai multi artisti care l-au compus. Pentru a face operatii trebuie sa iti creezi un cont si sa fii autentificat. 

# Exemple de rute

POST: http://127.0.0.1:1080/auth/login <br>
Body: {
    "username": "nume",
    "password": "parola"
}

POST: http://127.0.0.1:1080/auth/register <br>
Body: {
    "username": "nume",
    "password": "parola",
}

POST: http://127.0.0.1:1080/artists <br>
Body: {
    "first_name": "IonIon",
    "last_name": "IonLast",
    "birth_date": 907233000
}<br>
Creeaza un artist.

GET: http://127.0.0.1:1080/artists <br>
Returneaza toti artistii.

GET: http://127.0.0.1:1080/artists/:id <br>
Returneaza artistul cu id-ul respectiv.

POST: http://127.0.0.1:1080/albums <br>
Body: {
    "name": "Album namedaaddaa",
    "release_date": 843784737,
    "artists": [
        "5ff7402fadcdbf1122226b6b"
    ]
} <br>
Adauga un album.

GET: http://127.0.0.1:1080/albums <br>
Returneaza toate albumele.

GET:  http://127.0.0.1:1080/albums/:id <br>
Returneaza albumul cu id-ul respectiv. 
