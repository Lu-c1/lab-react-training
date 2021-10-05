import React, { Component } from 'react';

const styleGreets = {
  backgroundColor: 'white',
  fontSize: 12,
  borderStyle: "solid" ,
  width: 700,
  padding:10,
  textAlign:"left"
  
};

function Greetings(props) {
  const { lang, children } = props;
  return (
    <div style={styleGreets}>
      <p className="greets">
        {lang === 'de' ? <h3>Hallo {children}</h3> : null}
        {lang === 'en' ? <h3>Hello {children}</h3> : null}
        {lang === 'es' ? <h3>Hola {children}</h3> : null}
        {lang === 'fr' ? <h3>Bonjour {children}</h3> : null}
      </p>
    </div>
  );
}

export default Greetings;
