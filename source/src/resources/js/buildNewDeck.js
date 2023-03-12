
  //drop down/display dependent on user input 
  function formAdd(id, toggle)
  {
      if(toggle===0)
      {
          document.getElementById(id).style.visibility="hidden";
          document.getElementById(id).style.height = toggle;
      }
      if(toggle===1)
      {
          document.getElementById(id).style.visibility="visible";
          document.getElementById(id).style.height = "auto";
      }
  }


function validateForm() {
    var a = document.forms["Form"]["username"].value;
    var b = document.forms["Form"]["deck_name"].value;
    var c = document.forms["Form"]["text_input"].value;
    
    if (a == null || a == "", b == null || b == "", c == null || c == "") {
      alert("Please Fill All Required Field");
      return false;
    }
  }
