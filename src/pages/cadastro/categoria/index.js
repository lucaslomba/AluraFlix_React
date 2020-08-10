import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: 'Categoria Inicial',
    descricao: 'Descrição inicial',
    cor: '#000'
  }
  
  const [categorias, setCategorias] = useState([]);

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    
    //Chave: Nome, Descrição, bla...
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(e){
    //Pega valor do target do evento, que tras o valor do input
    //setValues(e.target.value)
    setValue(e.target.getAttribute('name'), e.target.value)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(e){
        e.preventDefault();
        setCategorias([
          //tres pontos siguinifica que ira pegar todos os valores ja informados e somar o que vem apos a virgula
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
      }}>
        {/* State */}
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="?????"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor da Categoria: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map( (categoria, indice) => {
          return[
            <li key={`${categorias}${indice}`}>
              {categoria.nome}
            </li>
          ]
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;