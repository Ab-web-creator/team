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
 const element = document.createElement("textarea");

 element.classList.add("note");
 element.value = content;
 element.placeholder = "empty sticky note"

 element.addEventListener("change", () => {
    updateNote(id, element.value);
 })
 element.addEventListener("dblclick", () => {
    const doDelete = confirm("Are you sure to delete this note?");

    if (doDelete) {
        deleteNote(id, element);
    }

 })

 return element;
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

//updates changes in the note
function deleteNote(id, element) {
    const notes = getNotes().filter(note => note.id != id);
     
    saveNotes(notes);
    notesContainer.removeChild(element);
}