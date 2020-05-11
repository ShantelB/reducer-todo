import React, { useState, useReducer } from "react";


export const todos = [
    {
      name: "Clean Room",
      id: 1,
      done: false
    },
    {
      name: "Clean Garage",
      id: 2,
      done: false
    },
    {
      name: "Clean Kitchen",
      id: 3,
      done: false
    },
    {
      name: "Clean Living Room",
      id: 4,
      done: false
    },
  ];

export default todos


export const reducer = (state, action) => {
  
  switch (action.type) {
    case "ADD_TODO":
        const newtodo = {
            name: action.payload,
            id: Date.now(),
            done: false
          };
      return [
        ...state,
       newtodo
      ];

      case "TOGGLE":
        return state.map((item) => {
            if (item.id === action.payload){
              return {
                ...item,
                done: !item.done
              }
            } else {
                return item
              }
            }); 
     

      case "REMOVE_TODOS":
      return state.filter(name => !name.done);
    default:
      return state;
  }
};


