import React from "react";
import ContactForm from "./ContactForm";

const ContactPage = () => {

    async function contactHandler(info) {
        const response = await fetch('https://react-http-6bbce-default-rtdb.firebaseio.com/contact.json',{
          method: 'POST',
          body:JSON.stringify(info),
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data = await response.json();
        console.log(data)
      }
  return (
    <>
      <ContactForm onAddContact={contactHandler}/>
    </>
  );
};

export default ContactPage;
