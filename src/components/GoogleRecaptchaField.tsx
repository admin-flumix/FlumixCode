import React, { useImperativeHandle, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export interface GoogleRecaptchaFieldHandle {
  reset: () => void;
  getValue: () => string | null;
}

interface GoogleRecaptchaFieldProps {
  onChange?: (token: string | null) => void;
  onExpired?: () => void;
}

const GoogleRecaptchaField = React.forwardRef<GoogleRecaptchaFieldHandle, GoogleRecaptchaFieldProps>(function GoogleRecaptchaField({ onChange, onExpired }, ref) {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const siteKey = (import.meta as any).env?.VITE_RECAPTCHA_SITE_KEY as string | undefined;

  useImperativeHandle(ref, () => ({
    reset: () => recaptchaRef.current?.reset(),
    getValue: () => recaptchaRef.current?.getValue() ?? null,
  }));

  if (!siteKey) {
    return (
      <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 px-3 py-2 text-2xs text-slate-500">
        reCAPTCHA is not configured yet. Add VITE_RECAPTCHA_SITE_KEY to enable human verification.
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={siteKey}
        onChange={onChange}
        onExpired={onExpired}
        theme="light"
      />
    </div>
  );
});

export default GoogleRecaptchaField;
