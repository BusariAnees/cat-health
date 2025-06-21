import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";


const faqs = [
    {
        question: "Why should my cat and I participate?",
        answers: [
            "By participating, you’re contributing to the development of innovative, safe, and effective medications to extend the lifespan of dogs and maintain their quality of life as they age.",
            "Your dog will receive vet check-ups and study-related lab work at no cost to you for the duration of the study."   
        ] 
    },
      {
        question: "What’s expected of participants?",
        answers: [ "Regular vet visits, providing updates, and ensuring your cat follows the study protocol.",
]},
{
    question: "What’s expected of participants?",
    answers: [ "Regular vet visits, providing updates, and ensuring your cat follows the study protocol.",
]},
{
    question: "What’s expected of participants?",
    answers: [ "Regular vet visits, providing updates, and ensuring your cat follows the study protocol.",
]},
{
    question: "What’s expected of participants?",
    answers: [ "Regular vet visits, providing updates, and ensuring your cat follows the study protocol.",
]},
{
    question: "What’s expected of participants?",
    answers: [ "Regular vet visits, providing updates, and ensuring your cat follows the study protocol.",
]},
{
    question: "What’s expected of participants?",
    answers: [ "Regular vet visits, providing updates, and ensuring your cat follows the study protocol.",
]},
]


export default function Questions () {

    const [openIndex, setOpenIndex] = useState(null);
    
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return(
  <>
      <section className="text-start py-[9rem] px-[5rem]  flex justify-between ">
          <div className="w-[30%] p-0">
            <p className=" leading-[5.5rem] text-[6rem] font-semibold tracking-[-.04em]">
            Q&A
            </p>
            <p className="py-[1.2rem]">
            Thanks for your interest in this clinical trial. <br /> Your participation is an important step in <br /> getting innovative, safe, and effective <br /> medications approved for dogs.
            </p>
            <button className="btn-connected btn-clinicals ">
              <a className="btn-connected-a" href="">
                {" "}
                join&nbsp;the&nbsp;STAY&nbsp;study
              </a>
              <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
            </button>
          </div>

          <article className="w-[50%] mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-black py-6">
          <button
            onClick={() => toggle(index)}
            className="text-left w-full font-bold text-[1rem] focus:outline-none hover:text-[rgb(240,117,117)] transition-colors duration-200 px-2 py-1 rounded"
          >
            {faq.question}
          </button>
          {openIndex === index && (
              <div className="overflow-hidden transition-all duration-500 mt-2 space-y-2 text-sm text-gray-700 font-medium px-2 py-1">
              {faq.answers.map((ans, i) => (
                <p key={i}>{ans}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </article>
        </section>
  
  </>
    )
}