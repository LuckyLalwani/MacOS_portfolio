import Dock from "./components/Dock"
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"
import gsap from "gsap"

import { Draggable } from "gsap/Draggable"
import TerminalWindow from "./windows/Terminal"
import SafariWindow from "./windows/Safari"
import ResumeWindow from "./windows/Resume"
import FinderWindow from ".//windows/Finder"
import TextWindow from "./windows/Text"
import ImageWindow from "./windows/Image"
import ContactWindow from "./windows/Contact"
import Home from "./components/Home"
import PhotosWindow from "./windows/Photos"
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <TerminalWindow/>
      <SafariWindow/>
      <ResumeWindow/>
      <FinderWindow/>
      <TextWindow/>
      <ImageWindow/>
      <ContactWindow/>
      <Home/>
      <PhotosWindow/>
    </main>
  )
}

export default App