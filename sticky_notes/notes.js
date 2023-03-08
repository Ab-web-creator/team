const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach(note => {
    console.log("note", note)
    const noteElement = createNoteElement(note.id, note.content, note.numColor);
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
// let numColor;
function createNoteElement(id, content, numColor) {

        const foldercha = document.createElement("div");
        foldercha.classList.add("note");

        const subFoldercha1 = document.createElement("div");

        const subFoldercha2 = document.createElement("div");
        subFoldercha2.classList.add("subFoldercha2");

        const varaqcha = document.createElement("textarea");

        const musorka = document.createElement("img");
        musorka.src = `./sticky_notes/trash_can.svg`;
        musorka.classList.add("trash_red");

        foldercha.appendChild(subFoldercha1)
        foldercha.appendChild(subFoldercha2)
        subFoldercha1.appendChild(varaqcha)
        subFoldercha2.appendChild(musorka)

        if ((numColor >= 0) && (numColor < 10)) {
                rang_ber = "white_varaq";
        }
        if ((numColor >= 10) && (numColor < 20)) {
                rang_ber = "blue_varaq";
        }
        if ((numColor >= 20) && (numColor < 25)) {
                rang_ber = "light_red_varaq";
        }
        if ((numColor >= 25) && (numColor < 30)) {
                rang_ber = "red_varaq";
        }
        if ((numColor >= 30) && (numColor < 35)) {
                rang_ber = "green_varaq";
        }
        if ((numColor >= 35) && (numColor < 40)) {
                rang_ber = "darkgreen_varaq";
        }
        if ((numColor >= 40) && (numColor < 50)) {
                rang_ber = "purple_varaq";
        }
        if ((numColor >= 50) && (numColor < 60)) {
                rang_ber = "golden_varaq";
        }
        if ((numColor >= 60) && (numColor < 70)) {
                rang_ber = "darkBlue_varaq";
        }
        if ((numColor >= 70) && (numColor < 80)) {
                rang_ber = "darkPurple_varaq";
        }
        if ((numColor >= 80) && (numColor < 85)) {
                rang_ber = "pink_varaq";
        }
        if ((numColor >= 85) && (numColor < 90)) {
                rang_ber = "lightpink_varaq";
        }
        if ((numColor >= 90) && (numColor < 95)) {
                rang_ber = "yellow_varaq";
        }
        if ((numColor >= 95) && (numColor < 100)) {
                rang_ber = "black_varaq";
        }

        // varaqcha.classList.add("yellow_varaq");
      
        varaqcha.value = content;
        varaqcha.placeholder = "write here"
        foldercha.classList.add(rang_ber);

        varaqcha.addEventListener("change", () => {
        updateNote(id, varaqcha.value);
        })

        subFoldercha2.addEventListener("click", () => {
                const doDelete = confirm("Are you sure to delete this note?");
                if (doDelete) {
                        deleteNote(id, foldercha);
                }
        })

        return foldercha;
}




//adds a new note-ELEMENT and saves it in the LS
function addNote() {

    const notes = getNotes();
    const noteObject = {
        id: Math.floor(Math.random() * 1000000),
        content: "",
        numColor: Math.floor(Math.random() * 100)
        };

    const noteElement = createNoteElement(noteObject.id, noteObject.content, noteObject.numColor);
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