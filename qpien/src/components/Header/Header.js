import React from 'react'
import "./header.css"
import logo from "./assets/qpien-logo.png"

export default function Header() {
    return (
        <div>
          <div className="header-background">
              <div className="logo" >
              <img src={logo} className="logo"/>
              </div>
          </div>
        </div>
    )
}
