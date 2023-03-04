const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach(note => {
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

// bring all the existing notes from LocalStorage into browser
function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

//saves new notes to the array in LS
function saveNotes(notes) {
     localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

//creates new note-ELEMENT 
function createNoteElement(id, content) {

 const foldercha = document.createElement("div");
 const subFoldercha1 = document.createElement("div");
 const subFoldercha2 = document.createElement("div");
 const varaqcha = document.createElement("textarea");
 const musorka = document.createElement("span");

 foldercha.appendChild(subFoldercha1)
 foldercha.appendChild(subFoldercha2)
 subFoldercha1.appendChild(varaqcha)
 subFoldercha2.appendChild(musorka)

 foldercha.classList.add("note");

 musorka.classList.add("material-symbols-outlined");
 musorka.innerHTML = "delete"

    let rndmNmbr_for_color = Math.floor((Math.random() * 10) + 1);
    console.log(rndmNmbr_for_color)

    if (rndmNmbr_for_color === 1) {
         varaqcha.classList.add("blue_varaq");
    }
    if (rndmNmbr_for_color === 2) {
         varaqcha.classList.add("gray_varaq");
    }
    if (rndmNmbr_for_color === 3) {
         varaqcha.classList.add("red_varaq");
    }
    if (rndmNmbr_for_color === 4) {
         varaqcha.classList.add("green_varaq");
    }
    if (rndmNmbr_for_color === 5) {
         varaqcha.classList.add("purple_varaq");
    }
    if (rndmNmbr_for_color === 6) {
         varaqcha.classList.add("golden_varaq");
    }
    if (rndmNmbr_for_color === 7) {
         varaqcha.classList.add("darkBlue_varaq");
    }
    if (rndmNmbr_for_color === 8) {
         varaqcha.classList.add("darkPurple_varaq");
    }
    if (rndmNmbr_for_color === 9) {
         varaqcha.classList.add("pink_varaq");
    }
    else {
         varaqcha.classList.add("note2");
    }

 varaqcha.value = content;
 varaqcha.placeholder = "пустой"

 varaqcha.addEventListener("change", () => {
    updateNote(id, varaqcha.value);
 })

 musorka.addEventListener("click", () => {
    const doDelete = confirm("Are you sure to delete this note?");
    if (doDelete) {
        deleteNote(id, foldercha);
    }
 })

 return foldercha;
}

//adds a new note-ELEMENT and saves it in the LS
function addNote(id, content) {
    const notes = getNotes();
    const noteObject = {
        id: Math.floor(Math.random() * 1000000),
        content: ""
    };

    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement, addNoteButton);

    notes.push(noteObject);
    saveNotes(notes);
}

//updates changes in the note
function updateNote(id, newContent) {
    const notes = getNotes();
    const targetNote = notes.filter(note => note.id == id)[0];

    targetNote.content = newContent;
    saveNotes(notes);
}

//deletes the note
function deleteNote(id, varaqcha) {
        const notes = getNotes().filter(note => note.id != id);
        
        saveNotes(notes);
        notesContainer.removeChild(varaqcha);
}

