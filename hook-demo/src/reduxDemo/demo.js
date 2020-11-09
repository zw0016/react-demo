//使用useReducer,useState,useContext代替redux效果
import React   from   'react'
import ShowArea from './showArea'
import Buttons from './buttton'
import {Color }from './color'

function ExampleDemo(){
        return(
            <div>
                <Color>
               <ShowArea></ShowArea>
                <Buttons></Buttons>                
                </Color>
 
            </div>
        )
}

export default ExampleDemo



