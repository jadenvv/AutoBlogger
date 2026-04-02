import puppeteer from "puppeteer"
const githook = {

  get_browser: async function (): Promise<void> {
    const browser = await puppeteer.launch({
      headless: false, // could try headless 'shell' in the furture for better performance
      slowMo: 250
    });


  },



};
export default githook; 
