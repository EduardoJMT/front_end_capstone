import React, { useReducer } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './Header'
import Booking from './Booking'
import ConfirmedBooking from './ConfirmedBooking'

export const seedRandom = function(seed){
    var m = 2**35 -31
    var a = 185852
    var s = seed % m
    return function(){
        return (s = s * a % m) / m
    }
}

export const fetchAPI = function(date){
    let result = []
    let random = seedRandom(date.getDate())
    for (let i=17; i <=23; i++){
        if(random() < 0.5){
            result.push(i + ':00')
        }
        else if(random() > 0.5){
            result.push(i + ':30')
        }
    }
    return result
}

export function initializeTimes(){
    const initialState = {
        availableTimes: fetchAPI(new Date())
    }
    return initialState
}

export function updateTimes(state, date){
    return {
        availableTimes: fetchAPI(new Date())
    }
}

const Main = () => {

    
    const submitAPI = function(formData){
        return true
    }

    

    const [state, dispatch] = useReducer(updateTimes, initializeTimes())

    

    const navigate = useNavigate()
    function submitForm(formData){
        if(submitAPI(formData)){
            navigate('/confirmed')
        }
    }

  return (
    <main>
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/booking' element={<Booking availableTimes={state} dispatch={dispatch} SubmitForm={submitForm}/>}/>
            <Route path='/confirmed' element={<ConfirmedBooking/>}/>
        </Routes>
    </main>
  )
}

export default Main