import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";




const faqs = [
    {
        question: "Why should my cat and I participate?",
        answers: [
            "By participating, you’re contributing to the development of innovative, safe, and effective medications to extend the lifespan of cats and maintain their quality of life as they age.",
            "Your cat will receive vet check-ups and study-related lab work at no cost to you for the duration of the study."   
        ] 
    },
      {
        question: "What’s expected of participants?",
        answers: [ "To be eligible your cat must be at least 10 years old and weigh 14 pounds or more.",
        "You’ll need to commit to participating in a study that will span up to four years.",
        "You’ll give your cat the flavored chewable study medication every day.",
        "You’ll also need to complete brief surveys about your dog’s quality of life throughout the study, which can be completed at the vet clinic or at home on your smartphone, tablet, or computer.",
        "Finally, you’ll need to bring your dog to a participating clinic for study visits — six visits in the first year and two visits a year for the remaining years."

]},
{
    question: "Will my cat get the drug if they participate?",
    answers: [ "Regular vet visits, providing updates, and ensuring your cat follows the study protocol.",
]},
{
    question: "Will my cat live longer if they participate?",
    answers: ["This study will compare the lifespan, health, and quality of life in cats taking the study drug against dogs that are given placebo tablets that do not contain the drug.",

      "We hope that the cats on the study drug will live longer and stay healthier — the study is designed to tell us in a controlled, unbiased way whether they do. As a participant in the study your cat may be given the study drug or may be on a placebo, but this information will remain blinded until after the study has ended.",
      
     " After the study ends, the drug will be submitted to the FDA for approval as a prescription product."
]},
{
    question: "My cat isn’t 10 years old yet — are they eligible to enroll?",
    answers: [ "All cats in the STAY study must be 10 or older at the time of enrollment with documentation of age. These requirements are necessary to ensure the scientific integrity of our study, so we’re not able to make any exceptions.",
]},
{
    question: "Is this study safe for my cat?",
    answers: [ "For LOY-002, we have extensive data in over 400 cats, including longitudinal studies of up to a year, and a pilot field study. We’ll be able to share this data as we get closer to launch.",

   "If your dog does experience side effects from the drug, you’ll be supported with safety resources, including training on how to recognize side effects and access to a 24/7 hotline.",
    
    "LOY-002 is not aimed at treating a specific disease. Therefore, if your cat is given the placebo in the study, they do not run any risks associated with being untreated. If your cat gets sick for any reason, you are free to treat your cat with normal veterinary care."
]},
{
    question: "Who is Meown?",
    answers: [ "Meown is an animal health biotech company based in San Francisco. We’re developing drugs that extend the healthy lifespan of cats and help maintain their quality of life as they age. We’re partnering with veterinarians across the country to conduct our STAY study, the largest clinical study of its kind ever conducted.",
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
            Thanks for your interest in this clinical trial. <br /> Your participation is an important step in <br /> getting innovative, safe, and effective <br /> medications approved for cats.
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
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-black py-6">
            <button
              onClick={() => toggle(index)}
              className="text-left w-full font-bold text-base px-2 py-1 rounded transition-colors duration-300 hover:text-[rgb(240,117,117)]"
            >
              {faq.question}
            </button>

            <div
  className={`overflow-hidden transition-all duration-500 ease-in-out px-2 text-sm text-gray-700 font-medium ${
    isOpen ? "max-h-[500px] mt-2 py-1 space-y-6" : "max-h-0 "
  }`}
>
  {faq.answers.map((ans, i) => (
    <p key={i}>{ans}</p>
  ))}
</div>
          </div>
        );
      })}
    </article>
        </section>
  
  </>
    )
}