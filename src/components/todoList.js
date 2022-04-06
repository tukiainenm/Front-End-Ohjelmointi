import React from 'react';

export default function TodoList(props) {
    return (
        <div>

            <table>
                <tbody>                   
                    {props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.desc}</td>
                            <td>{todo.date}</td>  
                            <td> <input type="button" value="Delete" onClick={() => props.setTodos(props.todos.filter((todo, i) => i !== index))} /></td>                         
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    );
}
