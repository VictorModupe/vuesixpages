<template>
    <section class="app-discovery">
      <div class="content-wrapper">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad352c9f20c8cccbf08c688762cc0a3afd11e9b3b5d6e1e177de434d560e19ab?placeholderIfAbsent=true&apiKey=fdef915b5f504869b839d94e1c416b46"
          class="app-preview"
          alt="Mobile app interface preview showing key features"
        />
        <div class="text-content">
          <h2 class="title">
            Ontdek onze
            <span class="highlight">handige app!</span>
          </h2>
          <p class="description">
            Met onze app blijven al jouw medewerkers – waar ze ook zijn – altijd
            up-to-date. Of het nu gaat om belangrijke updates of direct
            klantcontact, ze hebben alles wat ze nodig hebben binnen
            handbereik.<br />Geen achterstand, geen gemiste kansen.<br /><br />Gewoon
            een efficiënter en beter geïnformeerd team, altijd en overal.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .app-discovery {
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: end;
    font-family: Nunito, sans-serif;
    color: #2a2b2c;
    justify-content: center;
    padding: 99px 70px;
  }
  
  .content-wrapper {
    display: flex;
    align-items: center;
    gap: 40px 48px;
    justify-content: start;
    flex-wrap: wrap;
  }
  
  .app-preview {
    aspect-ratio: 0.53;
    object-fit: contain;
    object-position: center;
    width: 304px;
    align-self: stretch;
    min-width: 240px;
    margin: auto 0;
  }
  
  .text-content {
    align-self: stretch;
    display: flex;
    min-width: 240px;
    flex-direction: column;
    justify-content: start;
    width: 652px;
    margin: auto 0;
  }
  
  .title {
    font-size: 40px;
    font-weight: 700;
    line-height: 78px;
    letter-spacing: -0.8px;
  }
  
  .highlight {
    color: rgb(40, 132, 196);
  }
  
  .description {
    width: 100%;
    margin-top: 21px;
    gap: 10px;
    font-size: 24px;
    font-weight: 400;
    line-height: 38px;
  }
  
  @media (max-width: 991px) {
    .app-discovery {
      padding: 0 20px;
    }
  
    .content-wrapper {
      max-width: 100%;
    }
  
    .text-content {
      max-width: 100%;
    }
  
    .title {
      max-width: 100%;
    }
  
    .description {
      max-width: 100%;
    }
  }
  </style>