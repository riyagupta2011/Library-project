console.log("this is my java script");
//constructor
function Book(name,author,type)
{
   this.name=name;
   this.author=author;
   this.type=type;
}
//display constructor
function Display()
{

}

// Add method to display prototype
Display.prototype.add=function(book)
{
   console.log('i am adding');
   tableBody=document.getElementById('tablebody');
   
}
Display.prototype.clear=function()
{
    let libraryform=document.getElementById('form1');
    libraryform.reset();
}

//add submit event listener to forml1

let libraryform=document.getElementById('form1');
libraryform.addEventListener('submit',libraryformSubmit);



function libraryformSubmit(e)
{
    e.preventDefault();
    console.log("i have clicked the submit button");
    let name=document.getElementById('bname').value;
    let author=document.getElementById('aname').value;
    let type;
    let fiction=document.getElementById('fiction')
    let programming=document.getElementById('computer');
    let cooking =document.getElementById('cooking');
    if(fiction.checked)
    {
        type=fiction.value;
    }
    else if(programming.checked)
    {
        type=programming.value;
    }
    else if(cooking.checked)
    {
        type=cooking.value;
    }
   
    let book =new Book(name,author,type);
    console.log(book);
    let display=new Display();
display.add(book);-
display.clear();
e.preventDefault();
}



