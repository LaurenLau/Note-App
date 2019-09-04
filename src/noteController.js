  // Creating a new List:
  var list = new NoteList
  // Adding new notes:
  list.add('first')
  list.add('second')
  list.add('third')

  // Creating a new View:
  var view = new NoteListView(list)

  // Injecting into the app div above:
  window.onload = function what(){
  document.getElementById("app").innerHTML = view.convert()
  };