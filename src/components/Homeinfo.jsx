import React from 'react'

const rndercontent={
    1:(<h1>1</h1>),
    2:(<h1>2</h1>),
    3:(<h1>3</h1>),
    4:(<h1>4</h1>)
}


const Homeinfo = ({CurrentStage}) => {
  return rndercontent[CurrentStage] || null;
}

export default Homeinfo
