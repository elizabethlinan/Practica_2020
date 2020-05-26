function llena(){
    var id=document.getElementById('id').value;
    $.ajax({
       url:"https://jsonplaceholder.typicode.com/posts",
       type:'GET',
       dataType:'Json',
       success: function(respuesta){
           var salida=$('#salida');
           
           salida.append("<br>" +respuesta[id].id+'<br>'+respuesta[id].body+ "<br>" );
       },
       
       error:function(jqXHR,textStatus,errorThown){
           console.log("Error a realizar leer los datos");
       },
       complete:function(jqXHR, textStatus){
            alert("Funcion completada");
       }
    });
}



