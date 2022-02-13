function validar() 
{
  var texto = document.miForm.q.value; 


	  	if(texto.match(/^[A-Za-z]*$/))
		{ 
		   	  if(texto.length>2 && texto.length<6)
		      {
		    		return true;
		      } 

		      else
		      {
		      	 text = document.getElementById('mensaje');
		      	 text.innerHTML = "<span style='color:orange'>Sólo se pueden buscar palabras entre 3 y 5 caracteres</span>";
		      	 difuminar(text);
		      	 return false;
		      }	
	   }
}
