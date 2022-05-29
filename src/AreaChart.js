import React from 'react'; 
import {AreaChart, Area, XAxis, YAxis, 
	CartesianGrid, Tooltip} from 'recharts'; 

const App = () => { 

	// Sample data 
	const data = [ 
		{name:"10", x:3000, y:7000}, 
		{name:"20", x:1200, y:8800}, 
		{name:"30", x:1500, y:8500}, 
		{name:"40", x:3000, y:6500}, 
		{name:"50", x:5400, y:4000}, 
		{name:"60", x:7200, y:2800}, 
		{name:"70", x:3200, y:6000} 
	]; 


	return ( 
	<AreaChart width={700} height={250} data={data}> 
		<CartesianGrid/> 
		<XAxis dataKey="name" /> 
		<YAxis /> 
		<Tooltip /> 
		<Area dataKey="x" stackId="1"
			stroke="pink" fill="voilet"  border="bold" border-style={"bold"} /> 
		<Area dataKey="y" stackId="1"
			stroke="red" fill="transparent"  /> 
	</AreaChart> 
	); 
} 

export default App; 
