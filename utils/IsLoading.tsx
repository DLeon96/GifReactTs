import React, { useState, useEffect } from "react";

interface IsLoadingProps {
  isLoading: boolean;
}

export const IsLoading: React.FC<IsLoadingProps> = ({ isLoading }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDots((prevDots) => {
          if (prevDots.length < 3) {
            return prevDots + ".";
          } else {
            return "";
          }
        });
      }, 100); 

      return () => clearInterval(interval); 
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className="card-grid">
          <h2>Cargando{dots}</h2>
        </div>
      )}
    </>
  );
};
