import './App.css'


function App() {

  const mensagem = 'ESCREVA O NOME DO EVENTO '
  


  const setTask= () =>
  {
    let valorDoInput = document.querySelector('input').value;

    let li = document.createElement("li");

    li.innerHTML = valorDoInput + '<span onclik="removeTask(`this`)">❌</span>';

    document.querySelector('ul').appendChild(li);

    valorDoInput = " ";
  }

  


  

  return (
    <div className='container'>
      <h1 className='x1'>EVENTOS</h1>
      <br />
      <br />
      <div className='caixa'>
        <input className='i1'  placeholder={ mensagem }  />
        <button className='b1' onClick= { setTask } >ADICIONAR</button>
      </div>
      <br />
      <ul>
        
      </ul>
    </div>
  )
}

export default App
