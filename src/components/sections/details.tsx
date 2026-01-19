import React from 'react';

const DetailsSection: React.FC = () => {
  return (
    <section 
      className="cf-section cf-wrapper"
      style={{
        display: 'block',
        width: '100%',
        maxWidth: '960px',
        margin: '30px auto',
        padding: '0',
        backgroundColor: 'transparent',
        color: 'rgb(64, 64, 64)',
        fontSize: '15px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Helvetica Neue", Arial, sans-serif'
      }}
    >
      <div 
        className="cf-columns two"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0',
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        {/* Left Column: Why have I been blocked? */}
        <div 
          className="cf-column"
          style={{
            flex: '0 0 50%',
            maxWidth: '50%',
            padding: '0 22.5px 0 0',
            boxSizing: 'border-box'
          }}
        >
          <h2 
            style={{
              display: 'block',
              fontSize: '30px',
              fontWeight: 400,
              lineHeight: '1.2',
              color: 'rgb(64, 64, 64)',
              margin: '0',
              padding: '0'
            }}
          >
            Why have I been blocked?
          </h2>

          <p 
            style={{
              display: 'block',
              fontSize: '15px',
              lineHeight: '1.5',
              color: 'rgb(64, 64, 64)',
              fontWeight: 400,
              margin: '15px 0 0',
              padding: '0'
            }}
          >
            This website is using a security service to protect itself from online attacks. The action you just performed triggered the security solution. There are several actions that could trigger this block including submitting a certain word or phrase, a SQL command or malformed data.
          </p>
        </div>

        {/* Right Column: What can I do to resolve this? */}
        <div 
          className="cf-column"
          style={{
            flex: '0 0 50%',
            maxWidth: '50%',
            padding: '0 0 0 22.5px',
            boxSizing: 'border-box'
          }}
        >
          <h2 
            style={{
              display: 'block',
              fontSize: '30px',
              fontWeight: 400,
              lineHeight: '1.2',
              color: 'rgb(64, 64, 64)',
              margin: '0',
              padding: '0'
            }}
          >
            What can I do to resolve this?
          </h2>

          <p 
            style={{
              display: 'block',
              fontSize: '15px',
              lineHeight: '1.5',
              color: 'rgb(64, 64, 64)',
              fontWeight: 400,
              margin: '15px 0 0',
              padding: '0'
            }}
          >
            You can email the site owner to let them know you were blocked. Please include what you were doing when this page came up and the Cloudflare Ray ID found at the bottom of this page.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .cf-columns.two {
            flex-direction: column;
          }
          .cf-column {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default DetailsSection;