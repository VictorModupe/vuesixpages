<template>
  <section class="benefits-section">
    <div class="benefits-container">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4712ce1ff3d502bb38ca3770d3b5f2165162ac2e7c2bbe4887ec956fc1f0f33?placeholderIfAbsent=true&apiKey=fdef915b5f504869b839d94e1c416b46"
        class="benefits-image"
        alt="Visual representation of Answer24 customer benefits"
      />
      <div class="benefits-content">
        <h1 class="benefits-title">
          Waarom klant worden bij
          <span class="highlight-text">Answer24 ?</span>
        </h1>
        <p class="benefits-description">
          Ik ben een AI robot en verhoog uw omzet en klanttevredenheid!
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits-section {
  border-radius: 32px;
  background-color: rgba(246, 248, 250, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: Nunito, sans-serif;
  color: rgba(42, 43, 44, 1);
  justify-content: center;
  padding: 119px 23px;
}

.benefits-container {
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.benefits-image {
  aspect-ratio: 1.79;
  object-fit: contain;
  object-position: center;
  width: 651px;
  align-self: stretch;
  min-width: 240px;
  margin: auto 0;
}

.benefits-content {
  align-self: stretch;
  display: flex;
  min-width: 240px;
  flex-direction: column;
  justify-content: flex-start;
  width: 602px;
  margin: auto 0;
}

.benefits-title {
  width: 100%;
  font-size: 56px;
  font-weight: 700;
  letter-spacing: -1.12px;
  line-height: 78px;
}

.highlight-text {
  color: rgba(3, 130, 198, 1);
}

.benefits-description {
  align-self: stretch;
  width: 100%;
  margin-top: 16px;
  font-size: 24px;
  font-weight: 400;
  line-height: 38px;
}

@media (max-width: 991px) {
  .benefits-section {
    padding: 100px 20px;
  }

  .benefits-container {
    max-width: 100%;
  }

  .benefits-image {
    max-width: 100%;
  }

  .benefits-content {
    max-width: 100%;
  }

  .benefits-title {
    max-width: 100%;
    font-size: 40px;
    line-height: 62px;
  }

  .benefits-description {
    max-width: 100%;
  }
}
</style>