import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface GoogleRecaptchaProps {
  siteKey: string;
  onChange: (token: string | null) => void;
  onExpired?: () => void;
  theme?: 'light' | 'dark';
  keyProp?: number;
}

export default function GoogleRecaptcha({
  siteKey,
  onChange,
  onExpired,
  theme = 'light',
  keyProp,
}: GoogleRecaptchaProps) {
  if (!siteKey) {
    return null;
  }

  return (
    <ReCAPTCHA
      key={keyProp}
      sitekey={siteKey}
      onChange={onChange}
      onExpired={onExpired}
      theme={theme}
    />
  );
}
