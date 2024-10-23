import React, { useEffect, useState } from "react";

const Cuentos = () => {
  const [revealedContentIndex, setRevealedContentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    // Otros elementos de contenido
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const scrollThreshold = windowHeight / 2; // Cambia este valor según lo que necesites

    const index = content.findIndex(
      (_, index) => index * scrollThreshold > scrollPosition
    );

    if (index !== -1) {
      setRevealedContentIndex(index - 1);
    } else {
      setRevealedContentIndex(content.length - 1);
    }
  }, [scrollPosition, content]);

  return (
    <div className="p-10">
      {content.map((item, index) => (
        <div
          key={index}
          className={`h-screen ${
            index === revealedContentIndex ? "" : "hidden"
          }`}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Cuentos;
