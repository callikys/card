import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const styles = {
    wrapper: {
        margin: 15,
        padding: 10,
        display: "flex",
        border: "1px solid grey",
        borderRadius: 16,        
    },
    
    // contentContainer: {
    //     marginLeft: 8,
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "center",
    // },
    // nameText: {
    //     color: "black",
    //     fontSize: 16,
    //     fontWeight: "bold",
    // },
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
    },
};

function User(props){
    
    return (
    <div style={styles.wrapper}>
        <div style={styles.contentContainer}>
            <BsFillPersonFill className='addicon'/>
            <span style={styles.nameText}>{props.username}</span>
        </div>
    </div>
    );
}

export default User;