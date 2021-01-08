
 let box = document.getElementsByClassName('box');
 let col = document.getElementsByClassName('column');

function costBox(e){ console.log(e)};
 function e(i) //fuction triggers the adding and removing of classes 
{
    box[i].classList.add('boxclick');  //adds boxclick class for selected box
    num=parseInt(i/2);
    col[num].classList.add('columnclick'); //adds columnclick class for selected column
    for( let j=0;(j<box.length);j++)
      {
        if(j!=i){
                  box[j].classList.remove('boxclick'); //removes boxclick class for selected box
        }  
      }

    for(let k=0;(k<col.length);k++)
      {
         if(k!=num){
                  col[k].classList.remove('columnclick'); //removes columnclick class for selected column
         }
        }

}  

 
 
