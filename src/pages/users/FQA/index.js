import { memo } from "react";
import React, { useState } from 'react';
import "./FQA.css";
import ProductCarousel from "../../../component/ProductlistRandom/ProductList";
const FQA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What products does the store sell?',
      answer: 'We sell products such as clothing, accessories, and household items.'
    },
    {
      question: 'What is the return policy?',
      answer: 'The return policy is within 30 days from the date of purchase with the condition that the product is unused.'
    },
    {
      question: 'Does the store offer delivery?',
      answer: 'We offer free home delivery for orders over 500 $.'
    },
    {
      question: 'Does the store have any promotions?',
      answer: 'We regularly update promotions and discounts on our website.'
    },
    {
      question: 'What are the store’s opening hours?',
      answer: 'The store is open from 8:00 AM to 9:00 PM daily.'
    },
    {
      question: 'How can I make a payment?',
      answer: 'We accept payments via cash, bank transfer, and electronic payment methods such as bank cards and e-wallets.'
    }
    // Add more questions and answers as needed
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="/Homepage" className="breadcrumb-link">
            Home
          </a>
        </li>
        <li className="breadcrumb-separator">»</li>
        <li className="breadcrumb-item">
        <a href="/Customer-Help" className="breadcrumb-link">
            Customers Help
          </a>
        </li>
      </ol>
    </nav>
      <h1>FAQ of Chic Light & Design</h1>
      <hr align="center" width="30%" color="#c9a22e" />
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
    <ProductCarousel/>
    </div>
  );
};
export default memo(FQA);