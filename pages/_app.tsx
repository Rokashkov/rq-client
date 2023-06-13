import React from 'react'
import 'shared/styles/global.sass'
import 'normalize.css'


if (typeof window === 'undefined') {
	React.useLayoutEffect = () => {}
}

export default function MyApp ({ Component, pageProps }: { Component: any, pageProps: any }) {

	return (
		<Component { ...pageProps }/>
	)
}