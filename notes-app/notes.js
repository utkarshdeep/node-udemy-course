const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const addNote = (title, body) => {
    const notes = loadNotes()

    // this will look through all elements of array, but for our use case finding that first duplicate would suffice
    const duplicateNotes = notes.filter(note => note.title === title)

    // this is will give us the first duplicate & then exit
    const duplicateNote = notes.find(note => note.title === title)

    // logic using the duplicateNotes -- NOT RECOMMNEDED
    /* if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    } */

    // added for app debugging which integrates with chorme V8 engine.
    // To activate it, run `node inspect <rest-of-the-command>`
    // Go to Chrome address: chrome://inspect
    // run `restart` at the debug console prompt to start it again
    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter(note => note.title !== title)

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse('No note found!'));
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'));
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your notes'))
    notes.forEach(note => console.log(note.title));
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToBeRead = notes.find(note => note.title === title)

    if (noteToBeRead) {
        console.log(chalk.inverse(noteToBeRead.title))
        console.log(noteToBeRead.body)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const saveNotes = (notes) => {
    const saveNotesJSONString = JSON.stringify(notes)
    fs.writeFileSync('notes.json', saveNotesJSONString)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}