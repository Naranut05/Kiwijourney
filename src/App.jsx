import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AlarmClockCheck } from 'lucide-react';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <section className='bg-red-500'>
                <h1>My First React App on Vite</h1>
                <AlarmClockCheck />
            </section>
        </>
    )
}

export default App
