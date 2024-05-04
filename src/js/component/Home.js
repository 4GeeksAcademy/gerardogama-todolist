import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	const [hoverItem, setHoverItem] = useState(null)
	console.log(hoverItem);
	return (
		<div className="text-center container">
			<div className="todoTitle mt-5">
				todos
			</div>

			<div className="input-group mb-3 mt-5">

				<span class="input-group-text" id="basic-addon1">ToDo</span>
				<input type="text"
					className="form-control"
					id="todo-list"
					value={inputValue}
					onChange={(event) => {
						setInputValue(event.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							setTodos(todos.concat(inputValue));
							setInputValue("");
						}
					}
					}
					placeholder="Agrega una tarea"
					aria-label="Username"
					aria-describedby="basic-addon1" />




			</div>
			<>
				{todos.length === 0 && "No hay tareas, añadir tareas"}
			</>
			{todos.map((item, index) => (
				<div
					key={index}
					onMouseEnter={() => setHoverItem(index)}
					onMouseLeave={() => setHoverItem(null)}
				>

					<span> {item}{""} </span>

					{hoverItem === index && <span style={{ cursor: "pointer" }}
						onClick={() =>
							setTodos(todos.filter(
								(todos, currentIndex) =>
									index != currentIndex
							))
						}>
						x
					</span>}

				</div>
			))}
			<div> {todos.length} tasks</div>

		</div>
	);
};

export default Home;
