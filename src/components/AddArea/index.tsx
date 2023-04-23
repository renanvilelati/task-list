import { FaPlus } from 'react-icons/fa'

import { AddAreaContainer } from "./styles"
import { KeyboardEvent, useState } from 'react'

type Props = {
  handleAddTask: (taskName: string) => void
}

export const AddArea = ({handleAddTask}: Props) => {

  const [inputText, setInputText] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      handleAddTask(inputText)
      setInputText('')
    }
    
  }

  return (
    <AddAreaContainer>
      
      <FaPlus size={24} color="fff" />
      <input 
        type="text" 
        placeholder='Type your task'
        value={inputText} 
        onChange={ e => setInputText(e.target.value)}
        onKeyUp={ handleKeyUp }
       />
      </AddAreaContainer>
  )
}