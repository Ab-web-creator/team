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
let numColor;
function createNoteElement(id, content, numColor) {

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
 varaqcha.classList.add("yellow_varaq");

 musorka.classList.add("material-symbols-outlined");
 musorka.innerHTML = "delete"

    if ((numColor >= 0) && (numColor < 10)) {
        numColor = "white_varaq";
    }
    if ((numColor >= 10) && (numColor < 20)) {
        numColor = "blue_varaq";
    }
    if ((numColor >= 20) && (numColor < 25)) {
        numColor = "light_red_varaq";
    }
    if ((numColor >= 25) && (numColor < 30)) {
        numColor = "red_varaq";
    }
    if ((numColor >= 30) && (numColor < 35)) {
            numColor = "green_varaq";
    }
    if ((numColor >= 35) && (numColor < 40)) {
            numColor = "darkgreen_varaq";
    }
    if ((numColor >= 40) && (numColor < 50)) {
            numColor = "purple_varaq";
    }
    if ((numColor >= 50) && (numColor < 60)) {
            numColor = "golden_varaq";
    }
    if ((numColor >= 60) && (numColor < 70)) {
            numColor = "darkBlue_varaq";
    }
    if ((numColor >= 70) && (numColor < 80)) {
            numColor = "darkPurple_varaq";
    }
    if ((numColor >= 80) && (numColor < 85)) {
            numColor = "pink_varaq";
    }
    if ((numColor >= 85) && (numColor < 90)) {
            numColor = "lightpink_varaq";
    }
    if ((numColor >= 90) && (numColor < 95)) {
            numColor = "yellow_varaq";
    }
    if ((numColor >= 95) && (numColor < 100)) {
            numColor = "black_varaq";
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

 varaqcha.classList.add(numColor);
 console.log(numColor)

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


// another part

// const word_color_notes = document.querySelector(".headerga");
// const rang_palette = document.querySelector(".rang_palette");

// word_color_notes.addEventListener('click', function() {
//     console.log("Ishladimi?")
//     rang_palette.classList.toggle("display_none")
//  });



// const element = document.querySelectorAll('ul li');
// const list = [];

// document.body.classList.add(localStorage.getItem('color'));

// element.forEach(e => {
//     list.push(e.getAttribute('data-color'));

//     e.addEventListener('click', function() {
//         document.body.classList.remove(...list);
//         document.body.classList.add(this.getAttribute('data-color'));
//         localStorage.setItem('color', this.getAttribute('data-color'))
//     });
// });