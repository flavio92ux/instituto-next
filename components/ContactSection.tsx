"use client";

import SendMail from './ContactSection/SendMail';
import ScheduleVisit from './ContactSection/ScheduleVisit';
import ContactInfo from './ContactSection/ContactInfo';
import ContactHeader from './ContactSection/ContactHeader';
import GoogleMap from './ContactSection/GoogleMap';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className='hidden lg:block'>
          <ContactHeader />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* <SendMail /> */}
          <GoogleMap />
          <div>
            <div className='hidden lg:block'>
              <ContactInfo />
              <ScheduleVisit />
            </div>      
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;