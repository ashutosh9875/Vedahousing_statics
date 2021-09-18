import * as React from "react"

const Footer = () => (
    <footer
        style={{
            marginTop: `2rem`,
            padding: `0 1.0875rem 1.45rem`,
            backgroundColor: "#4B5E76",
            color: "white",
        }}
    >
        <span
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            ©Vedahousing {new Date().getFullYear()} 
        </span>
    </footer>
)

export default Footer