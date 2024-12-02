import React from 'react';
import { HelpCircle, Book, MessageCircle, Phone } from 'lucide-react';

const supportCategories = [
  {
    icon: Book,
    title: 'Knowledge Base',
    description: 'Browse through our comprehensive guides and FAQs',
  },
  {
    icon: MessageCircle,
    title: 'Chat Support',
    description: 'Connect with our support team via live chat',
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call us directly for urgent assistance',
  },
];

const faqs = [
  {
    question: 'How do I share my medical records with a new doctor?',
    answer: 'You can easily share your medical records through the Share Records page. Simply enter the healthcare provider\'s email and set the access duration.',
  },
  {
    question: 'Is my medical data secure?',
    answer: 'Yes, all medical data is encrypted and stored securely using blockchain technology. Only authorized healthcare providers can access your information.',
  },
  {
    question: 'How do I schedule a virtual consultation?',
    answer: 'Navigate to the Appointments page and click "Schedule New". Choose "Virtual Consultation" as the appointment type and select your preferred time slot.',
  },
];

export default function Support() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Support Center</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Get help with using the Medical Report Management System</p>
      </div>

      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportCategories.map((category) => (
            <div key={category.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <category.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
                <button className="mt-4 btn-primary">Access Now</button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2 dark:text-white">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}