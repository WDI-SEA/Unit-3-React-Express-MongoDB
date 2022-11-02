import React from "react";

function HelloWorld(props) {

console.log('this are the props data from my parent App Component',props)

console.log(props.activities)
   
   
    return (
        <div>

            Hello
            {props.activities.map(act => 
                <p key={act}>{act}</p>
            )}

        </div>
    )
}

export default HelloWorld
