import React from 'react';
import { CheckIcon } from './Icons';

export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div className="toast-container">
      <div className={`toast ${toast.show ? 'show' : ''}`}>
        <span className="toast-icon">
          <CheckIcon size={18} />
        </span>
        <span>{toast.message}</span>
      </div>
    </div>
  );
}

