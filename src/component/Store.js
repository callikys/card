import React from "react";

const styles = {
    wrapper: {
        margin: 15,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
        //borderRadius: 16,        
    },
    
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    placeText: {
        color: "black",
        fontSize: 14,
    },

    
};

function Store(props){
    return (
    <div style={styles.wrapper}>
        <div style={styles.contentContainer}>
             <span style={styles.nameText}>{props.name}</span>
        </div>
    </div>
    );
}

export default Store;