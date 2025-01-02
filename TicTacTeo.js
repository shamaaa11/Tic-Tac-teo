let boxes=document.querySelectorAll(".box");//access all boxes by class not id bcoz its multiple
let resetBtn=document.querySelector("#resetbutton");//access reset btton by its id 
let newBtn=document.querySelector("#new-btn");//access the new game button by id
let msgContainer=document.querySelector(".msg-container")//access by class
let msg=document.querySelector("#msg");//access the msg  paragraph within the msg container
let turnO=true; // turn track of player0
const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
//hen every box is clicked some action is perform , by event listener 
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        //when a box is click event lister is claled
        //console.log("Box is clicked");//when click any box a msg is shown on every click
        if(turnO){
            //if turn 0 turn true text of box is  0
            box.innerText="O";
            turnO=false;//and cahnge the turn 0 to X
        }
        else{
            box.innerText="X";//else X prints in box becoz its turn of x
            turnO=true;// m chage turn 0 to X
        }
        box.disabled=true;//it makes the  box disable if once a value is assigned in it , not allow it to rewrite or over wrriyte the value
        checkWinner();//check winning pattern function call 
    })
});


////////////////////////---------Function # 1 , for cheching the winning patterns-------//////////////////////////

// check the all winning pattern , if position1,position2,position3, have same inner text , its means it is winner
const checkWinner=()=>{
    for(let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);//display all patterns that have been checked, accessindex of every array pattern 

        // //console.log(boxes[pattern[0]],
        // boxes[pattern[1]],
        // boxes[pattern[2]]);
        // access indesex of each array and its insided subarray 

        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //    );//access indesex of each array and its insided subarray and the text value  display in the specific index box  

           //now postion/index values should store in individual for easy access and further use
           let posVal1=boxes[pattern[0]].innerText;
           let posVal2=boxes[pattern[1]].innerText;
           let posVal3=boxes[pattern[2]].innerText;

               
           if(posVal1 !="" && posVal2 != "" && posVal3 !="")//from these 3postions /boxes no one should not be epmpty
           {
            if(posVal1===posVal2 && posVal2===posVal3){
                // let winmsg=`Congratulations ${posVal1} You Are Winner`;
                // console.log(winmsg);
              
                showWinner(posVal1);//calkl function 2 that display the winning msg 
            }
           }
         }
};

///////////////////////////............FUnction#2 for winner msg -------------///////////////////////////
const showWinner = (winner)=>{//show winner 
  msg.innerText=`Congratulations!  ${winner} you are Winner`;/// cahnage inner text of msg,paragraph
  msgContainer.classList.remove("hide");//mycontainer has class list of 2 clases , where one class is hide , now remove the hide class removes from list and msg display will be allow (because in css hide class make the element msg disable ) 
  disableBoxes();//call function if someone is winner then disable yo ther boxes , game stop

}
////////----Function 3 bxes are dicadble when someone is win other blank spaces not allowed to fill-------///////////
const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
////////----Function 4 bxes are enable , for new game, alllow boxes to press-------///////////
const enableBoxes=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";//when enable , prevous text in all boxes removes
    }
  }

///////////////////////---------Function # 5, Reset the Game ----------///////////////////////////////
const resetGame=()=>{
    turnO=true;//start with turn0 that is bydeafualt in program
    enableBoxes();//boxes are allow to press,also remove text in all other boxes 
    msgContainer.classList.add("hide");//msg parapraph that is displayed for winner,is also make hide when new game is startated
}
//Event listener call the function gamerest when button newGameBtn and reset  is clicked , so add an event on this button click
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);





