import { createContext, useReducer, useState } from "react";

const initialState = {
  project: null,
};

export const projectReducer = (state, action) => {
  switch (action.type) {
    case "GET_PROJECTs":
      return {
        projects: action.payload,
      };
    case "CREATE_PROJECT":
      return {
        projects: [action.payload, ...state.projects],
      };
    default:
      return state;
  }
};

export const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  return (
    <ProjectContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};
