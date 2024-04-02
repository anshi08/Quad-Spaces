import { Grid } from '@mui/material'
import React from 'react'
import "./Inquire.css"
import image1 from "../assets/contactUs.jpg"

const Inquire = () => {
  return (
    <Grid container>
       <Grid item xs={12} md={6} >
         <div className='flex flex-col'>
            <p className='platform'>Interested in learning more about our platform?</p>
            <p className='Contactus'>Contact us today to find out how your team can benefit from bringing your office space onto QuadReal Spaces.</p>
         </div>
       </Grid>

       <Grid item xs={12} md={6}>
          <div style={{
            maskImage:'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xNjQyMzU0Yzg2ZTM0NyIgdmlld0JveD0iMCAwIDM0NC4wMiAzNDMuNTIiIGFyaWEtaGlkZGVuPSJ0cnVlIiBzdHlsZT0iZmlsbDogdXJsKCZxdW90OyNDZXJvc0dyYWRpZW50X2lkMzYwZDdlNjZiJnF1b3Q7KTsgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTsgb3BhY2l0eTogMTsiIHdpZHRoPSI4ODQiIGhlaWdodD0iODgxIj48ZGVmcz48bGluZWFyR3JhZGllbnQgY2xhc3M9ImNlcm9zZ3JhZGllbnQiIGRhdGEtY2Vyb3NncmFkaWVudD0idHJ1ZSIgaWQ9IkNlcm9zR3JhZGllbnRfaWQzNjBkN2U2NmIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNTAlIiB5MT0iMTAwJSIgeDI9IjUwJSIgeTI9IjAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDQ2NzgyIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDQ2NzgyIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQvPjwvZGVmcz48cGF0aCBkPSJtMzQ0LjAyLDE3Mi40M2MtLjc3LDEuNDgtMS4zMSwyLjY5LTIsMy44MS0yOC44MSw0Ny4wMy02NC4zOCw4OC4zMS0xMDcuMDQsMTIzLjE4LTE4LjE1LDE0Ljg0LTM3Ljg5LDI3LjcxLTU2LjgxLDQxLjYtNC42NSwzLjQyLTguMzgsMy4yMi0xMy40LjA0LTMwLjA4LTE5LjA3LTU4LjI1LTQwLjU3LTgzLjYzLTY1LjU3LTMwLjI1LTI5LjgtNTcuMzQtNjIuMi03OS40NC05OC42Mi0yLjIxLTMuNjMtMi4zMS02LjE3LS4wNC05Ljg2LDMwLjY4LTQ5LjczLDY4Ljk3LTkyLjc2LDExNC41NC0xMjkuMTQsMTYuNDktMTMuMTcsMzQuNTItMjQuNDIsNTEuOC0zNi42MSwyLjU3LTEuODIsNC43My0xLjU1LDcuMzEuMDIsMzEuODQsMTkuNDYsNjEuNDUsNDEuOTIsODcuNzgsNjguMzEsMjkuMzUsMjkuNCw1Ni4wOSw2MS4wNyw3Ny43MSw5Ni43NywxLjE5LDEuOTYsMi4xNiw0LjA3LDMuMjIsNi4wN1oiIHN0eWxlPSJmaWxsOnVybCgjQ2Vyb3NHcmFkaWVudF9pZGYzZTRiMzBlOSk7ZmlsbDp1cmwoI0Nlcm9zR3JhZGllbnRfaWQzNjBkN2U2NmIpOyIvPjwvc3ZnPg==)' 
          }}>
          <img src={image1} />
          </div>
        </Grid>
    </Grid>
 
  )
}

export default Inquire