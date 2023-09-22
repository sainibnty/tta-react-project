import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../css/layout.css'
function Layout(props) {
    return (
        <div id='main'>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout