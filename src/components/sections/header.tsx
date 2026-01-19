import React from 'react';

const Header = () => {
  return (
    <header className="bg-white">
      {/* 
        The top header wrapper:
        - Width: 960px max (from high level design 'cf-wrapper')
        - Padding: 35px top (from computed styles)
        - Margin: 0 auto (centered)
      */}
      <div 
        className="mx-auto pt-[35px] pb-0 px-0 max-w-[960px] w-full text-left"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Helvetica Neue", Arial, sans-serif'
        }}
      >
        {/*
          Main Headline:
          - Color: #404040 (from computed styles for this specific element)
          - Font Size: 60px (from computed styles)
          - Font Weight: 400 (light-ish weight visual match)
          - Line Height: 1.2 (from high level design)
        */}
        <h1 
          className="m-0 p-0 text-[#404040] text-[60px] font-normal leading-[1.2] transition-colors"
        >
          Sorry, you have been blocked
        </h1>

        {/*
          Subheadline:
          - Color: #595959 (from computed styles for .cf-subheadline)
          - Font Size: 30px (from computed styles)
          - Font Weight: 300 (from high level design/visuals)
          - Line Height: 1.1 (from high level design)
        */}
        <h2 
          className="m-0 p-0 mt-0 text-[#595959] text-[30px] font-light leading-[1.1]"
        >
          <span className="inline-block mr-1">You are unable to access</span>
          <span>klikindogrosir.com</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;