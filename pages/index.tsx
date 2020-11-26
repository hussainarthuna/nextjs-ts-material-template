import React from "react";

export default function Home() {
    return (
        <div>
            Running in {process.env.ENVIRONMENT_TYPE} Mode
        </div>
    )
}
