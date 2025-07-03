"use client";

import SendMail from './ContactSection/SendMail';
import ScheduleVisit from './ContactSection/ScheduleVisit';
import ContactInfo from './ContactSection/ContactInfo';
import ContactHeader from './ContactSection/ContactHeader';
import GoogleMap from './ContactSection/GoogleMap';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* <SendMail /> */}
          <GoogleMap />
          <div>
            <ContactInfo />
            <ScheduleVisit />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;