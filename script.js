let todo=[
  {
    item:"Studying Django for deployment",
    date:"24/05/2024"
  },
  {
    item:"Completing my movie recommendation project",
    date:"27/05/2024"
  },
  {
    item:"Deploy my machine learning project",
    date:"2/06/2024"
  }
];

// localStorage.setItem("todo",JSON.stringify(todo));

function addItem()
{
   const Text=document.getElementById('Work');
   const Date1=document.getElementById('date');
   const work=Text.value;
   const w=Date1.value;
   if(work=='')
    {
      alert("Please enter the task that you intend to do in the future !")
    }
  else if(w=='')
    {
      alert("Please enter the date of the task you intend to do !")
    }
    else
    {
      todo.push({item:work, date:w});
   localStorage.setItem("todo",JSON.stringify(todo));
   displayitems();
   Text.value='';
   Date1.value='';
    }
   
   
}

function displayitems()
{
  todo = JSON.parse(localStorage.getItem("todo"));
  const container=document.querySelector('.Todo-items');
  let newtext='';
  for(let i=0;i<todo.length;i++)
    {
      
     newtext+=`<span>${todo[i].item}</span> <span>${todo[i].date}</span>              <button id="Delete" onclick="deleteitem(${i}); displayitems();">Delete</button>`;
    }
    container.innerHTML=newtext;
}

function deleteitem(j)
{
  todo.splice(j,1);
  localStorage.setItem("todo",JSON.stringify(todo));
}
displayitems();
localStorage.setItem("todo",JSON.stringify(todo));





