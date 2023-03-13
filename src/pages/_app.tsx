import React from 'react'
import '../styles/global.sass'


if (typeof window === 'undefined') {
	React.useLayoutEffect = () => {}
}

export default function MyApp ({ Component, pageProps }: { Component: any, pageProps: any }) {

	return (
		<Component { ...pageProps }/>
	)
}