import { useState } from 'react'
import './App.css'
import { Accordion, AccordionBody, AccordionHeader, Button } from '@material-tailwind/react'
import { Example } from './Shared/Example';

function App() {
  const [open, setOpen] = useState(1)
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>

    <Example></Example>

    
    </>
  )
}

export default App
