import React from 'react';
import './homepage.styles.scss';

const HomePage= ()=>(
    <div className= 'homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Chapéus</h1>
                    <span className='subtitle'>Compre Agora</span>
                </div> 
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Tênis</h1>
                    <span className='subtitle'>Compre Agora</span>
                </div> 
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Jaquetas</h1>
                    <span className='subtitle'>Compre Agora</span>
                </div> 
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Masculinas</h1>
                    <span className='subtitle'>Compre Agora</span>
                </div> 
                <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Femininas</h1>
                    <span className='subtitle'>Compre Agora</span>
                </div> 
            </div>
            </div>
        </div>
        

    </div>
)
export default HomePage;