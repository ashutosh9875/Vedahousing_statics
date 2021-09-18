import * as React from "react"

const Footer = () => (
    <footer
        style={{
            padding: `0 1.0875rem 1.45rem`,
            backgroundColor: "#4B5E76",
            color: "white",
            marginTop: '.75rem'
        }}
    >
        <span
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: '1rem'
            }}
        >
            ©Vedahousing (Varanasi Engineering Design Associates) {new Date().getFullYear()} 
        </span>
    </footer>
)

export default Footer