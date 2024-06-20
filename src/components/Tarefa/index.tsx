import { FunctionComponent, useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}
const Tarefa: FunctionComponent<Props> = ({
  titulo,
  prioridade,
  status,
  descricao
}) => {
  const [estaEditando, setEstaEditando] = useState<boolean>(false)
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro={'prioridade'} status={status} prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro={'status'} status={status} prioridade={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Excluir</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa
