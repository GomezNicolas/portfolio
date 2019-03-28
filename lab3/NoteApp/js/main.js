class Note {
    constructor(title) {
        this.title = title;
        this.element = this.createElement(title);
      }

      createElement(title){
        let newNote = document.createElement('div');
        
        a.addEventListener('click', this.remove.bind(newNote));
        console.log("create element function called");
        return newNote;
      }
}

class App {
    constructor() {
        console.log("👊🏼 The Constructor!");
      
        // HINT🤩
        // clicking the button should work
        // pressing the enter key should also work
        this.btnAdd = document.querySelector("btnAddNote");
        //this.btnAdd.eventlistener("click", this.bind(this));
        this.loadNotesFromStorage();
      }

      createNote(e){
        let newNote = new Note(title); 
      }

}