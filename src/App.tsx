import React, { useState } from 'react';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';

import reactLogo from './assets/react.svg';
import { invoke } from '@tauri-apps/api/tauri';
import './App.css';

function App() {
    const [greetMsg, setGreetMsg] = useState('');
    const [name, setName] = useState('');

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke('greet', { name }));
    }

    return (
        <ChakraProvider>
            <Grid h='100%' p='3' templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={4}>
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={4} bg='tomato' />
            </Grid>
            {/* <div className='container'>
                <h1>Welcome to Tauri!</h1>
                <Button colorScheme='cyan'>Button</Button>

                <div className='row'>
                    <a href='https://vitejs.dev' target='_blank' rel="noreferrer">
                        <img src='/vite.svg' className='logo vite' alt='Vite logo' />
                    </a>
                    <a href='https://tauri.app' target='_blank' rel="noreferrer">
                        <img src='/tauri.svg' className='logo tauri' alt='Tauri logo' />
                    </a>
                    <a href='https://reactjs.org' target='_blank' rel="noreferrer">
                        <img src={reactLogo} className='logo react' alt='React logo' />
                    </a>
                </div>

                <p>Click on the Tauri, Vite, and React logos to learn more.</p>

                <div className='row'>
                    <div>
                        <input
                            id='greet-input'
                            onChange={(e) => setName(e.currentTarget.value)}
                            placeholder='Enter a name...'
                        />
                        <button type='button' onClick={async () => await greet()}>
                            Greet
                        </button>
                    </div>
                </div>
                <p>{greetMsg}</p>
            </div> */}
        </ChakraProvider>
    );
}

export default App;
