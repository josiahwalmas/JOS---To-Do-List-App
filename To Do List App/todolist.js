var submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click',func);

taskList = []

function func() {
  event.preventDefault();
  console.log("reset DOM")



  const taskDuple = [document.getElementById('task-time').value,document.getElementById('task-desc').value]

  if (taskList) { // this if loop is lowkey pointless but will be useful when doing validation later
    taskList.push(taskDuple)
    console.log('Pushed New Task to list')

  }

  const tbl = document.getElementById("task-list")

  tbl.replaceChildren() // reset generated dom elements
  
  console.log("Create Task List For Loop")

  for (let i = 0; i < taskList.length; i+=1) {
    

    const tr = create_task_row(taskList[i][0],taskList[i][1])

    tbl.appendChild(tr)
    
    
    console.log(`${i} th for loop + Create Task List For Loop`)
    
  }

  
}

function create_task_row(datetime,desc) {
  //const li = document.createElement('li')
  console.log("Add Task Function")
  
  // create elements
  const row = document.createElement("tr")
  const datetime_td = document.createElement("td")
  const desc_td = document.createElement("td")
  const status_td = document.createElement("td")

  // add datetime as first cell in row
  var datetime_text = document.createTextNode(datetime)
  datetime_td.appendChild(datetime_text)
  row.appendChild(datetime_td)

  // add desc as second cell in a row
  var desc_text = document.createTextNode(desc)
  desc_td.appendChild(desc_text)
  row.appendChild(desc_td)

  // add status as third cell in a row
  var status_text = document.createTextNode("pending")
  status_td.appendChild(status_text)
  row.appendChild(status_td)  

  console.log(row)
  
  return row
}


// xx store data in list
// xxturn list into tr
// update each list item with checkbox and delete button
// // add status as button, with function that updates it and stores status for that row item. and of course a delete button that removes element

// store in local storage
/* format table with this: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table */
// make min and default datetime automate to now
// input validation mayb
// styling