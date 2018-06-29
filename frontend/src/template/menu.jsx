import React from 'react'
import Todo from '../todo/todo';

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-calendar-check-o'></i> TodoApp
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    <li><a href='#/todos'>Tarefas</a></li>
                    <li><a href='#/about'>Sobre</a></li>
                    {/* <li>
                        <select>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </li> */}
                </ul>
            </div>

            
        </div>
        
    </nav>
)