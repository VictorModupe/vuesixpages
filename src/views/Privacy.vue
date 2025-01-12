<template>
      <br />
      <br />
    <section class="button-text-container">
      <button >
        <h2>Version 1.2</h2>
      </button>
      <h2 id="text">January 8, 2025</h2>
    </section>
    <div>
      <div class="intro-text">
        <h3>Privacy Policy</h3>
        <br /> 
 
      </div>
        <div class="terms-container">
          <div class="terms-content">
            <div class="terms-intro">
      Please read these Terms and Conditions (&quot;Terms&quot;, &quot;Terms and
      Conditions&quot;) carefully before using [website/application/service]
      (the &quot;Service&quot;) operated by [company name] (&quot;us&quot;,
      &quot;we&quot;, or &quot;our&quot;).
      <br />
      Your access to and use of the Service is conditioned on your acceptance of
      and compliance with these Terms. These Terms apply to all visitors, users,
      and others who access or use the Service.
      <br />
      By accessing or using the Service, you agree to be bound by these Terms.
      If you disagree with any part of the terms, then you may not access the
      Service.
    </div>
    <h2 class="section-heading">Accounts</h2>
    <div class="section-text">
      1.1. When you create an account with us, you must provide accurate and
      complete information. You are solely responsible for the activity that
      occurs on your account and must keep your account password secure.
      <br />
      1.2. You must notify us immediately upon becoming aware of any breach of
      security or unauthorized use of your account.
    </div>
    <h2 class="section-heading">Content</h2>
    <div class="section-text">
      2.1. Our Service allows you to post, link, store, share, and otherwise
      make available certain information, text, graphics, videos, or other
      material (&quot;Content&quot;). You are responsible for the Content that
      you post on or through the Service, including its legality, reliability,
      and appropriateness.
      <br />
      <br />
      2.2. By posting Content on or through the Service, you grant us the right
      and license to use, modify, publicly perform, publicly display, reproduce,
      and distribute such Content on and through the Service. You retain any and
      all of your rights to any Content you submit, post or display on or
      through the Service and you are responsible for protecting those rights.
    </div>
    <h2 class="section-heading">Intellectual Property</h2>
    <div class="section-text">
      3.1. The Service and its original content (excluding Content provided by
      users), features, and functionality are and will remain the exclusive
      property of [company name] and its licensors. The Service is protected by
      copyright, trademark, and other laws of both the [country] and foreign
      countries. Our trademarks and trade dress may not be used in connection
      with any product or service without the prior written consent of [company
      name].
      <br />
      <br />
      4. Links To Other Web Sites
      <br />
      4.1. Our Service may contain links to third-party web sites or services
      that are not owned or controlled by [company name].
      <br />
      4.2. [company name] has no control over, and assumes no responsibility
      for, the content, privacy policies, or practices of any third-party web
      sites or services. You further acknowledge and agree that [company name]
      shall not be responsible or liable, directly or indirectly, for any damage
      or loss caused or alleged to be caused by or in connection with the use of
      or reliance on any such content, goods, or services available on or
      through any such web sites or services.
    </div>
    <h2 class="section-heading">Termination</h2>
    <div class="section-text">
      5.1. We may terminate or suspend access to our Service immediately,
      without prior notice or liability, for any reason whatsoever, including
      without limitation if you breach the Terms.
      <br />
      <br />
      5.2. All provisions of the Terms which by their nature should survive
      termination shall survive termination, including, without limitation,
      ownership provisions, warranty disclaimers, indemnity, and limitations of
      liability.
    </div>
  </div>
</div>
      </div>
      <br />
      <br />
      <Banner />
      <Footer />
  </template>
  <script setup>

  import Footer from "../components/Footer.vue";
  import Banner from '../components/Banner.vue'
  
  
  </script>
  
<style scoped>
.button-text-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.intro-text {
  text-align: center;
  margin-bottom: 20px;
  font-size: 49px;
}
/* .intro-text h3 {
  color: #2a2b2c;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -1.12px;
  margin: 0;
} */
.terms-container {
    display: flex;
    max-width: 800px;
    flex-direction: column;
    overflow: hidden;
    color: rgba(8, 8, 8, 1);
    font: 400 16px/29px Nunito, sans-serif;
    margin-left: 250px;
  }
  .terms-content {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .terms-intro {
    width: 100%;
  }
  .section-heading {
    font: 600 24px/1.2 Nunito, sans-serif;
    margin: 24px 0 0;
    width: 100%;
  }
  .section-text {
    margin: 24px 0 0;
    width: 100%;
  }
  @media (max-width: 991px) {
    .terms-content,
    .terms-intro,
    .section-heading,
    .section-text {
      max-width: 100%;
    }
  }
  button{
    display: flex;
    padding: 8px 12px;
    align-items: center;
    border-radius: 30px;
    background: var(--Yellow-100, #FBE4AB);
    color: black;
    border: #FBE4AB;
    font-size: 10px;
    cursor: pointer;
  }
  #text{
    font-size: 17px;
  }

</style>

  