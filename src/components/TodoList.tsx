import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

export const TodoList: React.FC = () => {
    const {page, todos, loading, error, limit} = useTypedSelector(state => state.todo)
    const {fetchTodos,setTodoPage} = useAction()

    const pages = [1,2,3,4,5]

    useEffect(() => {
        fetchTodos(page,limit)
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map((todo,index) => (
                <div key={index}>
                    <p>{todo.id} &gt; {todo.title}</p>
                </div>
            ))}
            <div style={{display: "flex"}}>
                {pages.map((p,index) => (
                    <div
                        key={index}
                        style={{border: p === page ? "2px solid green" : "1px solid gray", padding: 10}}
                        onClick={() => setTodoPage(p)}
                    >{p}</div>
                ))}
            </div>
        </div>
    );
};
