import React from "react";
const styles = {
    wrapper: {
        margin: 15,
        padding: 10,
        display: "flex",
        //flexDirection: "row",
        border: "2px solid grey",
        // backgroundColor: "#B9DDD7",
        borderRadius: 16,        
    },
    
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        margin: "auto",
        paddingLeft: 20,
         textDecoration: "none"
    },
    cardimage: {
        width: 40,
        height: 40,
        color: "grey",
    },
    

    
};

function Card(props){
    return (
    <div style={styles.wrapper}>
        <div style={styles.contentContainer}>
            <div className="imgbox2">
                <img className="img" src={props.cardImg}></img>
            </div>
             <span style={styles.nameText}>{props.name}</span>
        </div>
    </div>
    );
}

export default Card;