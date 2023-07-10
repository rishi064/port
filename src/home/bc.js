import React from 'react'

export default function Bc() {
    const style={
        width:'200px',
        height:'20px',
        backkgroundColor:'red',
        borderRadius:'100%'

    }
  return (
<div className="bc" style={{position:'absolute',top:0,left:0,}}>
    <div style={style}></div>
    <div style={style}></div>
    <div style={style}></div>
    <div style={style}></div>
    <div style={style}></div>
    <div style={style}></div>
    <div style={style}></div>
    <div style={style}></div>
    <div style={style}></div>
    <div style={style}></div>
</div>
  )
}
