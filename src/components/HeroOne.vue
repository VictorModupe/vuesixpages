<template>
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-left">
          <div class="hero-text-container">
            <div class="hero-content-wrapper">
              <div class="hero-text">
                <h1 class="hero-title">
                  Hallo, mijn naam is Ans van
                  <span class="highlight-text">Answer24!</span>
                </h1>
                <p class="hero-description">
                  Ik ben een AI robot en verhoog uw omzet en klanttevredenheid!
                </p>
              </div>
            </div>
            <form class="contact-form" @submit.prevent="handleSubmit">
              <h2 class="form-title">Gratis kennismaken?</h2>
              <div class="form-content">
                <div class="form-group">
                  <label for="phoneNumber" class="form-label">
                    Voer uw telefoonnummer in dan bel ik u direct!
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    class="form-input"
                    placeholder="Voer uw telefoonnummer in"
                    aria-label="Telefoonnummer invoerveld"
                    v-model="phoneNumber"
                    required
                  />
                </div>
                <div class="form-actions">
                  <button type="submit" class="submit-button" tabindex="0">
                    Bel me direct!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="hero-right">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de629ecaa28a3718388a78a247770c9b302c22e46cbb69aed3d55257307ca79b?placeholderIfAbsent=true&apiKey=fdef915b5f504869b839d94e1c416b46"
            alt="Answer24 AI Assistant"
            class="hero-image"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Answer24Hero',
    data() {
      return {
        phoneNumber: ''
      }
    },
    methods: {
      handleSubmit() {
        console.log('Form submitted with phone number:', this.phoneNumber)
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
  
  .hero-container {
    border-radius: 7px 7px 0 0;
    overflow: hidden;
    padding: 65px 55px 0;
  }
  
  .hero-content {
    gap: 20px;
    display: flex;
  }
  
  .hero-left {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 56%;
  }
  
  .hero-text-container {
    display: flex;
    flex-direction: column;
    font-family: Nunito, sans-serif;
    justify-content: start;
  }
  
  .hero-content-wrapper {
    display: flex;
    min-height: 248px;
    width: 100%;
    flex-direction: column;
    color: rgba(42, 43, 44, 1);
    justify-content: center;
  }
  
  .hero-text {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: start;
  }
  
  .hero-title {
    width: 100%;
    font-size: 56px;
    font-weight: 700;
    letter-spacing: -1.12px;
    line-height: 78px;
  }
  
  .highlight-text {
    color: rgba(0, 129, 197, 1);
  }
  
  .hero-description {
    width: 100%;
    margin-top: 16px;
    font-size: 24px;
    font-weight: 400;
    line-height: 38px;
  }
  
  .contact-form {
    border-radius: 16px;
    box-shadow: 0 24px 184px -10px rgba(0, 0, 0, 0.14);
    background-color: #fff;
    display: flex;
    margin-top: 24px;
    min-height: 245px;
    width: 495px;
    max-width: 100%;
    flex-direction: column;
    justify-content: start;
    padding: 26px 24px;
  }
  
  .form-title {
    color: rgba(13, 13, 18, 1);
    font-size: 20px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: -0.4px;
    text-align: center;
    align-self: start;
  }
  
  .form-content {
    display: flex;
    margin-top: 24px;
    min-height: 135px;
    width: 100%;
    flex-direction: column;
    justify-content: end;
  }
  
  .form-group {
    display: flex;
    width: 100%;
    flex-direction: column;
    font-size: 14px;
    line-height: 1;
    justify-content: start;
  }
  
  .form-label {
    width: 100%;
    color: rgba(13, 13, 18, 1);
    font-weight: 500;
  }
  
  .form-input {
    border-radius: 8px;
    border: 1px solid #dfe1e7;
    box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.04);
    background-color: #f8fafb;
    margin-top: 8px;
    min-height: 40px;
    width: 100%;
    color: rgba(129, 136, 152, 1);
    padding: 10px 12px;
  }
  
  .form-actions {
    display: flex;
    margin-top: 24px;
    min-height: 40px;
    width: 100%;
    align-items: center;
    justify-content: end;
  }
  
  .submit-button {
    border-radius: 6px;
    background-color: rgba(0, 129, 197, 1);
    min-width: 240px;
    width: 100%;
    color: rgba(255, 255, 255, 1);
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    line-height: 1;
    padding: 10px 16px;
    border: none;
    cursor: pointer;
  }
  
  .submit-button:hover {
    opacity: 0.9;
  }
  
  .submit-button:focus {
    outline: 2px solid rgba(0, 129, 197, 0.5);
    outline-offset: 2px;
  }
  
  .hero-right {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 44%;
    margin-left: 20px;
  }
  
  .hero-image {
    aspect-ratio: 0.83;
    object-fit: contain;
    object-position: center;
    width: 100%;
    flex-grow: 1;
  }
  
  @media (max-width: 991px) {
    .hero-container {
      padding: 0 20px;
    }
  
    .hero-content {
      flex-direction: column;
      align-items: stretch;
      gap: 0;
    }
  
    .hero-left {
      width: 100%;
    }
  
    .hero-text-container {
      max-width: 100%;
      margin-top: 40px;
    }
  
    .hero-content-wrapper {
      max-width: 100%;
    }
  
    .hero-text {
      max-width: 100%;
    }
  
    .hero-title {
      max-width: 100%;
      font-size: 40px;
      line-height: 62px;
    }
  
    .hero-description {
      max-width: 100%;
    }
  
    .contact-form {
      padding: 0 20px;
    }
  
    .form-title {
      max-width: 100%;
    }
  
    .form-content {
      max-width: 100%;
    }
  
    .form-group {
      max-width: 100%;
    }
  
    .form-label {
      max-width: 100%;
    }
  
    .form-input {
      max-width: 100%;
    }
  
    .form-actions {
      max-width: 100%;
    }
  
    .submit-button {
      max-width: 100%;
    }
  
    .hero-right {
      width: 100%;
    }
  
    .hero-image {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  </style>