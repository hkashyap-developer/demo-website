import * as React from "react";

import {
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Hr,
  Tailwind,
} from "@react-email/components";
  
interface NetlifyWelcomeEmailProps {
  firstName: string; 
  emailId: string; 
  mobileNo: string; 
  travelTypeVal: string; 
  prefGetawayVal: string; 
  otherGetawayVal: string; 
  locIndiaVal: string; 
  locAbroadVal: string; 
  startDateVal: string; 
  endDateVal: string; 
  prefAccomVal: string;
  specialReqVal: string; 
  metOfCommVal: string;
}
  
const baseUrl = 'https://demo.react.email/'
  

  
  export const NetlifyWelcomeEmail = ({
    firstName, emailId, mobileNo, travelTypeVal, prefGetawayVal, otherGetawayVal, locIndiaVal, locAbroadVal, startDateVal, endDateVal, prefAccomVal, specialReqVal, metOfCommVal 
  }: NetlifyWelcomeEmailProps) => {
    return (
      <Html>

        <Tailwind>
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[565px]">

        <Head>
            <title>New Lead | Geranos Getaways</title>
        </Head>

        <Img className="m-auto" src="https://geranosgetaways.com/wp-content/uploads/2024/08/logo-3.png" alt="Geranos Logo" width="180" height="90" />



        
        <Preview>Here is a New Plan a Tour request.</Preview>


        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[20px] mx-0">
              New <strong>Plan a tour</strong> request
        </Heading>

        <Hr />

        <div className="gap-8 px-2 py-8 max-w-[440px] m-auto">

        <div className="py-2 px-4 mb-4 border-2 bg-slate-50 rounded-xl">
          <p>Full Name: {firstName}</p>
          <p>Email ID: {emailId}</p>
          <p>Phone No: {mobileNo}</p>
        </div>

        <div className="py-2 px-4 mb-4 border-2 bg-slate-50 rounded-xl">
          <p>Preferred Method of Communication: {metOfCommVal}</p>
        </div>


        <div className="py-2 px-4 mb-4 border-2 bg-slate-50 rounded-xl">
          { locIndiaVal !== "" &&   
            <p>Location | India: {locIndiaVal}</p>
          }
          { locAbroadVal !== "" &&
            <p>Location | Other: {locAbroadVal}</p>
          }
          <p>Travel Type: {travelTypeVal}</p>
          
          
          <p>Preferred Getaway: {prefGetawayVal}</p>

          { (otherGetawayVal !== "") &&
            <p>Other Getaway: {otherGetawayVal}</p>
          }

          <p>Preferred Accomodation: {prefAccomVal}</p>
        </div>
        
        <div className="py-2 px-4 mb-4 border-2 bg-slate-50 rounded-xl">
          <p>Start Date: <span className="font-bold">{startDateVal}</span></p>
          <p>End Date: <span className="font-bold">{endDateVal}</span></p>
        </div>


 
      
        <div className="py-2 px-4 border-2 bg-slate-50 rounded-xl">
        <p>Special Request: {specialReqVal}</p>
        </div>


        </div>
   

        <div className="flex align-middle justify-center">
   
          <Button 
          href={`tel:${mobileNo}`} 
          className="bg-[#000000] max-w-min min-w-[120px] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-4 mb-2 mx-auto">        
          Call The Prospect
          </Button>
   
        </div>

        <Hr />

        <p className="text-center">Geranos Getaways ・ Chandigarh ❤️ IN</p>
        <p className="text-center text-slate-400 max-w-[360px] m-auto">This email is sent from &quot;Let Us Plan Your Getaway!&quot; form from Geranos Getaways website.</p>

        </Container>
        </Tailwind>
      </Html>
    );
  };
  
  export default NetlifyWelcomeEmail;
  