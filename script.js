$(function () {
    const aktAdat=[]
  const myAjax = new MyAjax();
  const konyvek = [];
  const szuloelem = $("#megjelenit");

  let apivegpont = "http://localhost:3000/konyvek";
  let szuro = "?tipus=regény";
  let rendezes = "?_sort=ar&_order=desc";

  //apivegpont+=szuro;
  //
  console.log(apivegpont);
  myAjax.getAdat(apivegpont, konyvek, kiir);
  $("#keresSzoveg").on("keyup", () => {
    let apivegpont = "http://localhost:3000/konyvek";
    apivegpont += "?q=" + $("#keresSzoveg").val();
    console.log(apivegpont);

    myAjax.getAdat(apivegpont, konyvek, kiir);
  });
  $("#rendezes").on("click", () => {
    apivegpont += rendezes;
    myAjax.getAdat(apivegpont, konyvek, kiir);
  });
  $("#torol").on("click", () => {
    
    myAjax.deleteAdat(apivegpont, 1);
  });
  $("#ujAdat").on("click", () => {
    let ujAdat = {
        szerzo: $("#szerzo").val(),
        cim: $("#cim").val(),
        ar: $("#ar").val(),
        tipus: $("#tipus").val(),
      };
    
    myAjax.postAdat(apivegpont,ujAdat);
    myAjax.getAdat(apivegpont, konyvek, kiir);
  });
  $("#modosit").on("click", () => {
    let ujAdat = {
        id: "2",
        szerzo: $("#szerzo").val(),
        cim: $("#cim").val(),
        ar: $("#ar").val(),
        tipus: $("#tipus").val(),
      };
    
    myAjax.putAdat(apivegpont,ujAdat,2);
    myAjax.getAdat(apivegpont, konyvek, kiir);
  });
  $("#megjelenit").on("click", ".adatBetolt",function() {
        console.log($(this).attr("data-id"));
        let Id=Number($(this).attr("data-id"));
        let apivegpont = "http://localhost:3000/konyvek/"+Id;
        console.log(apivegpont)
myAjax.getAdat(apivegpont,aktAdat,urlapBetolt)
       //  $("#szerzo").val()=esmeny.szerzo;
       //  $("#cim").val()=esmeny.cim;
       // $("#ar").val()=esmeny.ar;
       //  $("#tipus").val()=esmeny.tipus;
    
  
  });

function urlapBetolt(tomb){
    console.log(tomb)
}
  function kiir(tomb) {
    let sablon = "";
    tomb.forEach((elem) => {
      sablon += `
            <div >
            <h3>${elem.szerzo}</h3>
            <h4 class="cim">
            ${elem.cim}
            </h4>
            <p>${elem.tipus}</p>
            
            <span class="ar" >${elem.ar}</span>
            <td><button class='adatBetolt' data-id="${elem.id}" >modositas</button></td>
            </div>`;
    });
    szuloelem.html(sablon);
  }
});
