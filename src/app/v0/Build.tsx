import React from 'react';
import Image from 'next/image';
import Section from './Section';

const Build: React.FC = () => (
  <Section>
    <p className="text-emerald-800 mb-4">
      Alongside my PhD, I have been building and releasing consumer products by leading a group of employees and hacking away on weekends.
    </p>
    <p className="text-emerald-800 mb-4">
      In addition to these self-driven products, I love helping startups build proof-of-concepts and streamline their AI/NLP-related projects, whether it be in mobility APIs or fintech. Please reach out if you wish to chat!
    </p>
    <hr className="my-8" />
    <table className="mt-4">
      <tbody>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><Image src="/static/pinegapLogo.jpeg" alt="PineGap.ai" width={400} height={200} /></td>
          <td className="pb-4"><a href="https://www.pinegap.ai/" className="text-emerald-600 hover:underline">PineGap.ai</a> is a VC-backed startup that disrupts equity research with large language models and generative AI. As a founding MLE/LLM Engineer, I help finetune models, build RAG pipelines, custom evals, LangChains, and deploy these models in prod.</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><Image src="/static/saras.png" alt="Saras edtech chatbot" width={400} height={200} /></td>
          <td className="pb-4"><a href="https://t.me/saras_gpt_bot" className="text-emerald-600 hover:underline">Saras</a> is your personal AI tutor, that I developed as a Telegram chatbot and pitched at the New Venture Seed Contest (we won a $1500 grant) and the USC Trojan Tank (we stood third)!</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><Image src="/static/ballpark.png" alt="Ballpark" width={400} height={200} /></td>
          <td className="pb-4">Harsh helped me make <a href="https://ball-park.netlify.app" className="text-emerald-600 hover:underline">Wordle for Numbers</a> - a fun and informative game that lets you challenge your friends and improve your numeracy skills.</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><Image src="/static/survey.png" alt="Living Surveys" width={400} height={200} /></td>
          <td className="pb-4">Eshaan helped me create <a href="https://github.com/EshaanAgg/Research-Literature-Manager" className="text-emerald-600 hover:underline">Living Surveys</a>, an open source lit review tool that you can use to avoid FOMO in academia. We use Github Actions, Semantic Scholar, and Netlify to help you host your own living survey paper, with daily updated recommendations for new and relevant publications! Here&apos;s a <a href="https://youtu.be/FUIq9-lJ9ag?si=YjWr4ZFZjReJsEI2" className="text-emerald-600 hover:underline">talk at ISI</a> presenting the tool.</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><Image src="/static/designAR.jpg" alt="DesignAR" width={400} height={200} /></td>
          <td className="pb-4">Our Augmented Reality app was a national finalist and worldwide #6 at the Microsoft Imagine Cup 2016 and the Samsung VR Appathon. Our startup DesignAR received several VC funding offers.</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><Image src="/static/election.png" alt="Election Guide Interactive" width={400} height={200} /></td>
          <td className="pb-4">I teamed up with journalists from the USC Annenberg Media Interactive Desk to narrate a <a href="https://annenberginteractives.com/2020-2021/voting-information-by-state/" className="text-emerald-600 hover:underline">data story</a> on US 2020 Elections.</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><Image src="/static/sutd.png" alt="SUTD" width={400} height={200} /></td>
          <td className="pb-4">I was recruited in the Singapore Smart City Project to develop better sensors, so I also volunteered to model the incoming weather data from across the country with machine learning to make predictions.</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><Image src="/static/covid.png" alt="Covid" width={400} height={200} /></td>
          <td className="pb-4">Covid-19 brought tragic times in India. In between arranging oxygen for dying relatives, recovering myself, and chasing a conference submission deadline, I tried to <a href="https://avi-jit.github.io/covid-india/scatter#" className="text-emerald-600 hover:underline">visualize</a> the scale of the Indian crisis for Americans to better comprehend it. (Broken API)</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><Image src="/static/samsung.png" alt="Samsung" width={400} height={200} /></td>
          <td className="pb-4">Working with Samsung Research, I once voluntarily analyzed logged employee entry/exit data to analyze trends and share lessons with the Director of Samsung R&amp;D Bengaluru. Turns out, attendance peaks around (free) lunchtime!</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><Image src="/static/iitbhu.jpg" alt="Campus" width={400} height={200} /></td>
          <td className="pb-4">As an undergrad, I deployed several campus-wide data analytics including a harmless rip-off of Zuckerberg&apos;s FaceMash which received 11,000 hits in 2 days, as well as hourly internet usage statistics via the Intranet portal.</td>
        </tr>
        <tr className="mb-4">
          <td className="pr-4 pb-4"><Image src="/static/contraption.jpeg" alt="Contraption" width={400} height={200} /></td>
          <td className="pb-4">I&apos;m a big fan of mechanical contraptions (like the inventive devices that Tom builds to trap Jerry) so I made my own.</td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export default Build;