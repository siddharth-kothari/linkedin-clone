import React from 'react'
import './Widget.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widget() {
    const newsArticle = (heading, subtitle)  => (
      <div className='widgets__article'>
          <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
          </div>

          <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
          </div>
      </div>
    );
    
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("BharatPe's  Grover in exit mode","61,416 readers")}
        {newsArticle("Chrome's controversial logo change","118,426 readers")}
        {newsArticle("the Impact of remote work","3,064 readers")}
        {newsArticle("Polygon's  massive fundraise","4,586 readers")}
        {newsArticle("Studying abroad goes hybrid","15,096 readers")}
    </div>
  );
}

export default Widget