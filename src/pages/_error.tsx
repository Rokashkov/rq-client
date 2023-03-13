import { ServerResponse } from 'http'

interface ErrorProps {
	statusCode: number
}

export default function Error (props: ErrorProps) {
	const { statusCode } = props

	return (
		<div>
			Status Code:
			{' '}
			{ statusCode }
		</div>
	)
}

Error.getInitialProps = ({ res, err }: { res: ServerResponse, err: any }): ErrorProps => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404

	return { statusCode }
}