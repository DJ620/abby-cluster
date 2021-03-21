import React from 'react';

function Header() {
    const styles = {
        header: {
            width: "100vw",
            height: "45vh",
            marginTop: "-8px",
            backgroundImage: "url(https://www.transparenttextures.com/patterns/robots.png)",
            backgroundColor: "#88e7dd",
            borderBottomLeftRadius: "100% 120%",
            borderBottomRightRadius: "50% 20%",
            boxShadow: "5px 5px 30px black"
        },
        name: {
            marginTop: "0px",
            paddingTop: "10px",
            paddingLeft: "15px",
            fontFamily: "sacramento",
            fontSize: "calc(20px + 12vw)",
            color: "#ffe485",
            textShadow: "1px 1px 20px black",
            fontWeight: "bold"
        },
        adjectives: {
            fontFamily: "architects daughter",
            color: "white",
            textShadow: "1px 1px 20px black",
        }
    }
    return (
        <div style={styles.header}>
            <h1 style={styles.name}>Abby Cluster</h1>
            
        </div>
    )
}

export default Header;
