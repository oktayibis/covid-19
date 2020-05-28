import React from 'react'
import SummaryCard from "../summary-card/summary-card.component"
import "./header.style.scss"
export default function Header() {

    return (
        <div className="header">
         
                <h2>Covid - 19 Summary</h2>
                <SummaryCard  />
           
        </div>
    )
}
