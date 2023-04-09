import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "65vh",
        width: "100%",
        border: "1.0000000001px solid red"
       }
    return (
        <footer className='bg-dark text-light py-3' style={footerStyle}>
            <p className="text-center">
                Copyright &copy; shreyasTathode.com
            </p>
        </footer>
    )
}
