import React, {Component, useEffect, useState} from "react";

function Bills() {
    const [initialData, setInitialData] = useState([{}])

    useEffect(() => {
        fetch('/backend_to_frontend').then(
            response => response.json()
        ).then(data => setInitialData(data))
    }, [])

    return(
        <div>
            <div>Bills Page</div>
            <h1>{{initialData}}</h1>
        </div>
    )
    
}

export default Bills