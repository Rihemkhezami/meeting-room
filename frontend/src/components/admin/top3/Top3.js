import React from "react";
import "./top3.scss"
import t from './t.jpg';
import h from './h.jpg';

const Top3 = () => {
    
    return(
<div className="top3Container">
<div className="top3Title">LES PLUS COMMANDÉS</div>
<div className="itemTop3">
    <div className="left">
        <img className="imgTop3" src={t}/>
    </div>
    <div className="right">
        <span className="item3Title">TK1110</span>
        <span className="counter">5</span>
    </div> 
</div>
<div className="itemTop3">
    <div className="left">
        <img className="imgTop3" src={h}/>
    </div>
    <div className="right">
        <span className="item3Title">CN045AEs</span>
        <span className="counter">4</span>
    </div> 
</div>
</div>
 
)
}
export default Top3;
/*
<div className="itemTop3">
    <div className="left">
        <img className="imgTop3" src="https://www.tunisianet.com.tn/img/cms/Nouveau%20dossier/clavier/LD0005373975_2.jpg"/>
    </div>
    <div className="right">
        <span className="item3Title">Consommable</span>
        <span className="counter">8</span>
    </div> 
</div>
<div className="itemTop3">
    <div className="left">
        <img className="imgTop3" src="https://www.tunisianet.com.tn/img/cms/Nouveau%20dossier/clavier/LD0005373975_2.jpg"/>
    </div>
    <div className="right">
        <span className="item3Title">Consommable</span>
        <span className="counter">8</span>
    </div> 
</div>
<div className="itemTop3">
    <div className="left">
        <img className="imgTop3" src=""/>
    </div>
    <div className="right">
        <span className="item3Title">CN047AE</span>
        <span className="counter">7</span>
    </div> 
</div>
*/