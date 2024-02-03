import { Routes, Route } from 'react-router-dom';
import './App.css'
import FormComponent from './components/FormComponent';
import IntegerNumber from './components/IntegerNumber';
import ClockuseEffect from './components/ClockuseEffect';
import Reloj from './components/Reloj';
import Navbar from './components/Navbar';

function App() {
  return (
    <article className='body-container'>
      <Navbar />
      <Routes >
        <Route path='/' element={<Reloj />} />
        <Route path="/3" element={<FormComponent />} />
        <Route path="/5" element={<IntegerNumber />} />
        <Route path="/6" element={<ClockuseEffect />} />
        <Route path="/*" element={<h1>404 Page not Found</h1>} />
      </Routes>
    </article>
  )
}

export default App

/*

  componentDidMount() {
    setTimeout(() => {
      const date = new Date();
      this.setState({
        date: date,
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000)

  }


  shouldComponentUpdate(prevState) {
    setTimeout(() => {
      const date = new Date();
      this.setState({
        date: date,
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000)
    if (prevState.date !== this.state.date) {
      return true
    } else {
      return false
    }

  }


*/

/**
 ¿Cuándo usarías el método `shouldComponentUpdate` en un componente de clase y por qué?

 El metodo shouldComponentUpdate lo usaria para especificar en que momento y que quiero que se renderice en mi componente de clase, por ejemplo en la pregunta numero uno : , use el metodo componentDidMount para especificar que quiero que se renderice el state cada segundo, como quiero se rendericen mis props en tiempo real cada vez que cambien su estado uso el metodo shouldComponentUpdate para comprobar que el estado anterior de los props ya ha cambiado y por lo tanto deben ser renderizados.
 Manejo de Eventos:

- En un componente, crea una función `manejarSubmit` que se ejecute al enviar un formulario y evite que la página se recargue.

4. Listas y Keys:

- Explica la diferencia entre `map` y `forEach` al trabajar con listas en React.

Aunque ambos son funciones de alto orden, cuando se trabaja listas con React es mejor usar map, ya que map nos entrega un nuevo array y no modificamos el original como lo hace forEach, esto nos ayuda a trabajar con cada elemento del array y mapearlo a nuestro gusto a cada elemento hay que identificarlo con una Key ya que React necesita una forma de distinguir e identificar que elementos son nuevos o han cambiado.


6. Hooks:

- ¿Qué hace la función `useEffect` en un componente funcional de React? Proporciona un ejemplo práctico.

La funcion useEffect ejectuta el codigo que tiene adentro (Como primer parametro) despues del renderizado del componente, el segundo parametro que podemos asignarle son las dependencias que en el caso de trabajar con mas de una variable podemos indicar con cual variable queremos que se ejecute el codigo como un trigger. Por ejemplo se puede realizar el reloj del primer punto con useEffect, si no quiero que se re-renderice cada vez que se renderiza mi componente puedo especificar con un setInterval que el setTime para mi estado time se renderice cada segundo.


7. Enrutamiento:

- Explica la diferencia entre `BrowserRouter` y `HashRouter` en `react-router-dom`.

BrowserRouter es mas para proyectos que van enlazados con una base de datos, ya que por ejemplo al buscar /index.html/ejemplo el servidor por lo general busca una carpeta llamada /ejemplo y al no encontrolarla uos retorna un error 404 de key location, en cambio HashRouter usa la ruta local de URL y no la del servidor, solo que no se aconseja trabajar con HashRouter por que no es para proyectos pensados para subir a un servidor.

8. Context API:

- ¿Cuándo y por qué usarías el Context API en React? Proporciona un ejemplo de su implementación.

Sirve cuando se quiere pasar un prop de de un componente padre a un determinado componente hijo, por ejemplo cuando se quiere poner un toggle para cambiar de color en una pagina o pasar un prop a un componente dentro de un <Routes />, se declara una funcion (hook) y con la ayuda de React Context se puede enviar el estado modificado a los componentes hijos seleccionados.


9. HOC (Higher Order Component):

- ¿Qué es un HOC en React y cómo se utiliza? Proporciona un ejemplo.


Son funciones que se utilizan para tener un codigo mas modular y reutilizable, ya que una HOC al envolver un componente lo puede usar como argumento y lo puede reutilizar para otro componente que tenga como hijo.

Por ejemplo, si se quisiera hacer un proyecto de una app TODO con HOC, se crea un componente de alto orden para controlar el registro de la app, se toma como componente hijo el TodoList que ahora pasara a ser argumento de la funcion TODO. TodoList tiene componentes hijos que seran los nuevos TODOs estos cuando se rendericen recibiran los parametros que se le apliquen desde la funcion HOC.

10. bibliotecas populares para realizar pruebas unitarias en aplicaciones React.
-React testing library: Comprueba el comportamiennto de los componentes por parte del usuario, se pueden hacer querys a los elementos del componentes como si fuera un usuario final.

-Jest: Se usa para verificar que los componentes de la app funcionen correctamente cuando interactuan, como cuando se pasan los props de padres a hijos.

 */


/*
// Function that will set the state
 setTime() {
   const date = new Date();
   this.setState({
     date: date,
     hour: date.getHours(),
     minutes: date.getMinutes(),
     seconds: date.getSeconds(),
   });
 }

 //Lifecycle Methods
 shouldComponentUpdate(prevState) {
   if (prevState !== this.state.date) {
     return true
   } else {
     return false
   }
 }
 componentDidMount() {
   this.interval = setInterval(() => {
     this.setTime();
   }, 1000);
 }

 componentWillUnmount() {
   clearInterval(this.interval);
 }
 
*/


/*

  setTime() {
    const date = new Date();
    this.setState({
      date: date,
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setTime()
    }, 1000)
  }

  shouldComponentUpdate(prevState) {
    this.setTime();
    if (prevState.date !== this.state.date) {
      return true
    } else {
      return false
    }
  }
*/