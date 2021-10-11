var bill = document.querySelector("#b1")
var cash = document.querySelector("#n1")
var calculate = document.querySelector("#c1")
//var tens = document.querySelector("#ten")
var Notes = document.querySelectorAll("#Notes")
var output = document.querySelector("#o1")


c1.addEventListener("click", function clickhandler()
{
  
    console.log("button is clciked")
    calculate12()
})


function calculate12()
{
    var notes = [2000,500,100,50,10,5,1]
    //console.log(notes[0])
    var a = bill.value
  //  console.log(a)
    var b = cash.value
    //console.log(b)
    var count = 0
    var sum =   b-a
    console.log(sum)
    if(b>0)
    {      
        if(b>=a)
        {
          //  sum = cash.value-bill.value
            change(sum)
        }
        else
        {   
            output.innerHTML = ("bill ibvalid")
        } 
              
    }
    else
        {
            output.innerHTML = ("bill valid")
        }
 

    function change(sum)
    {
        for(i=0;i<notes.length;i++)
        {
        //var sum =   a - b
        var trun = Math.trunc(sum/notes[i])
                console.log(trun)
         sum = sum%notes[i]
       console.log(sum)
             Notes[i].innerText = trun;
        }
    }
}

