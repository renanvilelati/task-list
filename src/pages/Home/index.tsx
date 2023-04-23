import { useState } from "react"
import { HomeContainer, ContentArea } from "./styles"
import { Item } from '../../types/item'
import { ListItem } from "../../components/ListItem"

export const Home = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Programming Book', done: false},
    {id: 2, name: 'React Course', done: false},
  ])

  return (
    <HomeContainer>
      <ContentArea>
      <h1>Lista de Tarefas</h1>

      {
        list.map( item => (
          <ListItem key={item.id} item={item} />
        ))
      }
      </ContentArea>
    </HomeContainer>
  )
}