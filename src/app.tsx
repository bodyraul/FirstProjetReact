import { GlobalStyle } from './shared/ui'
import TodoList from './Tode-list/TodoList'

/**
 * Ce fichier contient le composant principal
 * qui lui même contient toute l'application.
 */
export default function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  )
}
