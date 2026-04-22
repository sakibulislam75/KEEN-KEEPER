import { Component } from "react"
import RootLayout from "../Layout/RootLayout"
import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Timeline from "../Pages/Timeline/Timeline"
import Stats from "../Pages/Stats/Stats"
import NotFound from "../Pages/NotFound/NotFound"
import FriendDetails from "../Pages/Home/FriendDetails"

const Router=createBrowserRouter([{
path:'/',
Component:RootLayout,
children:[
    {index:true,Component:Home},
    {path:'/Timeline',Component:Timeline},
    {path:'/Stats',Component:Stats},
      {
        path:'/friens/:id',
        Component:FriendDetails
    }
    ,{
        path:'/Timeline',
        Component:Timeline
    },
    {
        path:'/Timeline',
        Component:Timeline
    }
  
]
},{
    path:'*',
    Component:NotFound
},
])

export default Router