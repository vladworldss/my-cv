import React, { Component } from 'react';

const Contact = () => {
  const links = [
    {
      href: 'https://t.me/vladworld_ss',
      icon: 'fab fa-telegram',
      text: 'Telegram',
      color: 'blue lighten-2',
    },
    {
      href: 'https://github.com/vladworldss',
      icon: 'fab fa-github',
      text: 'GitHub',
      color: 'grey darken-3',
    },
    {
      href: 'https://www.linkedin.com/in/vladimir-gerasimenko-aa4014100/',
      icon: 'fab fa-linkedin',
      text: 'LinkedIn',
      color: 'blue darken-4',
    },
  ];

  return (
    <div className="card teal lighten-1 z-depth-0">
      <div className="card-content">
        <h6 className="white-text">
          <strong> # CONTACTS</strong>
        </h6>
        <hr />
        <div className="row pt">
          {links.map((link, index) => (
            <div key={index} className="col m6 s12" style={{ marginBottom: '12px' }}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${link.color} waves-effect`}
                style={{ width: '100%', textTransform: 'none' }}
              >
                <i className={link.icon} style={{ marginRight: '8px' }}></i>
                {link.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
