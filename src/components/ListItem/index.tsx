import { ListItemContainer } from "./style"
import { Item } from "../../types/item";
import { useState } from "react";

type Props = {
  item: Item;
}

export const ListItem = ({ item }): Props => {

  const [isChecked, setIsChecked] = useState(item.done)

  return (
    <ListItemContainer done={isChecked}>
      <input 
      type="checkbox" 
      checked={isChecked}
      onChange={e => setIsChecked(!isChecked)} 
      />
      <label>{item.name}</label>
    </ListItemContainer>
  )
}