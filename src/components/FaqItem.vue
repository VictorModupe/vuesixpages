<template>
  <div class="faq-item">
    <div 
      class="faq-question" 
      @click="toggleAnswer" 
      tabindex="0" 
      role="button" 
      :aria-expanded="isOpen"
    >
      <h2 class="question-text">{{ question }}</h2>
      <span class="toggle-icon">{{ isOpen ? '-' : '+' }}</span>
    </div>
    <p v-if="isOpen" class="faq-answer">{{ answer }}</p>
  </div>
</template>

  
  <script>
  export default {
    name: 'FaqItem',
    props: {
      question: {
        type: String,
        required: true
      },
      answer: {
        type: String,
        required: true
      },
      iconSrc: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleAnswer() {
        this.isOpen = !this.isOpen
      }
    }
  }
  </script>
  
  <style scoped>
  .faq-item {
    padding: 24px 0;
    width: 100%;
    max-width: 614px;
  }
  
  .faq-question {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    cursor: pointer;
  }
  
  .question-text {
    font-family: Nunito, sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.36px;
    color: var(--Secondary-500, #1a1c1e);
    margin: 0;
  }
  
  .toggle-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
  
  .faq-answer {
    font-family: Nunito, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.32px;
    color: var(--Secondary-500, #1a1c1e);
    margin: 12px 0 0;
  }
  
  @media (max-width: 991px) {
    .faq-item {
      max-width: 100%;
    }
    
    .faq-question {
      flex-wrap: wrap;
    }
  }
  </style>