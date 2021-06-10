import React from 'react'
import "./chat.css"
import logo from './assets/q7-logo.png'
import logo2 from './assets/q1-removebg-preview.png'

function Chat() {
    return (
        <div>
            <div className="chat-title">
                <div className="chat-header">
                    <div className="chat-header-content"> 
                      <img src={logo} className="chat-header-logo" />
                      <p className="chat-header-title">Qpien Chat</p>
                      <button className="chat-header-button">Qpien Chat Ekle +</button>
                    </div>
                <div className="chat-content">
                    <div className="chat-content-logo">
                    <img src={logo2}  className="chat-content-logo"/>
                    </div>
                    <div className="chat-content-title">
                          <h4>Müşterilerinize çok hızlı bir destek ekibinizin olduğunu gösterin</h4>
                    </div>
                    <div className="chat-content-text">
                       <p>
                           - Olası müşteri sorularında anında cevap verin.<br />
                           - Potansiyel müşterilerinizi ve siparişlerini kaçırmayın.
                       </p>
                    </div>

                </div>
               
                </div>
               

            </div>
        </div>
    )
}

export default Chat
