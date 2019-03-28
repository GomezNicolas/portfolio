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