import React from 'react';
import Image from 'next/image';
import Section from './Section';

const Fun: React.FC = () => (
  <Section>
    <div className="space-y-6 text-emerald-800">
      <p>
        I love storytelling. My most popular <a href="https://www.youtube.com/watch?v=Uy_3XKqsJZk" className="text-emerald-600 hover:underline">short film</a> has over 65,000 views on YouTube, which involved two whole years and the effort of 50+ volunteer cast and crew. My other productions include a <a href="https://www.facebook.com/fmc.iitbhu/videos/747155185437805/" className="text-emerald-600 hover:underline">documentary on a World War 2 jet</a> and a <a href="https://www.facebook.com/fmc.iitbhu/videos/807030382783618/" className="text-emerald-600 hover:underline">comedy sketch on how our college hotspot resembles Facebook-ing</a>, as well as a cute romantic film, that is yet to be compiled and released!
      </p>

      <div className="aspect-w-16 aspect-h-9 h-96">
        <iframe 
          src="https://www.youtube.com/embed/Uy_3XKqsJZk?si=yT0o9R52pvSWYUVs" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      <p>
        I also write articles, stories, newspapers, <a href="https://thawani.notion.site" className="text-emerald-600 hover:underline">blogs</a>, songs & novels. Some of them are:
      </p>
      <ol className="list-decimal list-inside space-y-2">
        <li><strong>Published Articles</strong>: I have published in <a href="https://theprint.in/campus-voice/will-panjshir-become-a-taiwan-afghanistans-story-matches-with-china/732849/" className="text-emerald-600 hover:underline">The Print</a> and <a href="https://www.isi.edu/news/38134/do-humans-trust-ai-coworkers/" className="text-emerald-600 hover:underline">ISI News</a>.</li>
        <li><strong>Sci-fi novel</strong>: DNA Revolution, a story of Venezuela embroiled in a politico-military crisis on the eve of a major breakthrough in genetics.</li>
        <li><strong>Short stories book</strong>: Martyrs&apos; Horizon, inspired by a Chicken Soup book I read.</li>
        <li><strong>Newspaper</strong>: Articles for the college newsletter <a href="https://issuu.com/thequest_iitbhu" className="text-emerald-600 hover:underline">Quest</a> at IIT BHU, and the school newsletter at City Montessori School</li>
        <li><strong>Blogs</strong>: I have some old ones on <a href="https://medium.com/@avijitthawani" className="text-emerald-600 hover:underline">Medium</a> and many newer ones on <a href="https://thawani.notion.site" className="text-emerald-600 hover:underline">Notion</a>.</li>
      </ol>

      <p>
        I&apos;ve also participated in festival management, street plays, skits, dance clubs, robo-soccer, rap songs, stand-up comedy, handicrafts, and sketching.
      </p>

      <p>
        I consider myself a lifelong learner and a big fan of <a href="https://ncase.me/remember" className="text-emerald-600 hover:underline">spaced repetition</a>. I&apos;ve enrolled in a wide range of classes like Interactive Journalism, Chinese History, Macroeconomics, Social Entrepreneurship, Self-Defense, Improv, Hip-Hop Dance, Cognitive Neuroscience, Film Appreciation, and African History.
      </p>

      <p>
        I&apos;m an avid reader of books, both non-fiction and fiction. Currently loving Murakami. Trying to update my list on <a href="https://www.goodreads.com/user/show/4791083-avijit-thawani" className="text-emerald-600 hover:underline">Goodreads</a>.
      </p>

      <p>
        I have been fortunate enough to live in four countries and travel across the world. Some of the cities I&apos;ve been to are (most recent first):
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Europe: London, Berlin, Amsterdam, Utrecht, Florence, Pisa, Bruges, Dubrovnik, Dublin, Killarney, Galway, Cambridge</li>
        <li>United States: Baltimore, New York, Philadelphia, Boston, Los Angeles, Santa Barbara, San Diego, San Francisco, Michigan, Pittsburgh</li>
        <li>Asia: Beijing, Singapore, Kuala Lumpur, Seoul, Kathmandu, Tokyo</li>
        <li>New Zealand: Auckland, Queenstown, Wanaka, Makarora</li>
        <li>South India: Bangalore, Coorg, Pondicherry, Madras, Auroville, Rameshwaram</li>
        <li>West India: Mumbai, Goa, Pune, Shirdi</li>
        <li>East India: Puri, Kolkata</li>
        <li>North India: Manali, Nainital, Dehradun, Haridwar, Hrishikesh, Shimla, Chandigarh</li>
        <li>Central India: New Delhi, Lucknow, Varanasi, Allahabad, Agra, Dudhwa</li>
      </ul>
    </div>
  </Section>
);

export default Fun;