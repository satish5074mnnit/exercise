// component 1
const Course=(props)=>{
	return (
		<>
		<h1> {props.course}</h1>

		</>
	)
}


//component 2
const Contents=(props)=>{
	return (
		<>
		<h3>  {props.part1} ={props.exercises1} </h3>
		<h3> {props.part2} ={props.exercises2}</h3>
		<h3> {props.part3} ={props.exercises3}</h3>
        </>
	)
}


//component 3

const Total=(props)=>{
	return (
		<>
		<p>Number of exercises {props.exercises1+props.exercises2 + props.exercises3}</p>
		
		</>
	)
}


const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14
  
	return (
	  <>
       <Course  course={course}/>
        <Contents exercises1={exercises1} part1={part1} exercises2={exercises2} part2={part2}exercises3={exercises3} part3={part3}/>
		<Total exercises3={exercises3} exercises2={exercises2} exercises1={exercises1}/ >
		
	  </>
	)
  }
export default App;
