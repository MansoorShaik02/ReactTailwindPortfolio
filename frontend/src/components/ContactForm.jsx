import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_353fhnj", "template_656wjbf", form.current, {
        publicKey: "x2Tqzs0ur_D_BY18s",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessageSent(true); // Update the state to show the message sent text
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full mx-auto p-8 bg-gray shadow-md"
    >
      <p className="text-center text-2xl">Contact Me </p>
      <div className="mb-4">
        <label className="block text-white-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          name="from_name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="from_email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          name="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline h-32"
        />
      </div>
      <div className="flex items-center justify-between">
        <input
          type="submit"
          value="Send"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        />
      </div>
      {messageSent && (
        <p className="text-white-500 text-xl mt-4 text-center">
          Message sent successfully!
        </p>
      )}
    </form>
  );
};
