import React from 'react';
import { Mail, FileText, Instagram, Twitter, Linkedin } from 'lucide-react';
import Section from './Section';

const Home: React.FC = () => (
  <Section>
    <p className="text-emerald-800 mb-4">
    Friends (as if I have any) call me Avi. I'm a PhD <del>student</del> from Univ of Southern California in language modeling.
    </p>
    <div className="mt-4 flex space-x-4 mb-8">
      <a href="mailto:avijit.thawani@gmail.com" className="text-emerald-600 hover:underline flex items-center space-x-2">
        <Mail size={18} />
        <span>Email</span>
      </a>
      <a href="https://www.overleaf.com/read/pfvrgckrmmqv" className="text-emerald-600 hover:underline flex items-center space-x-2">
        <FileText size={18} />
        <span>Resume</span>
      </a>
      <a href="https://instagram.com/avijit_thawani" className="text-emerald-600 hover:underline flex items-center space-x-2">
        <Instagram size={18} />
        <span>Instagram</span>
      </a>
      <a href="https://twitter.com/thawani_avijit" className="text-emerald-600 hover:underline flex items-center space-x-2">
        <Twitter size={18} />
        <span>Twitter</span>
      </a>
      <a href="https://www.linkedin.com/in/avi-jit/" className="text-emerald-600 hover:underline flex items-center space-x-2">
        <Linkedin size={18} />
        <span>LinkedIn</span>
      </a>
    </div>
    <p className="mt-4 text-emerald-800 mb-4">
      I've been fortunate to also be able to do research with a number of amazing mentors:
    </p>
    <table className="mt-4">
      <tbody>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><img src="/static/usc.jpeg" alt="USC" style={{ width: '200px' }} /></td>
          <td className="pb-4">My thesis committee: <a href="http://jaypujara.org" className="text-emerald-600 hover:underline">Jay Pujara</a>, <a href="http://swabhs.com" className="text-emerald-600 hover:underline">Swabha Swayamdipta</a>, <a href="https://dyogatama.github.io/" className="text-emerald-600 hover:underline">Dani Yogatama</a>.</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><img src="/static/msr.png" alt="MSR" style={{ width: '200px' }} /></td>
          <td className="pb-4"><a href="https://www.microsoft.com/en-us/research/lab/microsoft-health-futures/" className="text-emerald-600 hover:underline">Microsoft Research Health Futures</a>, Cambridge UK. Mentors: Stephanie Hyland, Flora Liu, Shruthi Bannur. Summer 2023.</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><img src="/static/alexa.png" alt="Alexa" style={{ width: '200px' }} /></td>
          <td className="pb-4">Amazon Alexa Conversations Lab126 Sunnyvale. Mentors: Rohan Mukherjee, Hann Wang, <a href="https://www.amazon.science/author/arjit-biswas" className="text-emerald-600 hover:underline">Arijit Biswas</a>. Summer 2022.</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><img src="/static/ai2.png" alt="AI2" style={{ width: '200px' }} /></td>
          <td className="pb-4">Allen Institute of Artificial Intelligence (Aristo). Mentors: <a href="http://ashwinkalyan.com/" className="text-emerald-600 hover:underline">Ashwin Kalyan</a>, Peter Clark. Summer 2021.</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><img src="/static/neu.png" alt="NEU" style={{ width: '200px' }} /></td>
          <td className="pb-4">Northeastern University, Boston. Mentor: <a href="http://www.byronwallace.com/" className="text-emerald-600 hover:underline">Byron Wallace</a>. Summer 2018.</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><img src="/static/sutd.png" alt="SUTD" style={{ width: '200px' }} /></td>
          <td className="pb-4">Singapore University of Technology and Design, Singapore. Mentor: Yuen Chau. Summer 2016.</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><img src="/static/iitbhu.jpg" alt="IIT BHU" style={{ width: '200px' }} /></td>
          <td className="pb-4">I did my undergrad and masters in Computer Science at the Indian Institute of Technology <a href="https://www.iitbhu.ac.in/dept/cse" className="text-emerald-600 hover:underline">IIT BHU</a> Varanasi.</td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export default Home;