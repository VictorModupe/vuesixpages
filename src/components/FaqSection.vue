<template>
    <div class="faq-container">
      <div class="faq-header-section">
        <div class="faq-header">
          <div class="faq-tag">Some frequently asked questions 👍🏻</div>
          <h1 class="faq-title">Frequently asked questions</h1>
          <form class="search-form">
            <label for="searchInput" class="visually-hidden">Search for queries</label>
            <div class="search-input-wrapper">
              <div class="search-input-content">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fad6f46cef162b03b79813abecd4cd8220214a428f0facf2e210dcca150d26bf?placeholderIfAbsent=true&apiKey=fdef915b5f504869b839d94e1c416b46"
                  alt="Search icon"
                  class="search-icon"
                />
                <input 
                  type="search"
                  id="searchInput"
                  class="search-input"
                  placeholder="Search for queries"
                  aria-label="Search for queries"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="faq-content">
        <div class="faq-column">
          <FaqItem
            v-for="(item, index) in leftColumnFaqs"
            :key="`left-${index}`"
            :question="item.question"
            :answer="item.answer"
            :iconSrc="item.iconSrc"
          />
        </div>
        <div class="faq-column">
          <FaqItem
            v-for="(item, index) in rightColumnFaqs"
            :key="`right-${index}`"
            :question="item.question"
            :answer="item.answer"
            :iconSrc="item.iconSrc"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import FaqItem from './FaqItem.vue'
  
  export default {
    name: 'FaqSection',
    components: {
      FaqItem
    },
    data() {
      return {
        leftColumnFaqs: [
          {
            question: 'How does the partner program work?',
            answer: 'The Partner Program is a service that allows participating partners to earn commission and fees on referred customers. We provide you with the materials and resources you\'ll need to get started.',
            iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7d377dc3968815b7c4190bc7d837ece900175c6af7a9992f1731038a86e91951?placeholderIfAbsent=true&apiKey=fdef915b5f504869b839d94e1c416b46'
          },
          {
            question: 'Are there any fees?',
            answer: 'No fees to participate.',
            iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7d377dc3968815b7c4190bc7d837ece900175c6af7a9992f1731038a86e91951?placeholderIfAbsent=true&apiKey=fdef915b5f504869b839d94e1c416b46'
          },
          {
            question: 'How often do I get paid?',
            answer: 'Brex will send your earned fees on a monthly basis.',
            iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7d377dc3968815b7c4190bc7d837ece900175c6af7a9992f1731038a86e91951?placeholderIfAbsent=true&apiKey=fdef915b5f504869b839d94e1c416b46'
          }
        ],
        rightColumnFaqs: [
          {
            question: 'Am I eligible?',
            answer: 'If you work primarily with US-based companies that you think would benefit from Brex\'s unique financial products, we\'d love to have you on board.',
            iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7d377dc3968815b7c4190bc7d837ece900175c6af7a9992f1731038a86e91951?placeholderIfAbsent=true&apiKey=fdef915b5f504869b839d94e1c416b46'
          },
          {
            question: 'How much will I get paid?',
            answer: 'Brex offers partners tiered revenue share-based fee structures, which depend on the volume of customers you refer and how much money they spend on their Brex financial products. Apply to learn where your company fits in.',
            iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7d377dc3968815b7c4190bc7d837ece900175c6af7a9992f1731038a86e91951?placeholderIfAbsent=true&apiKey=fdef915b5f504869b839d94e1c416b46'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  
  .faq-container {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 35px 56px;
  }
  
  .faq-header-section {
    border-radius: 24px;
    background-color: #fafafe;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    padding: 133px 80px;
    font: 400 14px Nunito, sans-serif;
  }
  
  .faq-header {
    display: flex;
    margin-bottom: -27px;
    width: 100%;
    max-width: 1059px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .faq-tag {
    align-self: center;
    border-radius: 80px;
    background-color: #f4f4f7;
    color: var(--Secondary-500, #1a1c1e);
    letter-spacing: -0.28px;
    padding: 5px 25px;
  }
  
  .faq-title {
    color: #1b2632;
    font-size: 56px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -1.68px;
    text-align: center;
    margin: 12px 0;
  }
  
  .search-form {
    margin-top: 12px;
    width: 600px;
    max-width: 100%;
  }
  
  .search-input-wrapper {
    border-radius: 8px;
    border: 1px solid rgba(226, 226, 236, 0.46);
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.04);
    background-color: #fff;
    padding: 8px 12px;
  }
  
  .search-input-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .search-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
  
  .search-input {
    border: none;
    outline: none;
    width: 100%;
    font-family: Nunito Sans, sans-serif;
    color: #a3a3a3;
    font-size: 14px;
  }
  
  .faq-content {
    display: flex;
    margin-top: 36px;
    width: 100%;
    max-width: 1260px;
    align-items: start;
    gap: 32px;
    justify-content: center;
    flex-wrap: wrap;
    align-self: center;
  }
  
  .faq-column {
    display: flex;
    min-width: 240px;
    flex-direction: column;
    flex-grow: 1;
    width: 491px;
  }
  
  @media (max-width: 991px) {
    .faq-container {
      padding: 0 20px;
    }
  
    .faq-header-section {
      max-width: 100%;
      padding: 100px 20px;
    }
  
    .faq-header {
      max-width: 100%;
      margin-bottom: 10px;
    }
  
    .faq-tag {
      padding: 0 20px;
    }
  
    .faq-title {
      max-width: 100%;
      font-size: 40px;
    }
  
    .faq-content {
      max-width: 100%;
    }
  
    .faq-column {
      max-width: 100%;
    }
  }
  </style>