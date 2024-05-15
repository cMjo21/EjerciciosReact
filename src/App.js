import './App.css';
import { useRef } from 'react';
import { useState } from 'react';

const App=()=>{

const [value, setValue]= useState();
return<div>
  <input type='text'onChange={e=>setValue(e.target.value)}/>
  {value}
</div>

}




/* 
const App =()=>{


  const anchoRef = useRef(); 
  const altoRef= useRef();
  const [superficie, setSuperficie]=useState(); 

  const calcularSup=()=>{
    const anchoValue = anchoRef.current.value;
    const altoValue = altoRef.current.value
    setSuperficie(anchoValue*altoValue);
   }

return<div>
<input type ="text" ref={anchoRef}/>
<input type ="text" ref={altoRef}/>
<button onClick={calcularSup}>Enviar</button>
<p>{superficie}</p>
</div>


}
 */




/* const App =()=>{

  const[select, setSelect]=useState('')


  const  Animal_images={
    img1: "\u26a1",
    img2: "	\ud83d\ude00",
    img3: "\ud83d\ude97"
  };



  return(
  <div>
  <button onClick={()=>setSelect(Animal_images.img1)}>boton1⚡</button>
  <button onClick={()=>setSelect(Animal_images.img2)}>boton2😀</button>
  <button onClick={()=>setSelect(Animal_images.img3)}>boton3🚗</button>
  <h1>{select}</h1>
  </div>
  )
} */

/* const App = () =>{

const grados = useRef();
const[fahrenheit, setFahrenheit]=useState(0);

const convertir=()=>{
  const gradosValue = grados.current.value;
  const fahrenheitValue = gradosValue*1.8+32;
  setFahrenheit(fahrenheitValue);
}

return(
  <div>
  <input type="text" ref={grados}/>
  <button onClick={convertir}>Enviar</button>
  <p>{fahrenheit}</p>
  </div>
  );

}
 */




/* const App=()=>{

const euros = useRef();
const[dolares, setDolares]= useState(0);

const calcular=()=>{

  const eurosValue = euros.current.value;
  const dolaresValue = eurosValue*2;
  setDolares(dolaresValue);

}
return(
<div>
<input type="text" ref={euros}/>
<button onClick={calcular}>Enviar</button>
<p>{dolares}</p>
</div>
);
};

 */

/* const App = ()=>{

const[contador,setContador] = useState(2);
return<button onClick={()=>setContador(contador+2)}>{contador}</button>


}
 */

/* const App=()=>{

const largoref = useRef();
const anchoref = useRef();
const resultadoref = useRef();


const calcular =() =>{

const largo = largoref.current.value;
const ancho = anchoref.current.value;
const valoreultado = largo*ancho;
resultadoref.current.innerHTML= valoreultado;


}

return<div>
<input type ="text" ref={largoref}/>
<input type ="text" ref={anchoref}/>
<button onClick={calcular}>Enviar</button>
<div ref={resultadoref}></div>
</div>

};
 */





/* const App=()=>{

const gradocenRef = useRef();
const resultadoFRef = useRef()




const cambio=()=>{

const grados= gradocenRef.current.value;

const valorenfahr = (grados)*1.8+32
resultadoFRef.current.innerHTML=valorenfahr;

  
}


return<div>
<input type ="text" ref={gradocenRef}/>
<button onClick={cambio}>Enviar</button>
<div ref={resultadoFRef}></div>
</div>

} */

 

/* const App=()=>{

const euroref = useRef();
const cambioadolarref = useRef();




const cambio=()=>{

const eurosValue = euroref.current.value;

const valorendolares = (eurosValue)*1079;
cambioadolarref.current.innerHTML=valorendolares;
console.log(cambioadolarref)
  
}


return<div>
<input type ="text" ref={euroref}/>
<button onClick={cambio}>Enviar</button>
<div ref={cambioadolarref}></div>
</div>

}

 */







/* const App=()=>{
const nombreRef = useRef();
const resultadoRef= useRef();

const procesar=()=>{

resultadoRef.current.innerHTML= nombreRef.current.value;

}

return<div>
<input type ="text" ref={nombreRef}/>
<button onClick={procesar}>Enviar</button>
<div ref={resultadoRef}></div>
</div>

} */









/* const App= () =>{
const numeros =[1,1,3,5,7]

return (
 <div>
 { 
  numeros.map((n,key)=>{
    return<p key={key}>{n}</p>
  }) }
 </div>
);

} */



/* const btnPulsado=()=>{

alert("hola")

}
 */

/* const App=()=>(

  <button onClick={btnPulsado}>pulsame</button>
) */

/* const App=()=>{

const element =<h1>Hello world</h1>
return<div>{element}</div>

} */



export default App;