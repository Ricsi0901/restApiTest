class MyAjax{
    constructor(){}
 getAdat(apivegpont, tomb, myCallBack) {
      
    tomb.splice(0, tomb.length);
    $.ajax({
      url: apivegpont,
      type: "GET",
      success: function (result) {
      console.log(result);
        for (let i = 0; i < result.length; i++) {
          tomb.push(result[i]);
        }
console.log(tomb);
       

        myCallBack(tomb);
      },
    });
  }

  postAdat(apivegpont,adat) {
        
    $.ajax({
      url: apivegpont,
      type: "POST",
      data:adat,
      success: function (result) {
         console.log(result);

       

       
      },
    });
  }
  deleteAdat(apivegpont,id) {
        
    $.ajax({
      url: apivegpont+"/"+id,
      type: "DELETE",
      
      success: function (result) {
         console.log(result);

       

       
      },
    });
  }
  putAdat(apivegpont, adat, id) {
      
  
    $.ajax({
        url: apivegpont+"/"+id,
      type: "PUT",
      data:adat,
      success: function (result) {
        console.log(result);
      },
    });
  }
}