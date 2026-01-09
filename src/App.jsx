import Dock from "./components/Dock"
import Navbar from "./components/navbar"
import Welcome from "./components/Welcome"
import gsap from "gsap"

import { Draggable } from "gsap/Draggable"
import TerminalWindow from "./windows/terminal"
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <TerminalWindow/>
    </main>
  )
}

export default App