interface route{
	path: string,
	name: string,
	component: any,
	useAsDefault?: boolean,
	as?: string 
}

export {
	route
}