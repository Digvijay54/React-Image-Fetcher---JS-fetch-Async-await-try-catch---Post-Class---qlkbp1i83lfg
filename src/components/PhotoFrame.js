import React from 'react';

export const PhotoFrame = (props) => {
<<<<<<< HEAD
    // console.log('url nd title - ', props.url, props.title)
    return(
        <>
            <div className='photoframe'>
                <img src={props.url}/>
                <div className='caption'>{props.title}</div>
            </div>
        </>
    )
=======
    console.log('url and title-',props.url,props.title)
   return(
    <>
        <div className='photoframe'>
            <img src={props.url}/>
            <div className='caption'>{props.title}</div>
        </div>
    </>
   )
>>>>>>> 88829ea7e76fef53f130673dd4b9c0bd22ec4606
}