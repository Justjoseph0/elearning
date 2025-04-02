import React from 'react'

const Partners = () => (
  <section className="py-12 bg-customDark">
    <h2 className="text-2xl font-semibold text-center text-light mb-8">Trusted By</h2>
    <div className="flex justify-center gap-12 max-w-7xl mx-auto px-8 flex-wrap">
      <img src="/aws-logo.png" alt="AWS" className="h-12" />
      <img src="/azure-logo.png" alt="Azure" className="h-12" />
      <img src="/gcp-logo.png" alt="Google Cloud" className="h-12" />
    </div>
  </section>
);

export default Partners