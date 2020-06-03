async function registerSW() {
    if('serviceWorker' in navigator) {
      try {
        const sw = await navigator.serviceWorker.register('sw.js');
        console.log('sw registrado correctamente', { sw });
      } catch (error) {
        console.log('registro de service worker ha fallado', {error})
      }
    }
  }
  
  registerSW();