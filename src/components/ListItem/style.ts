import styled  from 'styled-components'

type ListItemContainerProps = {
  done: boolean
}

export const ListItemContainer = styled.div( ({done}: ListItemContainerProps) => (
  `
  display: flex;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  input {
    width: 25px;
    height: 25px;
  }

  label {
    color: #fff;
    padding-left: .5rem;
    text-decoration: ${done? 'line-through' : 'initial'};
  }
`
))