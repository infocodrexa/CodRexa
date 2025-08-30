import React from "react";

const FAQSection = ({ faqs }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question.trim(), 
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.trim(), 
      },
    })),
  };

  return (
    <section style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Frequently Asked Questions
      </h2>

      {/* User Visible FAQ UI */}
      <div>
        {faqs.map((faq, index) => (
          <details
            key={index}
            style={{
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              background: "#fff",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: "bold" }}>
              {faq.question}
            </summary>
            <p style={{ marginTop: "5px" }}>{faq.answer}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </section>
  );
};

export default FAQSection;
