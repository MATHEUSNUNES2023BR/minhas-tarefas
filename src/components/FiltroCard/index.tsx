import { FunctionComponent } from 'react'
import * as S from './styles'
export type Props = {
  ativo?: boolean
}
const FiltroCard: FunctionComponent<Props> = ({ ativo }) => (
  <S.Card ativo={ativo}>
    <S.Contador>3</S.Contador>
    <S.Label>pendentes</S.Label>
  </S.Card>
)
export default FiltroCard
