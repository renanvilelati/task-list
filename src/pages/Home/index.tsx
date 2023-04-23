import { useState } from "react"
import { HomeContainer, ContentArea } from "./styles"
import { Item } from '../../types/item'
import { ListItem } from "../../components/ListItem"
import { AddArea } from "../../components/AddArea"

export const Home = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Programming Book', done: false},
    {id: 2, name: 'React Course', done: true},
  ])

  const handleAddTask = (taskName: string) => {
    const newList = [...list]
    newList.push( {
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

   // Função feita para tarefinha de casa.
   const handleTaskChange = (id: number, done: boolean) => {
    const newList = [...list];
    for(const i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <HomeContainer>
      <ContentArea>
      <h1>Lista de Tarefas</h1>

      <AddArea handleAddTask={handleAddTask} />

      {
        list.map( item => (
          <ListItem key={item.id} item={item} onChange={handleTaskChange}/>
        ))
      }
      </ContentArea>
    </HomeContainer>
  )
}