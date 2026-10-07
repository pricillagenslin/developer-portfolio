import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBox = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!boxRef.current) return;

    gsap.fromTo(
      boxRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "300px",
        padding: "40px",
        margin: "100px auto",
        background: "#111",
        color: "#fff",
        textAlign: "center",
        borderRadius: "16px",
      }}
    >
      <h2>Hello GSAP 👋</h2>
      <p>My first animation</p>
    </div>
  );
};

export default AnimatedBox;