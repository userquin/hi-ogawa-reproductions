import ReactServer from "react-server-dom-webpack/server.edge";

export function registerClientReference(id: string, name: string) {
	return Object.defineProperties(
		{},
		{
			...Object.getOwnPropertyDescriptors(
				ReactServer.registerClientReference({}, id, name),
			),
			$$async: { value: true },
		},
	) as any;
}
