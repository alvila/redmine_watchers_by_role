//WARNING: Prototype inside!
//TODO: move it to Jquery when Redmine migrates...

//Replacement for document.getElementsByName
//see: https://prototype.lighthouseapp.com/projects/8886/tickets/637-documentgetelementsbyname-method
function $N(element) {
  if (typeof element == 'string')
    element = document.getElementsByName(element);
  return Element.extend(element);
}

function watchersCheckAll(name) {
  boxes = $N(name)
  for (i = 0; i < boxes.length; i++)
    boxes[i].checked = true;
  return false;
}

function watchersUncheckAll(name) {
  boxes = $N(name)
  for (i = 0; i < boxes.length; i++)
    boxes[i].checked = false;
  return false;
}

function watchersCheckSome(name) {
  var selected_values=$('watcher_multiple_role').options[$('watcher_multiple_role').selectedIndex].value.split(',');
  boxes = $N(name)
  for (i = 0; i < boxes.length; i++) {
    for (j = 0; j < selected_values.length; j++) {
      if(boxes[i].value == selected_values[j]) boxes[i].checked = true;
    }
  }
  return false;
}

function watchersUncheckSome(name) {
  var selected_values = $('watcher_multiple_role').options[$('watcher_multiple_role').selectedIndex].value.split(',');
  boxes = $N(name)
  for (i = 0; i < boxes.length; i++) {
    for (j = 0; j < selected_values.length; j++) {
      if(boxes[i].value == selected_values[j]) boxes[i].checked = false;
    }
  }
  return false;
}
