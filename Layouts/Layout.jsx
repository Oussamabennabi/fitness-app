import React from 'react'
import Header from '../components/Header'

const Layout = ({children}) => {
  return (
		<div className="bg-gray900">
			<Header />
			{children}
		</div>
	);
}

export default Layout