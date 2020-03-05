import React from 'react';

export default function Title (heading, textPara, ButtonChildren){
    return (
        <div className="regular_heading">
            <h1>
                {heading}
            </h1>
            <p>{textPara}</p>
            {ButtonChildren}
        </div>
    )
}