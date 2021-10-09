import React, { Component } from 'react';

const styleGreets = {
  fontSize: 25,
  borderStyle: "solid" ,
  width: 700,
  textAlign:"left",
  margin:10,
  color:"grey"
  
};

function Greetings(props) {
  const { lang, children } = props;
  return (
    <div style={styleGreets}>
      <p className="greets">
        {lang === 'de' ? <p>Hallo {children}</p> : null}
        {lang === 'en' ? <p>Hello {children}</p> : null}
        {lang === 'es' ? <p>Hola {children}</p> : null}
        {lang === 'fr' ? <p>Bonjour {children}</p> : null}
      </p>
    </div>
  );
}

export default Greetings;
