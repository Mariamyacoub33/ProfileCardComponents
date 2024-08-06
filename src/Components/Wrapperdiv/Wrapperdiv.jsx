import "../../Components/Wrapperdiv/Wrapperdiv.css";
import Patterncard from "../../assets/images/bg-pattern-card.svg";
import Victor from "../../assets/images/image-victor.jpg";

function Wrapperdiv () {
    return(
       <div id="profilecard">
       <img id="Patterncard" src={Patterncard}/>
       <img id="Victor" src={Victor}/>
       <div id="infovictor">
        <div>
<label id="Vcrest">Victor Crest</label>
<label id="Agecrest"> 26</label>
</div>
<label id="london">London</label>
       </div>
       <div id="lastdiv">
<div className="Numbers">
<label className="NumberK">80K </label>
<label className="Infonum">Followers</label>
</div>
<div className="Numbers">
<label className="NumberK">803K </label>
<label className="Infonum">Likes </label>
</div>
<div className="Numbers">
<label className="NumberK">1.4K </label>
<label className="Infonum">Photos</label>
</div>
       </div>
       </div>
    )
}

export default Wrapperdiv;