import React from 'react'

export default function Banner({childrenTwo,title,subtitle,children}) {
  return (
    <div className="banner_content">
      <h1>
          <span>{childrenTwo}</span>
          {title}
      </h1>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}
