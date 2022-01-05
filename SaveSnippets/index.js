var notesList=[];

saveNote = (noteText) => {
    let dt = new Date();
    let date = dt.toDateString();
    let time = dt.toTimeString().split(' ')[0];

    let note = { dateTime : date +' '+ time, text: noteText}
    notesList.push(note);
}

function clicked(event){
    if(event.which == 13){
        let field = document.getElementById('inputField');
        let noteText = field.value;
        if(noteText){
            saveNote(noteText);
            field.value='';
            printNotesToTable();
        }
        console.log(notesList);
    }
}

function printNotesToTable(){
    let tableData='';
    notesList.forEach(element => {
        tableData += '<tr><td>' + element.dateTime + '</td><td>'+ element.text +'</td></tr>';
    });
    document.getElementById('tableBody').innerHTML = tableData;
}
