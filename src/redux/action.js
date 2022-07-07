import React from "react";
import { light, dark, toggle } from "./darkmodeRedu"



export const ligh = async (dispatch) => {
    dispatch(light());
    }

    export const dar = async ( dispatch) => {
        dispatch(dark());
        }


        export const toggl = async (darkmode, dispatch) => {
            dispatch(toggle(darkmode));
            }


