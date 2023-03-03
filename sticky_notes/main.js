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
 const element = document.createElement("textarea");
//  const element_delete = document.createElement("button");
 const element_delete = document.createElement("span");

 foldercha.appendChild(subFoldercha1)
 foldercha.appendChild(subFoldercha2)
 subFoldercha1.appendChild(element)
 subFoldercha2.appendChild(element_delete)

 foldercha.classList.add("note");

//  element_delete.innerHTML = "&#x2715"
 element_delete.innerHTML = "delete"
 
//  element_delete.classList.add("testing_it");
 element_delete.classList.add("material-symbols-outlined");

 element.classList.add("note2");
 element.value = content;
 element.placeholder = "пустой"


 element.addEventListener("change", () => {
    updateNote(id, element.value);
 })

 element_delete.addEventListener("click", () => {
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
function deleteNote(id, element) {
        const notes = getNotes().filter(note => note.id != id);
        
        saveNotes(notes);
        notesContainer.removeChild(element);
}
