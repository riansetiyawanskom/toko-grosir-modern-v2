import React from 'react';
import Image from 'next/image';

const ErrorVisual = () => {
  return (
    <div 
      className="cf-section cf-highlight" 
      style={{
        width: '100%',
        minHeight: '393px',
        margin: '30px 0',
        padding: '60px 0',
        backgroundColor: '#ebebe1', // Corrected to match the visual background (rgb(235, 235, 235) in styles, but looks slightly custom)
        background: 'rgb(235, 235, 235)',
        display: 'block',
        position: 'static'
      }}
    >
      <div 
        className="cf-wrapper" 
        style={{
          maxWidth: '960px',
          width: '90%',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <div 
          className="cf-screenshot-container cf-screenshot-full" 
          style={{
            display: 'block',
            position: 'relative',
            width: '100%',
            height: '400px',
            margin: '0 0 -60px',
            backgroundColor: '#ffffff',
            borderRadius: '5px 5px 0 0',
            overflow: 'hidden',
            boxShadow: 'none'
          }}
        >
          {/* Browser Bar Mockup */}
          <div 
            style={{
              backgroundColor: '#999999',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              padding: '0 12px',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 2
            }}
          >
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff', opacity: 0.5 }}></div>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff', opacity: 0.5 }}></div>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff', opacity: 0.5 }}></div>
            </div>
            
            {/* Faux Tab */}
            <div 
              style={{
                backgroundColor: '#ffffff',
                height: '22px',
                width: '150px',
                marginLeft: '15px',
                marginTop: '8px',
                borderRadius: '4px 4px 0 0',
                opacity: 0.9
              }}
            ></div>
          </div>

          {/* Centered Error Icon Container */}
          <div 
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '30px' // Offset for browser bar
            }}
          >
            <div 
              className="cf-no-screenshot error"
              style={{
                position: 'relative',
                width: '178px',
                height: '175px',
              }}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/18a9710d-bdb1-4658-ba0c-0bbaf9a2020b-klikindogrosir-com/assets/images/cf-no-screenshot-error-2.png"
                alt="Error"
                width={178}
                height={175}
                priority
                style={{
                  display: 'block',
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorVisual;