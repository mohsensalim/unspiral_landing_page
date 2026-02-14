"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function Waitlist() {
  useEffect(() => {
    // Load MailerLite fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.mlcdn.com/fonts.css?version=1769616';
    document.head.appendChild(link);

    return () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        /* MailerLite Form Styles */
        .ml-form-embedSubmitLoad {
          display: inline-block;
          width: 20px;
          height: 20px;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }

        .ml-form-embedSubmitLoad:after {
          content: " ";
          display: block;
          width: 11px;
          height: 11px;
          margin: 1px;
          border-radius: 50%;
          border: 4px solid #fff;
          border-color: #ffffff #ffffff #ffffff transparent;
          animation: ml-form-embedSubmitLoad 1.2s linear infinite;
        }

        @keyframes ml-form-embedSubmitLoad {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        #mlb2-36537294.ml-form-embedContainer {
          box-sizing: border-box;
          display: table;
          margin: 0 auto;
          position: static;
          width: 100% !important;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper {
          background-color: transparent;
          border-width: 0px;
          border-color: transparent;
          border-radius: 4px;
          border-style: solid;
          box-sizing: border-box;
          display: inline-block !important;
          margin: 0;
          padding: 0;
          position: relative;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper.embedForm {
          max-width: 600px;
          width: 100%;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody {
          padding: 0;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent {
          text-align: left;
          margin: 0;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow {
          margin: 0 0 10px 0;
          width: 100%;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
          background-color: #1e293b !important;
          color: #f1f5f9 !important;
          border-color: #334155;
          border-radius: 9999px !important;
          border-style: solid !important;
          border-width: 2px !important;
          font-family: 'Inter', 'Open Sans', Arial, Helvetica, sans-serif;
          font-size: 18px !important;
          height: auto;
          line-height: 21px !important;
          margin-bottom: 0;
          margin-top: 0;
          padding: 20px 28px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          max-width: 100% !important;
          transition: all 0.3s ease;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:focus {
          border-color: #0d9488 !important;
          outline: none;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.2);
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::placeholder {
          color: #64748b;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit {
          margin: 0;
          float: left;
          width: 100%;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
          background: linear-gradient(135deg, #0d9488 0%, #0891b2 100%) !important;
          border: none !important;
          border-radius: 9999px !important;
          box-shadow: 0 4px 16px rgba(13, 148, 136, 0.3), 0 0 0 1px rgba(13, 148, 136, 0.1) !important;
          color: #ffffff !important;
          cursor: pointer;
          font-family: 'Inter', 'Open Sans', Arial, Helvetica, sans-serif !important;
          font-size: 18px !important;
          font-weight: 600 !important;
          line-height: 21px !important;
          height: auto;
          padding: 20px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(13, 148, 136, 0.35), 0 0 0 1px rgba(13, 148, 136, 0.2) !important;
          background: linear-gradient(135deg, #0f766e 0%, #0e7490 100%) !important;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover::before {
          left: 100%;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading {
          display: none;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
          padding: 0;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4 {
          color: #f1f5f9;
          font-family: 'Inter', 'Open Sans', Arial, Helvetica, sans-serif;
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 16px 0;
          text-align: center;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p {
          color: #94a3b8;
          font-family: 'Inter', 'Open Sans', Arial, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 28px;
          margin: 0 0 16px 0;
          text-align: center;
        }

        #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent svg {
          color: #0d9488;
        }

        .ml-error input {
          border-color: #ef4444 !important;
        }

        @media only screen and (max-width: 640px) {
          #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
            font-size: 16px !important;
            padding: 18px 24px !important;
          }
          
          #mlb2-36537294.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
            font-size: 16px !important;
            padding: 18px !important;
          }
        }
      `}</style>

      <section id="waitlist" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-teal-400/10 via-cyan-400/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div 
            className="glass-card rounded-[2.5rem] p-10 sm:p-16 text-center"
            style={{ boxShadow: 'var(--shadow-xl)' }}
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 text-white mb-8 shadow-xl">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 bg-clip-text text-transparent">
                Stay updated with Unspiral
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
              Get notified about new features, updates, and mindfulness tips delivered to your inbox.
            </p>

            {/* MailerLite Form */}
            <div id="mlb2-36537294" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-36537294">
              <div className="ml-form-align-center">
                <div className="ml-form-embedWrapper embedForm">
                  <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                    <div className="ml-form-embedContent" style={{ marginBottom: 0 }}></div>
                    
                    <form 
                      className="ml-block-form" 
                      action="https://assets.mailerlite.com/jsonp/2080419/forms/178224943000979238/subscribe" 
                      data-code="" 
                      method="post" 
                      target="_blank"
                    >
                      <div className="ml-form-formContent">
                        <div className="ml-form-fieldRow ml-last-item">
                          <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                            <input 
                              aria-label="email" 
                              aria-required="true" 
                              type="email" 
                              className="form-control" 
                              data-inputmask="" 
                              name="fields[email]" 
                              placeholder="Enter your email" 
                              autoComplete="email"
                            />
                          </div>
                        </div>
                      </div>

                      <input type="hidden" name="ml-submit" value="1" />
                      <input type="hidden" name="anticsrf" value="true" />

                      <div className="ml-form-embedSubmit">
                        <button type="submit" className="primary">Subscribe</button>
                        <button disabled style={{ display: 'none' }} type="button" className="loading">
                          <div className="ml-form-embedSubmitLoad"></div>
                          <span className="sr-only">Loading...</span>
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
                    <div className="ml-form-successContent">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-600 mb-6 shadow-lg">
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4>You&apos;re all set!</h4>
                      <p>Thanks for subscribing! You&apos;ll receive updates about new features, mindfulness tips, and more.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy note */}
            <p className="text-base text-slate-500 mt-8 font-light">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* MailerLite Scripts */}
      <Script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024"
        strategy="lazyOnload"
      />
      <Script id="mailerlite-success" strategy="lazyOnload">
        {`
          function ml_webform_success_36537294() {
            var $ = ml_jQuery || jQuery;
            $('.ml-subscribe-form-36537294 .row-success').show();
            $('.ml-subscribe-form-36537294 .row-form').hide();
          }
        `}
      </Script>
      <Script id="mailerlite-takel" strategy="lazyOnload">
        {`
          fetch("https://assets.mailerlite.com/jsonp/2080419/forms/178224943000979238/takel")
        `}
      </Script>
    </>
  );
}
