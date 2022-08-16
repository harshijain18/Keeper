import { Note } from "./note"
import { NotesArray } from "./notesContent"


export const AllNotes = () =>{
    return NotesArray.map(x => (<Note heading = {x.heading} para = {x.para}/>))
}