import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura Gmail',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Ir para academia',
    descricao: 'Fazer treino B',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Dar bom dia',
    descricao: 'Para familiares',
    prioridade: 'importante',
    status: 'concluida'
  }
]
const ListaDeTarefas = () => (
  <Container>
    <p>2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)
export default ListaDeTarefas
