const indexedDB = window.indexedDB;

if (indexedDB) {
    let db;
    const request = indexedDB.open('taskList', 1);

    request.onsuccess = () => {
        db = request.result;
        alert("La base de datos ha sido abierta");
    }

    request.onupgradeneeded = () => {
        db = request.result;
        alert("La base de datos se ha creado correctamente");
        const objectStore = db.createObjectStore('tasks');
    }

    request.onerror = (error) => {
        db = request.result;
        alert("Hubo un error al abrir la base de datos ", error);
    }
}
