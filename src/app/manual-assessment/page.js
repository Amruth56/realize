"use client"

import AccountConnectionStepOne from "@/components/accountConnectionStepOne/AccountConnectionStepOne"
import Footer from "@/resuable/footer/Footer"
import Header from "@/resuable/header/Header"


export default function ManualAssessment(){
return(
    <div>
        <Header></Header>
        <AccountConnectionStepOne/>
        <Footer/>
    </div>
)
}