import Todo from './Todo';

const TodoList = ({Todo, onTodoClick}) => {
	<ul>
		{todos.map(todo => {
			<Todo key={todo.id}  
				  {...todo} 
				  onClick = {()=>{
				  	onTodoClick(todo.id)
				  }} 
			/>
		})}
	</ul>	
}