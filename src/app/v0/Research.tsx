import React from 'react';
import Section from './Section';

const Research: React.FC = () => (
  <Section>
    <p className="text-emerald-800">
      My research focuses on helping language models tokenize and represent text better. Here are my most recent and representative publications:
    </p>
    <ul className="list-disc list-inside space-y-2 text-emerald-800">
      <li>
        <strong>Thawani A.</strong>, Ghanekar S., Kumar D., Pujara J. <em>Does Subword Vocabulary hold back Machine Translation?</em>. (submitted 2024).
        <a href="https://aclanthology.org/2023.findings-emnlp.662/" className="text-emerald-600 hover:underline ml-2">Anthology</a>, 
        <a href="https://arxiv.org/abs/2310.11628" className="text-emerald-600 hover:underline ml-2">Arxiv</a>, 
        <a href="https://drive.google.com/file/d/1kBMsduKSNS28x1AjWJf1dz56ti5RYzMM/view?usp=sharing" className="text-emerald-600 hover:underline ml-2">Poster</a>, 
        <a href="https://github.com/avi-jit/eTok" className="text-emerald-600 hover:underline ml-2">Code</a>
      </li>
      <li>
        <strong>Thawani A.</strong>, Ghanekar S., Zhu X., Pujara J. <em>Learn Your Tokens: Word-Pooled Tokenization for Language Modeling</em>. <strong>EMNLP 2023</strong> Findings. 
        <a href="https://aclanthology.org/2023.findings-emnlp.662/" className="text-emerald-600 hover:underline ml-2">Anthology</a>, 
        <a href="https://arxiv.org/abs/2310.11628" className="text-emerald-600 hover:underline ml-2">Arxiv</a>, 
        <a href="https://drive.google.com/file/d/1kBMsduKSNS28x1AjWJf1dz56ti5RYzMM/view?usp=sharing" className="text-emerald-600 hover:underline ml-2">Poster</a>, 
        <a href="https://github.com/avi-jit/eTok" className="text-emerald-600 hover:underline ml-2">Code</a>
      </li>
      <li>
        <strong>Thawani A.</strong>, Pujara J., Kalyan A. <em>Estimating Numbers without Regression</em>. Negative Insights workshop at <strong>EACL 2023</strong>. 
        <a href="https://arxiv.org/abs/2310.06204" className="text-emerald-600 hover:underline ml-2">Arxiv</a>, 
        <a href="https://underline.io/lecture/71866-estimating-numbers-without-regression" className="text-emerald-600 hover:underline ml-2">Presentation</a>
      </li>
      <li>
        Kumar D*, <strong>Thawani A*.</strong> <em>BPE with N-Grams and Skip-Grams</em>. Negative Insights workshop at <strong>ACL 2022</strong>. (*equal contribution) 
        <a href="https://aclanthology.org/2022.insights-1.24" className="text-emerald-600 hover:underline ml-2">Anthology</a>, 
        <a href="https://docs.google.com/presentation/d/1TTNe6Obl0L69J2H-1i2JXaEhRsrmIDYCrlylT5wrROE/edit?usp=sharing" className="text-emerald-600 hover:underline ml-2">Slides</a>, 
        <a href="https://openreview.net/forum?id=rHed93bCG-5" className="text-emerald-600 hover:underline ml-2">Reviews</a>, 
        <a href="https://github.com/pegasus-lynx/mwe-bpe" className="text-emerald-600 hover:underline ml-2">Code</a>
      </li>
      <li>
        <strong>Thawani A.</strong>, et al. <em>Numeracy enhances Literacy in Language Models</em>. <strong>EMNLP</strong> (2021). 
        <a href="https://aclanthology.org/2021.emnlp-main.557" className="text-emerald-600 hover:underline ml-2">Anthology</a>, 
        <a href="https://drive.google.com/file/d/1-GIUOTRLavVzA_ynQ0HqTR_RMq2GezOI/view?usp=sharing" className="text-emerald-600 hover:underline ml-2">Slides</a>, 
        <a href="https://drive.google.com/file/d/1QluCr79hAHkA_oCwD6JHUBQAQ81rMste/view?usp=sharing" className="text-emerald-600 hover:underline ml-2">Video</a>, 
        <a href="https://drive.google.com/file/d/1DntS8pRlpsRnO3UpYZeo3wzAOJiHLfY1/view?usp=sharing" className="text-emerald-600 hover:underline ml-2">Poster</a>, 
        <a href="https://twitter.com/thawani_avijit/status/1434168008046301185" className="text-emerald-600 hover:underline ml-2">Thread</a>, 
        <a href="https://github.com/avi-jit/numeracy-literacy" className="text-emerald-600 hover:underline ml-2">Code</a>, 
        <a href="https://drive.google.com/file/d/1IUv9Rk3VqxceP58NyrEENAcr30P0etis/view?usp=sharing" className="text-emerald-600 hover:underline ml-2">ACL21 Reviews</a>
      </li>
      <li>
        <strong>Thawani A.</strong> et al. <em>Representing Numbers in NLP: a Survey and a Vision</em>. <strong>NAACL</strong> (2021). 
        <a href="https://nlpnewsletter.substack.com/i/82970323/naacl" className="text-emerald-600 hover:underline ml-2">Coverage</a>, 
        <a href="https://www.aclweb.org/anthology/2021.naacl-main.53" className="text-emerald-600 hover:underline ml-2">Anthology</a>, 
        <a href="https://arxiv.org/abs/2103.13136" className="text-emerald-600 hover:underline ml-2">Arxiv</a>, 
        <a href="https://docs.google.com/presentation/d/1jDWLe6LiHtw5gK4klDQ9t5Ttt1llT38DlGgaybf4qnw/edit?usp=sharing" className="text-emerald-600 hover:underline ml-2">Slides</a>, 
        <a href="https://drive.google.com/file/d/1muiAfVDx_Ul3Gqq9I-asn5p1AnLkrFTF/view?usp=sharing" className="text-emerald-600 hover:underline ml-2">Video</a>, 
        <a href="https://twitter.com/thawani_avijit/status/1375033476194312194?s=20" className="text-emerald-600 hover:underline ml-2">Thread</a>
      </li>
      <li>
        <strong>Thawani A.</strong> et al. <em>Entity Linking to Knowledge Graphs to Infer Column Types and Properties</em>. <strong>SemTab @ ISWC</strong> (2019). 
        <a href="http://www.cs.ox.ac.uk/isg/challenges/sem-tab/2019/papers/Tabularisi.pdf" className="text-emerald-600 hover:underline ml-2">PDF</a>, 
        <a href="http://www.cs.ox.ac.uk/isg/challenges/sem-tab/2019/slides/TabularISI.pdf" className="text-emerald-600 hover:underline ml-2">Slides</a>
      </li>
      <li>
        <strong>Thawani A.</strong> et al. <em>Are Online Reviews of Physicians Biased Against Female Providers?</em> <strong>MLHC</strong> (2019). 
        <a href="https://www.mlforhc.org/s/Thawani.pdf" className="text-emerald-600 hover:underline ml-2">PDF</a>, 
        <a href="https://github.com/avi-jit/RateMDs" className="text-emerald-600 hover:underline ml-2">Code</a>
      </li>
      <li>
        <strong>Thawani, Avijit</strong> et al. <em>SWOW-8500: Word Association task for Intrinsic Evaluation of Word Embeddings</em>. <strong>RepEval @ NAACL</strong> (2019). 
        <a href="https://www.aclweb.org/anthology/W19-2006" className="text-emerald-600 hover:underline ml-2">Anthology</a>, 
        <a href="https://github.com/avi-jit/SWOW-eval/blob/master/1559781908296_small.pdf" className="text-emerald-600 hover:underline ml-2">Poster</a>, 
        <a href="https://github.com/avi-jit/SWOW-eval" className="text-emerald-600 hover:underline ml-2">Code</a>
      </li>
      <li>
        Singh, A.K., <strong>Thawani A.</strong>, Panchal M., Gupta A., & McAuley J. <em>IJCNLP-2017 Task 3: Review Opinion Diversification (RevOpiD-2017)</em>. <strong>IJCNLP</strong> (2017). 
        <a href="http://aclweb.org/anthology/I17-4003" className="text-emerald-600 hover:underline ml-2">Anthology</a>
      </li>
      <li>
        Singh A.K., <strong>Thawani A.</strong>, Gupta A., & Mundotiya R.K. <em>Evaluating Opinion Summarization in Ranking</em>. <strong>AIRS</strong> (2017). 
        <a href="https://link.springer.com/content/pdf/10.1007%2F978-3-319-70145-5_17.pdf" className="text-emerald-600 hover:underline ml-2">PDF</a>
      </li>
    </ul>
    <p className="mt-4 text-emerald-800">
      For more information, you can check my profiles on:
      <a href="https://scholar.google.com/citations?user=i67YV2QAAAAJ" className="text-emerald-600 hover:underline ml-2">Google Scholar</a>,
      <a href="https://www.semanticscholar.org/author/Avijit-Thawani/37574242" className="text-emerald-600 hover:underline ml-2">Semantic Scholar</a>,
      <a href="https://dblp.uni-trier.de/pid/208/4386.html" className="text-emerald-600 hover:underline ml-2">DBLP</a>, and
      <a href="https://orcid.org/0000-0002-4289-3607" className="text-emerald-600 hover:underline ml-2">ORCID</a>.
    </p>
  </Section>
);

export default Research;