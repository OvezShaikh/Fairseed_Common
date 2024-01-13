import React from "react";
import images from "../../constants/images";

// function DashBoard({DashBoardImg,DashBoardTotal,DashBoardText}) {
  function DashBoard({data}) {
  return (
    <>

        <div style={{width: 235, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
          <div
            style={{width: 56, height: 56, position: 'relative'}}
          >
           <img src={data?.DashBoardImg} />
          </div>
          <h1 style={{ textAlign: 'center', color: '#25272C', fontSize: 36, fontWeight: '900',fontFamily:'satoshi'  ,wordWrap: 'break-word'}}>{data?.DashBoardTotal}</h1>
          <p style={{flex: '1 1 0', alignSelf: 'stretch', textAlign: 'center', color: '#8E95A2', fontSize: 17, fontWeight: '500', fontFamily:'satoshi' ,wordWrap: 'break-word'}}>{data?.DashBoardText}</p>
        </div>


    </>
  );
}

export default DashBoard;
