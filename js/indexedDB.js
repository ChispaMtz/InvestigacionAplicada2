const indexedDB = window.indexedDB;
let form = document.getElementById('notes');



if (indexedDB) {
    var db;
    const request = indexedDB.open('noteList', 1);

    request.onsuccess = () => {
        db = request.result;
        console.log("La base de datos ha sido abierta", db);
        readData();
    }

    request.onupgradeneeded = () => {
        db = request.result;
        console.log("La base de datos se ha creado correctamente", db);
        const objectStore = db.createObjectStore('notes', {
            autoIncrement: true
        });
    }

    request.onerror = (error) => {
        db = request.result;
        console.log("Hubo un error al abrir la base de datos ", error);
    }
}

function addnote (data) {
    if (document.getElementById("note").value.trim().length == 0) {
        alert("La Nota No Puede Estar Vacía");
    } else {
        const transaction = db.transaction(['notes'], 'readwrite');
    
        const objectStore = transaction.objectStore('notes');
        const request = objectStore.add(data);
        readData();
    }
    
}

function readData () {
    const transaction = db.transaction(['notes'], 'readonly')
    const objectStore = transaction.objectStore('notes');
    const request = objectStore.openCursor();
    const fragment = document.createDocumentFragment();
    
    request.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
            const noteTitle = document.createElement('li')
            noteTitle.textContent = cursor.value.notetitle;
            fragment.appendChild(noteTitle);
            console.log(cursor.value)
            cursor.continue();
        } else {
            document.querySelector("#ol").textContent = '';
            document.querySelector("#ol").appendChild(fragment);

        }
    }
}

form.addEventListener("submit", e => {
    e.preventDefault();
    const data = {
        notetitle: e.target.note.value
    }
    addnote(data);
})
