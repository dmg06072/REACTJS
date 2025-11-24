const EventComponent_01 = () => {
	const handlerClick = () => {
		console.log('clicked...');
	}

	return <button onClick={handlerClick}>onClick</button>
}

export default EventComponent_01
